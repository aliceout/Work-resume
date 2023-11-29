import Image from "next/image";
export default function ProfilPicture() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:hidden">
        <Image
          src="/images/profil-picture/color.jpg"
          alt="Profil picture"
          width={125}
          height={125}
          className="rounded-full drop-shadow-xl dark:grayscale"
        />
      </div>
      <div className="flex-col items-center justify-center hidden md:flex -mt-36">
        <Image
          src="/images/profil-picture/color.jpg"
          alt="Profil picture"
          width={200}
          height={200}
          className="rounded-full drop-shadow-xl dark:grayscale"
        />
      </div>
    </>
  );
}
