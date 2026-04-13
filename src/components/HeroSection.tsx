import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

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
                            Your{" "}
                            <Highlighter action="underline" color="#F0944D" strokeWidth={3} animationDuration={800} isView>
                                smart way
                            </Highlighter>{" "}
                            to YDT vocabulary
                        </h1>

                        <p className="text-lg text-white/75 leading-relaxed max-w-md">
                            Study essential YDT words with clear explanations, example sentences, and effective practice.
                        </p>

                        {/* Cartoon neobrutalist pill button */}
                        <a
                            href="https://demo.parrotingo.com"
                            id="hero-start-now"
                            className="inline-flex items-center px-12 gap-2 px-10 py-4 rounded-full bg-brand-orange-light text-white text-lg font-extrabold border-[3px] border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-100"
                        >
                            Start Now!
                        </a>
                    </div>

                    {/* Right — Mascot */}
                    <div className="flex-shrink-0 relative flex items-center justify-center">
                        <Image
                            src="/bird-2.png"
                            alt="Parrotingo Mascot"
                            width={400}
                            height={400}
                            className="w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 object-contain relative z-10 -translate-y-8"
                        />
                        {/* Dal (Branch) — Positioned relatively to the bird */}
                        <Image
                            src="/dal.png"
                            alt="Branch"
                            width={600}
                            height={300}
                            className="absolute bottom-[-154%] left-1/2 -translate-x-[25%] w-[250%] max-w-none h-auto object-contain z-0"
                        />
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
