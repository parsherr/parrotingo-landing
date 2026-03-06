import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

interface FeaturedPostProps {
    post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <Link href={`/blog/${post.slug}`} id="featured-post">
            <article
                className="bg-[#E8E0D8] rounded-3xl border-[3px] border-black shadow-[7px_7px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 overflow-hidden group cursor-pointer"
                style={{ transform: "rotate(-0.5deg)" }}
            >
                <div className="flex flex-col lg:flex-row">
                    {/* Left — Accent visual */}
                    <div
                        className="relative w-full lg:w-[340px] min-h-[200px] lg:min-h-[300px] flex-shrink-0 flex items-center justify-center overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${post.accent}, ${post.accent}88)`,
                        }}
                    >
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                                    backgroundSize: "20px 20px",
                                }}
                            />
                        </div>

                        {/* Featured badge */}
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="bg-white rounded-full px-5 py-2 border-[3px] border-black shadow-[3px_3px_0px_0px_#000]">
                                <span className="text-sm font-extrabold text-foreground tracking-tight">
                                    ⭐ Featured
                                </span>
                            </div>
                            <Image
                                src="/star1.png"
                                alt=""
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain animate-bob"
                            />
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="flex-1 p-7 sm:p-9 lg:p-10 flex flex-col justify-center gap-4">
                        {/* Category */}
                        <span
                            className="self-start text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-black text-white"
                            style={{ backgroundColor: post.accent }}
                        >
                            {post.category}
                        </span>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug tracking-tight group-hover:text-brand-orange transition-colors duration-200">
                            {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-base text-foreground/50 leading-relaxed max-w-xl">
                            {post.excerpt}
                        </p>

                        {/* Meta + CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-2">
                            <div className="flex items-center gap-3 text-sm text-foreground/35 font-semibold">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>

                            <span className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-brand-orange text-white text-sm font-extrabold border-[3px] border-black shadow-[4px_4px_0px_0px_#000] group-hover:shadow-[2px_2px_0px_0px_#000] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-100">
                                Read more →
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
