import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { useCallback, useEffect, useMemo, useState } from "react";

import { BsSearch as CiSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useStaticTranslation } from "/utils/translations/useTranslations";

export default function PortfolioCard({ project }) {
  const { t } = useStaticTranslation("pages");
  const description = project.description || "";
  const images = useMemo(() => {
    if (Array.isArray(project.gallery) && project.gallery.length > 0) {
      return project.gallery;
    }

    return project.picture ? [project.picture] : [];
  }, [project.gallery, project.picture]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = useCallback(
    (index = 0) => {
      if (!images.length) {
        return;
      }

      setActiveIndex(index);
      setIsModalOpen(true);
    },
    [images.length]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const lastIndex = images.length - 1;
      return prevIndex === 0 ? lastIndex : prevIndex - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const lastIndex = images.length - 1;
      return prevIndex === lastIndex ? 0 : prevIndex + 1;
    });
  }, [images.length]);

  return (
    <article className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-6 p-6 transition duration-300 shadow-lg rounded-2xl bg-gray-50/40 dark:bg-slate-900/80 lg:flex-row lg:items-start">
        <div className="flex flex-col justify-between flex-1 w-full gap-6">
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-2">
              <p className="text-xl font-bold text-primary dark:text-secondary">
                {project.title}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-base font-semibold text-black/80 dark:text-gray-300">
                  {project.client}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-400">
                  {project.date}
                </p>
              </div>
            </div>
            <div className="text-sm font-medium leading-relaxed text-justify text-slate-800 dark:text-gray-300">
              {description && <ReactMarkdown>{description}</ReactMarkdown>}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-2 border-t border-transparent lg:justify-start">
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                className="flex flex-row items-center px-6 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-primary dark:text-secondary ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-100/80 dark:hover:bg-gray-900/80 gap-x-2"
              >
                <CiSearch />
                {t("portfolio.btn.preview")}
              </Link>
            )}
            {project.repository && (
              <Link
                target="_blank"
                href={project.repository}
                className="flex flex-row items-center px-6 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-800/90 text-slate-900 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-gray-100/80 dark:hover:bg-gray-900/80 gap-x-2"
              >
                <FaGithub />
                <span className="text-slate-500 dark:text-gray-300">Github</span>
              </Link>
            )}
          </div>
        </div>
        {images.length > 0 && (
          <button
            type="button"
            onClick={() => openModal(0)}
            className="relative flex items-center justify-center w-full overflow-hidden transition duration-300 transform rounded-xl shadow-md group aspect-[16/9] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/80 min-h-[220px] sm:min-h-[260px] lg:w-[45%] lg:max-w-xl"
            aria-label={t("portfolio.btn.preview") || "Voir le projet"}
          >
            <Image
              src={images[0]}
              width={360}
              height={240}
              priority
              alt={project.title}
              className="object-cover w-full h-full transition duration-500 rounded-xl dark:brightness-75 group-hover:scale-[1.02] group-hover:brightness-110"
            />
            <span className="absolute inset-x-4 bottom-3 text-[0.7rem] font-medium text-white drop-shadow-lg">
              Cliquer pour agrandir
            </span>
          </button>
        )}
      </div>
      {isModalOpen && images.length > 0 && (
        <ImageCarouselModal
          images={images}
          activeIndex={activeIndex}
          onClose={closeModal}
          onPrevious={showPrevious}
          onNext={showNext}
          title={project.title}
        />
      )}
    </article>
  );
}

function ImageCarouselModal({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  title,
}) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const ANIMATION_DURATION = 220;

  const closeWithAnimation = useCallback(() => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    setIsVisible(false);
  }, [isClosing]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return undefined;
    }

    const frame = requestAnimationFrame(() => setIsVisible(true));
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeWithAnimation();
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        onPrevious();
      }

      if (event.key === "ArrowRight" && images.length > 1) {
        onNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, images.length, onPrevious, onNext, closeWithAnimation]);

  useEffect(() => {
    if (!isClosing) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION);

    return () => clearTimeout(timeout);
  }, [isClosing, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeWithAnimation}
    >
      <button
        type="button"
        onClick={closeWithAnimation}
        className="absolute text-white transition duration-200 rounded-full top-6 right-6 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
        aria-label="Fermer"
      >
        <IoClose className="w-9 h-9" />
      </button>
      <div
        className={`relative flex items-center justify-center w-full max-w-5xl gap-4 transition-all duration-300 ${
          isVisible && !isClosing
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center justify-center w-12 h-12 text-white transition duration-200 bg-white/10 rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
            aria-label="Voir l'image precedente"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>
        )}
        <div className="relative flex-1 overflow-hidden bg-black/40 rounded-2xl shadow-2xl">
          <Image
            src={images[activeIndex]}
            width={1200}
            height={750}
            priority
            alt={`${title || "Projet"} visuel ${activeIndex + 1}`}
            className="object-contain w-full h-full max-h-[75vh]"
          />
        </div>
        {images.length > 1 && (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center justify-center w-12 h-12 text-white transition duration-200 bg-white/10 rounded-full hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
            aria-label="Voir l'image suivante"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div className="absolute flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase bottom-6 bg-black/40 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body
  );
}
