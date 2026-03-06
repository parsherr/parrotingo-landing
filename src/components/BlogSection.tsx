import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

const blogPosts = [
    {
        id: 1,
        category: "Study Tips",
        title: "5 Ways to Memorize YDT Words Faster",
        excerpt:
            "Discover proven techniques to boost your vocabulary retention and study smarter for the exam.",
        date: "Feb 20, 2026",
        accent: "#E8651A",
    },
    {
        id: 2,
        category: "Grammar",
        title: "Common Mistakes in English Collocations",
        excerpt:
            "Learn about the most frequent collocation errors Turkish students make and how to avoid them.",
        date: "Feb 15, 2026",
        accent: "#0F2A4A",
    },
    {
        id: 3,
        category: "Motivation",
        title: "How to Stay Consistent While Studying",
        excerpt:
            "Building a sustainable study habit is more important than cramming. Here's how to do it right.",
        date: "Feb 10, 2026",
        accent: "#D4843A",
    },
];

/* Card rotation angles for the hand‑drawn feel */
const cardRotations = [-1.2, 0.6, -0.8];

export default function BlogSection() {
    return (
        <section
            id="blog"
            className="bg-gradient-to-b from-brand-blue to-brand-orange"
        >
            <div className="w-full bg-brand-blue rounded-[3rem] px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl">
                    {/* ── Heading ── */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
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
                        </h2>
                        <p className="mt-3 text-lg text-white/50">
                            Tips, tricks, and insights for YDT prep.
                        </p>
                    </div>

                    {/* ── Cards grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {blogPosts.map((post, i) => (
                            <article
                                key={post.id}
                                className="bg-[#E8E0D8] rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 overflow-hidden group cursor-pointer flex flex-col"
                                style={{
                                    transform: `rotate(${cardRotations[i]}deg)`,
                                }}
                            >
                                {/* Colour accent strip */}
                                <div
                                    className="h-2.5 w-full"
                                    style={{ backgroundColor: post.accent }}
                                />

                                <div className="p-5 flex flex-col gap-3 flex-1">
                                    {/* Category sticker */}
                                    <span
                                        className="self-start text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-black text-white"
                                        style={{
                                            backgroundColor: post.accent,
                                        }}
                                    >
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-lg font-extrabold text-foreground leading-snug tracking-tight group-hover:text-brand-orange transition-colors duration-200">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-foreground/45 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Date — pushed to bottom */}
                                    <span className="text-xs text-foreground/30 font-semibold mt-auto pt-2">
                                        {post.date}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* ── Decorative star ── */}
                    <div className="flex justify-center mt-6">
                        <Image
                            src="/star2.png"
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain opacity-50"
                            style={{ transform: "rotate(20deg)" }}
                        />
                    </div>

                    {/* ── View all button ── */}
                    <div className="flex justify-center mt-6">
                        <a
                            href="/blog"
                            id="blog-view-all"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange text-white text-base font-extrabold border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-100"
                        >
                            View all posts →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
