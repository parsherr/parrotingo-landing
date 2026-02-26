import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

export default function WhyUsSection() {
    return (
        <section
            id="why-us"
            className="bg-brand-blue"
        >
            <div className="w-full bg-[#E8E0D8] rounded-[3rem] px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl">
                    {/* İçerik kartı — bg #EBEBEB */}
                    <div className="bg-[#E8E0D8] rounded-[2.5rem] px-10 py-16 sm:px-16 lg:px-20 lg:py-20">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

                            {/* Left — Mascot */}
                            <div className="flex-shrink-0 flex items-center justify-center order-2 lg:order-1">
                                <Image
                                    src="/working-mascot.png"
                                    alt="Parrotingo Studying Mascot"
                                    width={400}
                                    height={400}
                                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
                                />
                            </div>

                            {/* Right — Content, geniş boşlukla sağda */}
                            <div className="flex-1 flex flex-col items-center text-center gap-6 order-1 lg:order-2 lg:pl-16 xl:pl-24">
                                <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight w-full">
                                    Why{" "}
                                    <Highlighter action="underline" color="#E8651A" strokeWidth={3} animationDuration={800} isView>
                                        <span className="text-gradient-orange">Parrotingo</span>
                                    </Highlighter>?
                                </h2>
                                <p className="text-xl sm:text-2xl text-foreground/55 leading-relaxed">
                                    Build the vocabulary you need for{" "}
                                    <Highlighter action="highlight" color="#E8651A22" strokeWidth={2} isView>
                                        YDT
                                    </Highlighter>
                                </p>

                                {/* Feature items — hand-drawn star markers */}
                                <ul className="flex flex-col gap-4 text-left w-full mt-2">
                                    {[
                                        { star: "/star1.png", rotate: 0, title: "Focused learning", desc: "Only essential YDT words, no filler." },
                                        { star: "/star2.png", rotate: 0, title: "Real examples", desc: "Every word comes with context you can use." },
                                        { star: "/star1.png", rotate: 45, title: "Better results", desc: "Study smarter, score higher on exam day." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <Image
                                                src={item.star}
                                                alt=""
                                                width={28}
                                                height={28}
                                                className="flex-shrink-0 w-7 h-7 object-contain mt-0.5"
                                                style={item.rotate ? { transform: `rotate(${item.rotate}deg)` } : undefined}
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-lg font-extrabold text-foreground/85 tracking-tight">
                                                    {item.title}
                                                </span>
                                                <span className="text-sm text-foreground/45 leading-relaxed">
                                                    {item.desc}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

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
