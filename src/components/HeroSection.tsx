import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-dvh flex items-center bg-brand-blue overflow-hidden"
        >
            <div className="mx-auto max-w-5xl px-6 w-full pt-28 pb-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left — Text + single CTA */}
                    <div className="flex-1 flex flex-col items-start gap-6 text-left">
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            Learn Languages
                            <br />
                            the fun way! 🎉
                        </h1>

                        <p className="text-lg text-white/75 leading-relaxed max-w-md">
                            Parrotingo makes language learning feel like a game — not a
                            chore. Start speaking fluently with daily bite-sized lessons.
                        </p>

                        {/* Cartoon neobrutalist pill button */}
                        <a
                            href="#register"
                            id="hero-start-now"
                            className="inline-flex items-center px-12 gap-2 px-10 py-4 rounded-full bg-brand-orange-light text-white text-lg font-extrabold border-[3px] border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-100"
                        >
                            Start now!
                        </a>


                    </div>

                    {/* Right — Mascot blob */}
                    <div className="flex-shrink-0 flex items-center justify-center animate-bob">
                        <div className="relative flex items-center justify-center">
                            <svg
                                viewBox="0 0 320 300"
                                className="w-64 h-60 sm:w-80 sm:h-72 xl:w-96 xl:h-88"
                                fill="none"
                            >
                                <path
                                    d="M160 20 C220 10, 300 60, 295 130 C290 200, 240 270, 160 275 C80 280, 20 220, 18 150 C16 80, 80 32, 160 20Z"
                                    fill="rgba(255,255,255,0.12)"
                                    stroke="rgba(255,255,255,0.25)"
                                    strokeWidth="3"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                <span className="text-7xl sm:text-8xl xl:text-9xl drop-shadow-lg">🦜</span>
                                <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                                    Mascot Parrot
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll down — absolute bottom center of section */}
            <a
                href="#why-us"
                id="hero-scroll-down"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs font-medium uppercase tracking-widest cursor-pointer hover:text-white/70 transition-colors"
            >
                <span>Scroll down</span>
                <ChevronDown className="w-5 h-5 animate-bounce-down" />
            </a>
        </section>
    );
}
