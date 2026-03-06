import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

export default function BlogHero() {
    return (
        <section
            id="blog-hero"
            className="relative bg-brand-blue pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
        >
            {/* Decorative stars */}
            <Image
                src="/star1.png"
                alt=""
                width={32}
                height={32}
                className="absolute top-28 right-[15%] w-8 h-8 object-contain opacity-30 hidden lg:block"
                style={{ transform: "rotate(15deg)" }}
            />
            <Image
                src="/star2.png"
                alt=""
                width={24}
                height={24}
                className="absolute bottom-12 left-[10%] w-6 h-6 object-contain opacity-20 hidden lg:block"
                style={{ transform: "rotate(-20deg)" }}
            />

            <div className="mx-auto max-w-5xl px-6 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    From the{" "}
                    <Highlighter
                        action="underline"
                        color="#F0944D"
                        strokeWidth={3}
                        animationDuration={800}
                        isView
                    >
                        Blog
                    </Highlighter>
                </h1>
                <p className="mt-4 text-lg text-white/50 max-w-lg mx-auto">
                    Tips, tricks, and insights to help you ace your YDT exam. Written by language lovers, for language learners.
                </p>
            </div>
        </section>
    );
}
