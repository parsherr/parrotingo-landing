import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

/* Slight rotations for the hand-drawn cartoon feel */
const cardRotations = [-1.2, 0.6, -0.8, 0.9, -0.5, 1.1, -0.7, 0.4, -1.0];

export default function BlogCard({ post, index }: BlogCardProps) {
    const rotation = cardRotations[index % cardRotations.length];

    return (
        <Link href={`/blog/${post.slug}`}>
            <article
                className="h-full bg-[#E8E0D8] rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 overflow-hidden group cursor-pointer flex flex-col"
                style={{ transform: `rotate(${rotation}deg)` }}
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
                        style={{ backgroundColor: post.accent }}
                    >
                        {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-foreground leading-snug tracking-tight group-hover:text-brand-orange transition-colors duration-200">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-foreground/45 leading-relaxed line-clamp-2">
                        {post.excerpt}
                    </p>

                    {/* Meta — pushed to bottom */}
                    <div className="flex items-center gap-2 text-xs text-foreground/30 font-semibold mt-auto pt-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
