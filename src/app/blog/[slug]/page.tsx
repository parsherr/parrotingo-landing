import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts } from "@/data/blogPosts";
import { getBlogContent } from "@/lib/getBlogContent";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return { title: "Post Not Found — Parrotingo" };
    }

    return {
        title: `${post.title} — Parrotingo Blog`,
        description: post.excerpt,
        openGraph: {
            title: `${post.title} — Parrotingo Blog`,
            description: post.excerpt,
            type: "article",
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Params;
}) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const content = await getBlogContent(slug);

    const related = blogPosts
        .filter((p) => p.id !== post.id)
        .filter((p) => p.category === post.category)
        .slice(0, 3);

    const finalRelated =
        related.length >= 3
            ? related
            : [
                ...related,
                ...blogPosts
                    .filter(
                        (p) =>
                            p.id !== post.id &&
                            !related.find((r) => r.id === p.id)
                    )
                    .slice(0, 3 - related.length),
            ];

    return (
        <>
            <Header />
            <main>
                <ArticleHero post={post} />
                <ArticleBody content={content} />
                <RelatedPosts posts={finalRelated} />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    );
}