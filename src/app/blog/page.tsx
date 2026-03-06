import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import BlogHero from "@/components/blog/BlogHero";
import BlogListClient from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
    title: "Blog — Parrotingo",
    description:
        "Tips, tricks, and insights to help you ace your YDT exam. Study smarter with Parrotingo's blog.",
    openGraph: {
        title: "Blog — Parrotingo",
        description:
            "Tips, tricks, and insights to help you ace your YDT exam.",
        type: "website",
    },
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main>
                <BlogHero />
                <BlogListClient />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    );
}
