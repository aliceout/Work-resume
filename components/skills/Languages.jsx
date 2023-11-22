import H2 from "/components/titles/h2";
import languages from "/data/languages";

export default function Languages() {
  const langs = languages.map((lang) => {
    return (
      <div key={lang.title} class="flex flex-col">
        <div class="flex items-center justify-start my-2 gap-x-2   text-sm ">
          <p class="text-slate-700 dark:text-slate-300">{lang.title}</p>
          <p class="text-slate-700 dark:text-slate-200">|</p>
          <p class="text-slate-500 dark:text-slate-200 font-semibold">
            {lang.level}
          </p>
        </div>
        <div class="w-full h-1.5 bg-blue-200 rounded-full">
          <div
            class="h-full text-center text-xs text-white bg-sky-600 rounded-full"
            style={{ width: lang.progress }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-y-3">
      <H2 text="Niveau linguistique" />
      <section className="grid px-4 md:grid-cols-2 gap-y-5 gap-x-20 dark:divide-gray-400">
        {langs}
      </section>
    </div>
  );
}
