import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

export default function ResourcesHero() {
    return (
        <section
            id="resources-hero"
            className="relative bg-brand-blue pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
        >
            <Image
                src="/star1.png"
                alt=""
                width={32}
                height={32}
                className="absolute top-28 left-[12%] w-8 h-8 object-contain opacity-25 hidden lg:block"
                style={{ transform: "rotate(-10deg)" }}
            />
            <Image
                src="/star2.png"
                alt=""
                width={28}
                height={28}
                className="absolute bottom-10 right-[8%] w-7 h-7 object-contain opacity-20 hidden lg:block"
                style={{ transform: "rotate(25deg)" }}
            />

            <div className="mx-auto max-w-5xl px-6 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    Useful{" "}
                    <Highlighter
                        action="underline"
                        color="#F0944D"
                        strokeWidth={3}
                        animationDuration={800}
                        isView
                    >
                        Resources
                    </Highlighter>
                </h1>
                <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
                    Handpicked tools, sites, and references to support your YDT English preparation.
                </p>
            </div>
        </section>
    );
}