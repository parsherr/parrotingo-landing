"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import FeaturedPost from "@/components/blog/FeaturedPost";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogListClient() {
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];
    const otherPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

    const filteredPosts =
        activeCategory === "All"
            ? otherPosts
            : otherPosts.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* ── Featured Post ── */}
            <div className="bg-brand-blue">
                <div className="mx-auto max-w-5xl px-6 pb-14 lg:pb-16">
                    <FeaturedPost post={featuredPost} />
                </div>
            </div>

            {/* ── Category Filter + Grid ── */}
            <div className="bg-gradient-to-b from-brand-blue to-brand-orange">
                <div className="w-full bg-brand-blue rounded-[3rem] px-6 py-12 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        {/* Filter bar */}
                        <div className="mb-10">
                            <CategoryFilter
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />
                        </div>

                        {/* Cards grid */}
                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                                {filteredPosts.map((post, i) => (
                                    <BlogCard
                                        key={post.id}
                                        post={post}
                                        index={i}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-white/40 text-lg font-semibold">
                                    No posts found in this category yet. 🦜
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
