import { Highlighter } from "@/components/ui/highlighter";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/data/blogPosts";

interface RelatedPostsProps {
    posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <section
            id="related-posts"
            className="bg-gradient-to-b from-[#E8E0D8] to-brand-orange"
        >
            <div className="w-full bg-brand-blue rounded-[3rem] px-6 py-16 lg:py-20">
                <div className="mx-auto max-w-5xl">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                            You might also{" "}
                            <Highlighter
                                action="underline"
                                color="#F0944D"
                                strokeWidth={3}
                                animationDuration={800}
                                isView
                            >
                                like
                            </Highlighter>
                        </h2>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {posts.map((post, i) => (
                            <BlogCard key={post.id} post={post} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
