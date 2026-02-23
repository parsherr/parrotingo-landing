export default function WhyUsSection() {
    return (
        <section
            id="why-us"
            className="bg-gradient-to-b from-brand-blue to-brand-orange"
        >
            <div className="w-full bg-[#EBEBEB] rounded-[3rem] px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl">
                    {/* İçerik kartı — bg #EBEBEB */}
                    <div className="bg-[#EBEBEB] rounded-[2.5rem] px-10 py-16 sm:px-16 lg:px-20 lg:py-20">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

                            {/* Left — Mascot blob */}
                            <div className="flex-shrink-0 flex items-center justify-center order-2 lg:order-1">
                                <div className="relative flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 280 270"
                                        className="w-52 h-48 sm:w-64 sm:h-60 lg:w-72 lg:h-64"
                                        fill="none"
                                    >
                                        <path
                                            d="M140 18 C195 5, 265 55, 262 125 C259 195, 210 258, 140 260 C70 262, 15 205, 14 135 C13 65, 75 32, 140 18Z"
                                            fill="#d8dde6"
                                            stroke="#b8c0cc"
                                            strokeWidth="2.5"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                                        <span className="text-6xl sm:text-7xl lg:text-8xl">🦜📚</span>
                                        <span className="text-foreground/40 text-xs font-semibold uppercase tracking-widest mt-1">
                                            Studying!
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right — Content, geniş boşlukla sağda */}
                            <div className="flex-1 flex flex-col items-center text-center gap-6 order-1 lg:order-2 lg:pl-16 xl:pl-24">
                                <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight w-full">
                                    Why{" "}
                                    <span className="text-gradient-orange">Parrotingo</span>? 🦜
                                </h2>

                                {/* Düz paragraf — madde değil */}
                                <p className="text-base text-foreground/65 leading-relaxed">
                                    Parrotingo makes language learning feel like a game. Bite-sized
                                    daily lessons, smart spaced repetition, speaking practice with
                                    instant feedback, and a streak system that keeps you coming back
                                    every day. Whether you&apos;re a complete beginner or brushing up
                                    your skills — Parrotingo has you covered. 🌍
                                </p>

                                {/* Button — text'in tam orta altında */}
                                <a
                                    href="#"
                                    id="why-us-more-info"
                                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-blue-dark text-white text-base font-extrabold border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-100"
                                >
                                    More info →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
