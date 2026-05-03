import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
    return (
        <section
            id="blog"
            className="bg-gradient-to-b from-brand-blue to-brand-orange"
        >
            <div className="w-full bg-brand-blue rounded-[3rem] px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl">
                    {/* Heading */}
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

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id}>
                                <article className="h-full bg-[#E8E0D8] rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 overflow-hidden group cursor-pointer flex flex-col">
                                    <div
                                        className="h-2.5 w-full"
                                        style={{ backgroundColor: post.accent }}
                                    />
                                    <div className="p-5 flex flex-col gap-3 flex-1">
                                        <span
                                            className="self-start text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-black text-white"
                                            style={{ backgroundColor: post.accent }}
                                        >
                                            {post.category}
                                        </span>
                                        <h3 className="text-lg font-extrabold text-foreground leading-snug tracking-tight group-hover:text-brand-orange transition-colors duration-200">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-foreground/45 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-foreground/30 font-semibold mt-auto pt-2">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* View all button */}
                    <div className="flex justify-center mt-10">
                        <Link
                            href="/blog"
                            id="blog-view-all"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-orange text-white text-base font-extrabold border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-100"
                        >
                            View all posts →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}