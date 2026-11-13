import { useEffect, useState } from "react";

const projects = [
  {
    id: "organizer",
    number: "01",
    title: "Organizer na biurko",
    type: "Projekt produktu",
    year: "2024",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_20.46.48-kopia-1.png",
    alt: "Wizualizacja modułowego organizera na biurko",
    imageClass: "object-cover object-bottom",
  },
  {
    id: "hotel",
    number: "02",
    title: "Dune Hotel",
    type: "Identyfikacja wizualna",
    year: "2024",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_21.10.54-1.png",
    alt: "Granatowa identyfikacja wizualna Dune Hotel",
    imageClass: "object-cover object-bottom",
  },
  {
    id: "comon",
    number: "03",
    title: "COMO’n",
    type: "Projekt produktu",
    year: "2026",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_21.19.08.png",
    alt: "Wielofunkcyjny obiekt COMO’n do przechowywania i podawania chleba",
    imageClass: "object-contain",
  },
  {
    id: "recyklik",
    number: "04",
    title: "Recyklik",
    type: "Projekt UX/UI",
    year: "2026",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_21.22.11.png",
    alt: "Aplikacja Recyklik prezentowana na ekranie telefonu",
    imageClass: "object-cover object-center",
  },
  {
    id: "ida",
    number: "05",
    title: "Ida Wróblewska",
    type: "Identyfikacja marki",
    year: "2024",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_20.52.44.png",
    alt: "Identyfikacja wizualna marki biżuterii Ida Wróblewska",
    imageClass: "object-contain",
  },
  {
    id: "plume",
    number: "06",
    title: "PLUME",
    type: "Projekt opakowania",
    year: "2023",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_21.22.29.png",
    alt: "Ekologiczne opakowanie mydła PLUME z bambusową mydelniczką",
    imageClass: "object-cover object-center",
  },
  {
    id: "bereka",
    number: "07",
    title: "Bereka",
    type: "Projekt produktu",
    year: "2022",
    image: "/imports/Zrzut_ekranu_2026-11-12_o_21.24.18.png",
    alt: "Ceramiczny zestaw naczyń do kawy Bereka",
    imageClass: "object-cover object-center",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 ${down ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ProjectMeta({
  discipline,
  tools,
  year,
}: {
  discipline: string;
  tools: string;
  year: string;
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-cobalt/20 pt-6 text-sm md:grid-cols-3">
      <div>
        <dt className="meta-label">Dyscyplina</dt>
        <dd>{discipline}</dd>
      </div>
      <div>
        <dt className="meta-label">Narzędzia</dt>
        <dd>{tools}</dd>
      </div>
      <div>
        <dt className="meta-label">Rok</dt>
        <dd>{year}</dd>
      </div>
    </dl>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <main className="overflow-hidden bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cobalt/10 bg-paper/90 backdrop-blur-md">
        <div className="content-wrap flex h-20 items-center justify-between">
          <a className="group" href="#top" aria-label="Początek strony">
            <span className="block font-serif text-xl leading-[0.9] tracking-[-0.02em] text-cobalt">
              Aleksandra
              <br />
              Dworakowska
            </span>
          </a>

          <nav
            className="hidden items-center gap-9 text-sm font-medium md:flex"
            aria-label="Główna nawigacja"
          >
            <a className="nav-link" href="#projekty">
              Projekty
            </a>
            <a className="nav-link" href="#profil">
              Profil
            </a>
            <a className="button-small" href="/aleksandra-dworakowska-cv.pdf" download>
              Pobierz CV <Arrow down />
            </a>
          </nav>

          <button
            className="grid h-10 w-10 place-items-center border border-cobalt/20 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span className={`menu-line top-1 ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`menu-line top-3 ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-cobalt/10 bg-paper px-6 py-6 md:hidden"
            aria-label="Menu mobilne"
          >
            <div className="flex flex-col gap-5 text-lg font-medium">
              <a href="#projekty" onClick={() => setMenuOpen(false)}>
                Projekty
              </a>
              <a href="#profil" onClick={() => setMenuOpen(false)}>
                Profil
              </a>
              <a href="/aleksandra-dworakowska-cv.pdf" download>
                Pobierz CV
              </a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-[760px] pt-20 lg:min-h-screen">
        <div className="absolute right-0 top-20 hidden h-[calc(100%-5rem)] w-[32%] bg-cobalt lg:block" />
        <div className="content-wrap relative grid min-h-[680px] items-center py-20 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-12 lg:py-12">
          <div className="relative z-10 lg:col-span-8">
            <p className="eyebrow mb-8">Portfolio projektowe · 2024—2026</p>
            <h1 className="display max-w-5xl">
              Projektuję przedmioty
              <br />
              <span className="font-serif italic text-cobalt">i komunikację,</span>
              <br />
              które budują relacje.
            </h1>
            <div className="mt-11 flex max-w-2xl flex-col gap-8 border-l-2 border-cobalt pl-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
                Studentka projektowania łącząca myślenie o użytkowniku, formę i czytelną opowieść
                wizualną.
              </p>
              <a className="text-link shrink-0" href="#projekty">
                Zobacz projekty <Arrow down />
              </a>
            </div>
          </div>

          <div className="relative mt-16 lg:col-span-4 lg:mt-0">
            <div className="relative ml-auto aspect-[4/5] w-[84%] overflow-hidden bg-blue-950 shadow-2xl shadow-blue-950/20 lg:w-full">
              <img
                src="/imports/Zrzut_ekranu_2026-11-12_o_20.05.29-3.png"
                alt="Projekt COMO’n autorstwa Aleksandry Dworakowskiej"
                className="h-full w-full object-cover object-[72%_center] mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-cobalt/40 mix-blend-color" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-blue-950/90 to-transparent p-6 pt-20 text-white">
                <p className="text-xs uppercase tracking-[0.2em]">Wybrany projekt</p>
                <p className="font-serif text-3xl italic">COMO’n</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projekty" className="scroll-mt-20 border-t border-cobalt/10 py-24 md:py-32">
        <div className="content-wrap">
          <div className="mb-14 flex items-end justify-between md:mb-20">
            <div>
              <p className="eyebrow mb-5">Wybrane realizacje</p>
              <h2 className="section-title">Projekty</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-ink/55 md:block">
              Siedem realizacji ujednoliconych w czytelne studia przypadku.
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a key={project.id} href={`#${project.id}`} className="project-card group">
                <div className="mb-5 flex items-center justify-between border-b border-cobalt/20 pb-3 text-xs uppercase tracking-[0.18em]">
                  <span>{project.number}</span>
                  <span className="text-ink/50">{project.year}</span>
                </div>
                <div
                  className={`aspect-[16/10] overflow-hidden ${
                    project.id === "comon" ? "bg-transparent" : "bg-blue-50"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={`h-full w-full transition duration-700 ease-out group-hover:scale-[1.025] ${project.imageClass}`}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-cobalt">
                      {project.type}
                    </p>
                    <h3 className="font-serif text-3xl leading-none">{project.title}</h3>
                  </div>
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center border border-cobalt/20 text-cobalt transition group-hover:bg-cobalt group-hover:text-white">
                    <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <article id="organizer" className="scroll-mt-20 bg-white py-24 md:py-36">
        <div className="content-wrap">
          <div className="case-heading">
            <div>
              <p className="eyebrow mb-5">01 · Projekt produktu</p>
              <h2 className="section-title max-w-2xl">Organizer na biurko</h2>
            </div>
            <p className="case-intro">
              Modułowy system dla osób pracujących na ograniczonej przestrzeni — od analizy potrzeb
              po model 3D.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12">
            <figure className="md:col-span-8">
              <img
                className="h-full min-h-[360px] w-full bg-neutral-200 object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_20.46.48-2.png"
                alt="Główna wizualizacja organizera"
              />
            </figure>
            <figure className="md:col-span-4">
              <img
                className="h-full min-h-[360px] w-full object-contain"
                src="/imports/Zrzut_ekranu_2024-11-3_o_23.54.33-kopia_2.png"
                alt="Moduły organizera z miejscem na długopisy i karteczki"
              />
            </figure>
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <ProjectMeta discipline="Design produktu" tools="Autodesk Fusion" year="2024" />
            </div>
            <div className="grid gap-10 md:col-span-7 md:col-start-6 md:grid-cols-2">
              <div>
                <p className="meta-label">Wyzwanie</p>
                <p className="body-copy">
                  Zaprojektować kompaktowy, funkcjonalny system, który porządkuje niewielkie
                  stanowisko targowe i łatwo dopasowuje się do różnych zadań.
                </p>
              </div>
              <div>
                <p className="meta-label">Rozwiązanie</p>
                <p className="body-copy">
                  Łączone moduły inspirowane klockami „wafle”, uzupełnione o praktyczne otwory,
                  pojemniki i mniejszy gadżet firmowy dla uczestników targów.
                </p>
              </div>
            </div>
          </div>
          <figure className="mt-16 overflow-hidden border border-cobalt/10 bg-paper p-3 md:mt-24 md:p-8">
            <img
              className="w-full"
              src="/imports/Zrzut_ekranu_2026-11-12_o_22.11.12-1.png"
              alt="Proces projektowy, dokumentacja techniczna i wizualizacje organizera"
            />
            <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.16em] text-ink/50">
              <span>Proces projektowy</span>
              <span>Modelowanie · wizualizacja</span>
            </figcaption>
          </figure>
        </div>
      </article>

      <article id="hotel" className="scroll-mt-20 bg-cobalt py-24 text-white md:py-36">
        <div className="content-wrap">
          <div className="case-heading border-white/20">
            <div>
              <p className="eyebrow mb-5 text-blue-200">02 · Identyfikacja wizualna</p>
              <h2 className="section-title max-w-2xl">Dune Hotel</h2>
            </div>
            <p className="case-intro text-white/70">
              Spokojny system identyfikacji, który przekłada nadmorski charakter marki na każdy
              punkt kontaktu z gościem.
            </p>
          </div>
          <div className="mt-14 grid items-stretch gap-10 md:mt-20 md:grid-cols-12">
            <figure className="overflow-hidden bg-blue-950 md:col-span-8">
              <img
                className="h-full min-h-[390px] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_21.10.54.png"
                alt="Elementy identyfikacji Dune Hotel: logo, zawieszki, wizytówki i karty"
              />
            </figure>
            <div className="flex flex-col justify-between border-t border-white/30 pt-6 md:col-span-4">
              <div>
                <p className="meta-label text-blue-200">Kierunek</p>
                <p className="font-serif text-3xl leading-snug md:text-4xl">
                  Minimalizm, rytm wydm i głęboki granat tworzą elegancką, wyciszoną tożsamość.
                </p>
              </div>
              <dl className="mt-16 space-y-5 text-sm">
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <dt className="text-white/55">Zakres</dt>
                  <dd>Identyfikacja · web</dd>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <dt className="text-white/55">Elementy</dt>
                  <dd>Digital · print</dd>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-4">
                  <dt className="text-white/55">Rok</dt>
                  <dd>2024</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-y border-white/20 py-10 md:mt-24 md:grid-cols-12 md:py-14">
            <div className="md:col-span-7">
              <p className="meta-label text-blue-200">Założenie projektu</p>
              <p className="font-serif text-3xl leading-snug md:text-4xl">
                Logo i Key Visual jako centralny element materiałów reklamowych hotelu w
                Świnoujściu.
              </p>
              <p className="mt-6 max-w-2xl leading-8 text-white/70">
                System powstał z myślą o rodzinach z dziećmi i osobach szukających wypoczynku w
                luksusowych warunkach — blisko natury, z poczuciem nowoczesności i wygody.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="meta-label text-blue-200">Język wizualny</p>
              <p className="leading-8 text-white/70">
                Chłodna paleta nawiązuje do morza, surowej pogody i nadmorskiego klimatu. Projekt
                łączy ekologiczny charakter z nowoczesną architekturą i rozwija markę w kanałach
                cyfrowych oraz drukowanych.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Logo", "Key Visual", "Social media", "Responsive web", "Editorial"].map(
                  (item) => (
                    <span
                      key={item}
                      className="border border-white/25 px-3 py-2 text-xs uppercase tracking-[0.12em] text-blue-100"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12">
            <figure className="bg-white p-4 md:col-span-8 md:p-7">
              <img
                className="aspect-[3/2] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_23.17.06.png"
                alt="Responsywna strona internetowa Dune Hotel na laptopie i widok projektu w Figmie"
              />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/50">
                Responsywna strona internetowa · Figma
              </figcaption>
            </figure>
            <figure className="flex flex-col bg-white p-4 md:col-span-4 md:row-span-2 md:p-7">
              <img
                className="min-h-0 flex-1 object-contain"
                src="/portfolio/dune-social.jpg"
                alt="Materiały Dune Hotel przygotowane dla mediów społecznościowych"
              />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/50">
                Social media · kampania wizerunkowa
              </figcaption>
            </figure>
            <figure className="bg-white p-4 md:col-span-8 md:p-7">
              <img
                className="aspect-[16/9] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_23.16.48.png"
                alt="Reklama Dune Hotel zastosowana w publikacji podróżniczej"
              />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/50">
                Materiały drukowane · reklama prasowa
              </figcaption>
            </figure>
          </div>
        </div>
      </article>

      <article id="comon" className="scroll-mt-20 bg-paper py-24 md:py-36">
        <div className="content-wrap">
          <div className="case-heading">
            <div>
              <p className="eyebrow mb-5">03 · Projekt produktu</p>
              <h2 className="section-title max-w-2xl">COMO’n</h2>
            </div>
            <p className="case-intro">
              Obiekt, który nie tylko przechowuje chleb, ale zachęca do jego wyjęcia, podania i
              dzielenia się nim z innymi.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12">
            <figure className="overflow-hidden md:col-span-8">
              <img
                className="h-full min-h-[390px] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_21.19.08-3.png"
                alt="Pokrywa i patera obiektu COMO’n"
              />
            </figure>
            <div className="flex flex-col justify-between bg-cobalt p-8 text-white md:col-span-4 md:p-10">
              <span className="font-serif text-7xl italic text-blue-200">3</span>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-blue-200">
                  Części · wiele funkcji
                </p>
                <p className="text-lg leading-relaxed text-white/80">
                  Płaski talerz, podstawa i pokrywa, która po zdjęciu staje się dodatkowym
                  półmiskiem.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <figure className="bg-white p-4">
              <img
                className="aspect-[2/1] w-full object-cover"
                src="/portfolio/comon-details.jpg"
                alt="Detale lakierowanej formy COMO’n"
              />
            </figure>
            <figure className="bg-white p-4">
              <img
                className="aspect-[2/1] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_22.21.10-2.png"
                alt="Rysunek techniczny i wymiary COMO’n"
              />
            </figure>
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <ProjectMeta discipline="Design produktu" tools="Modelowanie 3D" year="2026" />
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="meta-label">Idea</p>
              <p className="font-serif text-3xl leading-snug text-cobalt md:text-5xl md:leading-tight">
                Kulisty uchwyt odwołuje się do intuicyjnego gestu chwytania i przekazywania.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article id="recyklik" className="scroll-mt-20 py-24 md:py-36">
        <div className="content-wrap">
          <div className="case-heading">
            <div>
              <p className="eyebrow mb-5">04 · Projekt UX/UI</p>
              <h2 className="section-title max-w-2xl">Recyklik</h2>
            </div>
            <p className="case-intro">
              Aplikacja społecznościowa dla mieszkańców Warszawy, która pomaga oddawać i znajdować
              rzeczy za darmo w najbliższej okolicy.
            </p>
          </div>

          <figure className="mt-14 overflow-hidden md:mt-20">
            <img
              className="aspect-[16/9] w-full object-contain"
              src="/imports/Zrzut_ekranu_2026-11-12_o_21.43.50-2.png"
              alt="Makieta aplikacji Recyklik na telefonie"
            />
          </figure>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <ProjectMeta discipline="UX/UI · Smart City" tools="Figma" year="2026" />
            </div>
            <div className="grid gap-10 md:col-span-7 md:col-start-6 md:grid-cols-2">
              <div>
                <p className="meta-label">Problem</p>
                <p className="body-copy">
                  Sprawne przekazywanie niepotrzebnych przedmiotów wymaga lokalnego zasięgu,
                  prostego procesu i poczucia bezpieczeństwa po obu stronach wymiany.
                </p>
              </div>
              <div>
                <p className="meta-label">Rozwiązanie</p>
                <p className="body-copy">
                  Recyklik łączy mieszkańców i wprowadza przedmioty w kolejny cykl życia. Rezerwacja
                  oraz akceptacja osoby odbierającej porządkują wymianę i chronią użytkowników.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12">
            <figure className="border border-cobalt/10 bg-paper p-4 md:col-span-7 md:p-7">
              <img
                className="h-full w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_22.01.15-1.png"
                alt="Ekrany główne oraz proces rezerwacji w aplikacji Recyklik"
              />
              <figcaption className="text-xs uppercase tracking-[0.16em] text-ink/50">
                Ekrany aplikacji · klikalny prototyp
              </figcaption>
            </figure>
            <figure className="border border-cobalt/10 bg-paper p-4 md:col-span-5 md:p-7">
              <img
                className="h-full w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-04-29_o_09.12.54-kopia-1.png"
                alt="Moodboard, system kolorów i komponenty aplikacji Recyklik"
              />
              <figcaption className="text-xs uppercase tracking-[0.16em] text-ink/50">
                Proces · identyfikacja · system UI
              </figcaption>
            </figure>
          </div>

          <div className="mt-5 grid items-center gap-10 bg-cobalt px-6 py-10 text-white md:grid-cols-12 md:px-12 md:py-14">
            <div className="md:col-span-5">
              <p className="meta-label text-blue-200">Zakres projektu</p>
              <p className="font-serif text-3xl leading-snug md:text-4xl">
                Identyfikacja wizualna, strategia biznesowa i kompletny przepływ aplikacji.
              </p>
            </div>
            <figure className="p-4 md:col-span-6 md:col-start-7">
              <img
                className="aspect-[2/1] w-full object-contain"
                src="/imports/lklk-1.png"
                alt="Elementy przepływu oddawania przedmiotów w aplikacji Recyklik"
              />
            </figure>
          </div>
        </div>
      </article>

      <article id="ida" className="scroll-mt-20 bg-ink py-24 text-white md:py-36">
        <div className="content-wrap">
          <div className="case-heading border-white/20">
            <div>
              <p className="eyebrow mb-5 text-blue-200">05 · Identyfikacja marki</p>
              <h2 className="section-title max-w-3xl">Ida Wróblewska</h2>
            </div>
            <p className="case-intro text-white/65">
              System wizualny dla marki biżuterii, której znakiem rozpoznawczym są nieidealne,
              organiczne formy inspirowane naturą i kulturą arabską.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12">
            <figure className="overflow-hidden bg-white p-4 md:col-span-8 md:p-8">
              <img
                className="h-full min-h-[380px] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_20.52.32.png"
                alt="Logo Ida Wróblewska i biżuteria wykorzystująca niedoskonałe kamienie"
              />
            </figure>
            <div className="flex flex-col justify-between border border-white/15 p-7 md:col-span-4 md:p-9">
              <span className="font-serif text-7xl italic text-blue-300">„</span>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-blue-200">
                  Motyw przewodni
                </p>
                <p className="font-serif text-3xl leading-snug">
                  Nieidealność buduje charakter marki i podkreśla unikatowość każdego modelu.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/25 pt-6 text-sm md:grid-cols-3">
                <div>
                  <dt className="meta-label text-blue-200">Dyscyplina</dt>
                  <dd>Branding</dd>
                </div>
                <div>
                  <dt className="meta-label text-blue-200">Zakres</dt>
                  <dd>Digital · print</dd>
                </div>
                <div>
                  <dt className="meta-label text-blue-200">Rok</dt>
                  <dd>2024</dd>
                </div>
              </dl>
            </div>
            <div className="grid gap-10 md:col-span-7 md:col-start-6 md:grid-cols-2">
              <div>
                <p className="meta-label text-blue-200">Założenie</p>
                <p className="leading-8 text-white/65">
                  Stworzyć wyrazisty język marki dla kobiecych form z charakterem, zachowując nacisk
                  na detal, jakość i ręczne wykończenie.
                </p>
              </div>
              <div>
                <p className="meta-label text-blue-200">System</p>
                <p className="leading-8 text-white/65">
                  Ekspresyjny sygnet, kontrast czerni i czerwieni oraz edytorialna typografia tworzą
                  spójną bazę dla strony, social mediów i materiałów promocyjnych.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-2">
            <figure className="bg-white p-4 md:p-7">
              <img
                className="aspect-[16/9] w-full object-contain"
                src="/portfolio/ida-digital.jpg"
                alt="Responsywna strona internetowa i materiały cyfrowe marki Ida Wróblewska"
              />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/50">
                Strona responsywna · e-commerce
              </figcaption>
            </figure>
            <figure className="bg-white p-4 md:p-7">
              <img
                className="aspect-[16/9] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_21.41.07-1.png"
                alt="Media społecznościowe oraz materiały marketingowe marki Ida Wróblewska"
              />
              <figcaption className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/50">
                Social media · materiały marketingowe
              </figcaption>
            </figure>
          </div>
        </div>
      </article>

      <article id="plume" className="scroll-mt-20 bg-paper py-24 md:py-36">
        <div className="content-wrap">
          <div className="case-heading">
            <div>
              <p className="eyebrow mb-5">06 · Projekt opakowania</p>
              <h2 className="section-title max-w-2xl">PLUME</h2>
            </div>
            <p className="case-intro">
              Ekologiczne opakowanie mydła, które angażuje wzrok i dotyk, czerpiąc z prostoty
              japońskich ogrodów zen.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12">
            <figure className="overflow-hidden md:col-span-8">
              <img
                className="h-full min-h-[390px] w-full object-contain"
                src="/imports/Zrzut_ekranu_2026-11-12_o_21.22.29-2.png"
                alt="Opakowanie mydła PLUME osadzone w scenerii ogrodu zen"
              />
            </figure>
            <div className="flex flex-col justify-between bg-cobalt p-8 text-white md:col-span-4 md:p-10">
              <span className="font-serif text-7xl italic text-blue-200">禅</span>
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-blue-200">Zen care</p>
                <p className="font-serif text-3xl leading-snug">
                  Forma, faktura i materiał wspólnie budują spokojne, sensoryczne doświadczenie.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <ProjectMeta discipline="Packaging design" tools="Modelowanie 3D" year="2023" />
            </div>
            <div className="grid gap-10 md:col-span-7 md:col-start-6 md:grid-cols-2">
              <div>
                <p className="meta-label">Materiał</p>
                <p className="body-copy">
                  Papier mâché zabezpieczony roślinnym laminatem ogranicza nasiąkanie i pozwala
                  zachować organiczną, wyczuwalną fakturę opakowania.
                </p>
              </div>
              <div>
                <p className="meta-label">Funkcja</p>
                <p className="body-copy">
                  Bambusowa podstawa pozostaje z użytkownikiem jako mydelniczka i rozwiązuje problem
                  przechowywania produktu po otwarciu.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12">
            <figure className="border border-cobalt/10 bg-white p-4 md:col-span-7 md:p-7">
              <img
                className="h-full w-full object-contain"
                src="/portfolio/plume-process.jpg"
                alt="Mapa skojarzeń i proces modelowania opakowania PLUME"
              />
              <figcaption className="text-xs uppercase tracking-[0.16em] text-ink/50">
                Analiza · modelowanie · rozwój formy
              </figcaption>
            </figure>
            <div className="grid gap-5 md:col-span-5">
              <figure className="bg-white p-4">
                <img
                  className="aspect-[2/1] w-full object-cover"
                  src="/portfolio/plume-inspiration.jpg"
                  alt="Woda i ogród zen jako inspiracje projektu PLUME"
                />
              </figure>
              <figure className="bg-white p-4">
                <img
                  className="aspect-[2/1] w-full object-contain"
                  src="/portfolio/plume-parts.jpg"
                  alt="Elementy opakowania PLUME: pokrywa, mydło i bambusowa mydelniczka"
                />
              </figure>
            </div>
          </div>

          <div className="mt-5 grid items-center gap-8 border border-cobalt/15 bg-white p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-5">
              <p className="meta-label">Naming</p>
              <p className="font-serif text-3xl leading-snug text-cobalt md:text-4xl">
                PLUME łączy japońską śliwkę Ume ze skojarzeniem delikatnego plusku wody.
              </p>
            </div>
            <figure className="md:col-span-6 md:col-start-7">
              <img
                className="aspect-[2/1] w-full object-cover"
                src="/imports/Zrzut_ekranu_2026-11-12_o_21.35.42-1.png"
                alt="Detal faktury i konstrukcji opakowania PLUME"
              />
            </figure>
          </div>
        </div>
      </article>

      <article id="bereka" className="scroll-mt-20 bg-cobalt py-24 text-white md:py-36">
        <div className="content-wrap">
          <div className="case-heading border-white/20">
            <div>
              <p className="eyebrow mb-5 text-blue-200">07 · Projekt produktu</p>
              <h2 className="section-title max-w-2xl">Bereka</h2>
            </div>
            <p className="case-intro text-white/70">
              Trzy spójne naczynia do kawy, których forma interpretuje etiopską ceremonię oraz
              tradycyjne ręcznie wykonywane kosze Habesha.
            </p>
          </div>

          <figure className="mt-14 overflow-hidden md:mt-20">
            <img
              className="h-[516px] w-full object-contain"
              src="/imports/Zrzut_ekranu_2026-11-12_o_21.33.46-1.png"
              alt="Filiżanka, spodek i cukiernica z zestawu Bereka"
            />
          </figure>

          <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/25 pt-6 text-sm md:grid-cols-3">
                <div>
                  <dt className="meta-label text-blue-200">Dyscyplina</dt>
                  <dd>Design produktu</dd>
                </div>
                <div>
                  <dt className="meta-label text-blue-200">Elementy</dt>
                  <dd>3 formy</dd>
                </div>
                <div>
                  <dt className="meta-label text-blue-200">Rok</dt>
                  <dd>2022</dd>
                </div>
              </dl>
            </div>
            <div className="grid gap-10 md:col-span-7 md:col-start-6 md:grid-cols-2">
              <div>
                <p className="meta-label text-blue-200">Wyzwanie</p>
                <p className="leading-8 text-white/70">
                  Stworzyć filiżankę, cukiernicę i spodek jako jedną rodzinę produktów, zachowując
                  indywidualną funkcję każdego elementu.
                </p>
              </div>
              <div>
                <p className="meta-label text-blue-200">Kontekst</p>
                <p className="leading-8 text-white/70">
                  Etiopia jest kolebką kawy, a jej parzenie ma charakter ceremonii. Nazwa Bereka
                  oznacza trzecią, najmocniejszą filiżankę, która ma przynosić błogosławieństwo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-12">
            <figure className="bg-white p-4 md:col-span-7 md:p-7">
              <img
                className="h-full w-full object-contain"
                src="/portfolio/bereka-process.jpg"
                alt="Inspiracje, szkice, modelowanie i rysunki gabarytowe zestawu Bereka"
              />
              <figcaption className="text-xs uppercase tracking-[0.16em] text-ink/50">
                Research kulturowy · szkice · modelowanie
              </figcaption>
            </figure>
            <div className="flex flex-col justify-between border border-white/20 p-7 md:col-span-5 md:p-10">
              <p className="meta-label text-blue-200">Język formy</p>
              <p className="font-serif text-3xl leading-snug md:text-5xl">
                Kształt cukiernicy i spodka rozwija charakterystyczny profil filiżanki.
              </p>
              <figure className="mt-10 p-4">
                <img
                  className="aspect-[2/1] w-full object-contain"
                  src="/imports/bhub-kopia-2.png"
                  alt="Szkice funkcjonalne elementów zestawu Bereka"
                />
              </figure>
            </div>
          </div>
        </div>
      </article>

      <section
        id="profil"
        className="scroll-mt-20 border-t border-cobalt/10 bg-white py-24 md:py-32"
      >
        <div className="content-wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Profil</p>
            <h2 className="section-title">O mnie</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-serif text-3xl leading-snug text-cobalt md:text-5xl md:leading-tight">
              Interesuje mnie projektowanie, które łączy funkcję, emocję i jasną komunikację.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">
              Rozwijam kompetencje w projektowaniu produktu, modelowaniu 3D i identyfikacji
              wizualnej. W pracy zaczynam od kontekstu i potrzeb użytkownika, a kończę na
              dopracowanym, spójnym rozwiązaniu.
            </p>
            <address className="mt-10 grid gap-6 border-y border-cobalt/15 py-6 not-italic sm:grid-cols-2">
              <div>
                <p className="meta-label">E-mail</p>
                <a
                  className="text-base font-semibold text-ink transition-colors hover:text-cobalt"
                  href="mailto:adworakowska24@gmail.com"
                >
                  adworakowska24@gmail.com
                </a>
              </div>
              <div>
                <p className="meta-label">Telefon</p>
                <a
                  className="text-base font-semibold text-ink transition-colors hover:text-cobalt"
                  href="tel:+48609031439"
                >
                  +48 609 031 439
                </a>
              </div>
            </address>
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Projektowanie produktu",
                "Projektowanie opakowań",
                "Modelowanie 3D",
                "UX/UI",
                "Identyfikacja wizualna",
                "Art direction",
              ].map((skill) => (
                <span key={skill} className="border border-cobalt/20 px-4 py-2 text-sm text-cobalt">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-16 text-white md:py-20">
        <div className="content-wrap">
          <div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-blue-200">
                Portfolio rekrutacyjne
              </p>
              <p className="font-serif text-4xl md:text-6xl">
                Porozmawiajmy o <span className="italic text-blue-300">projektowaniu.</span>
              </p>
            </div>
            <a className="button-light" href="/aleksandra-dworakowska-cv.pdf" download>
              Pobierz CV <Arrow down />
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:justify-between">
            <span>© 2026 Aleksandra Dworakowska</span>
            <a className="transition hover:text-white" href="#top">
              Wróć na górę ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
