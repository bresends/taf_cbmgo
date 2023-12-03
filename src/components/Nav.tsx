import { Logo } from "./Logo";

interface NavProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export function Nav({ dark, setDark }: NavProps) {
  return (
    <nav className="z-20 w-full border-b border-gray-100 bg-white/90 shadow-2xl shadow-gray-600/5 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
      <div className="px- m-auto xl:container md:px-12 lg:px-6 ">
        <div className="flex items-center justify-between gap-6 px-2 py-5 md:gap-0 md:px-0 ">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <a
              className="relative z-10 flex items-center"
              href="#"
              aria-label="logo"
            >
              <Logo />
              <p className="pl-2 text-2xl ">Calculadora - TAF</p>
            </a>
          </div>
          <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
            <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
              <button className="text-2xl" onClick={() => setDark(!dark)}>
                {dark ? "💡" : "🌙"}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
