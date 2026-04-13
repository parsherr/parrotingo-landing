import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

export default function WordListCTA() {
    return (
        <section id="wordlist-cta" className="bg-gradient-to-b from-brand-blue to-brand-orange">
            <div className="w-full bg-[#E8E0D8] rounded-[3rem] px-6 py-16 lg:py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left — Mascot */}
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <Image
                                src="/bird-2.png"
                                alt="Parrotingo Mascot"
                                width={300}
                                height={300}
                                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain"
                            />
                        </div>

                        {/* Right — Text + CTA */}
                        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
                                Ready to start{" "}
                                <Highlighter
                                    action="underline"
                                    color="#E8651A"
                                    strokeWidth={3}
                                    animationDuration={800}
                                    isView
                                >
                                    <span className="text-gradient-orange">learning</span>
                                </Highlighter>
                                ?
                            </h2>
                            <p className="text-base text-foreground/50 leading-relaxed max-w-md">
                                Join thousands of students who are studying smarter with Parrotingo. Build your vocabulary, ace your YDT exam.
                            </p>
                            <a
                                href="https://demo.parrotingo.com"
                                id="wordlist-start-now-cta"
                                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-brand-orange text-white text-lg font-extrabold border-[3px] border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-100"
                            >
                                Start Now!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
