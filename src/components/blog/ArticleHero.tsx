import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import type { BlogPost } from "@/data/blogPosts";

interface ArticleHeroProps {
    post: BlogPost;
}

export default function ArticleHero({ post }: ArticleHeroProps) {
    return (
        <section
            id="article-hero"
            className="relative bg-brand-blue pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        >
            <div className="mx-auto max-w-5xl px-6">
                {/* Back link */}
                <Link
                    href="/blog"
                    id="back-to-blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-brand-orange-light transition-colors duration-200 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Category badge */}
                <span
                    className="inline-block text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border-2 border-black text-white mb-6"
                    style={{ backgroundColor: post.accent }}
                >
                    {post.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
                    <Highlighter
                        action="underline"
                        color="#F0944D"
                        strokeWidth={3}
                        animationDuration={800}
                        isView
                    >
                        {post.title}
                    </Highlighter>
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-3 mt-6 text-sm text-white/40 font-semibold">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </section>
    );
}
