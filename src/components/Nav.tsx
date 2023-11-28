import { Logo } from './Logo';

interface NavProps {
    dark: boolean;
    setDark: (dark: boolean) => void;
}

export function Nav({ dark, setDark }: NavProps) {
    return (
        <nav className="z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 dark:shadow-none">
            <div className="lg:px-6 xl:container m-auto px-6 md:px-12">
                <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                    <div className="w-full items-center flex justify-between lg:w-auto">
                        <a
                            className="flex relative z-10 items-center"
                            href="#"
                            aria-label="logo"
                        >
                            <Logo />
                            <p className="pl-2 text-2xl ">Calculadora - TAF</p>
                        </a>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                        <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                            <button
                                className="text-2xl"
                                onClick={() => setDark(!dark)}
                            >
                                {dark ? '💡' : '🌙'}
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
