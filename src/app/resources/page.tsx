import type { Metadata } from "next";
import Header from "@/components/Header";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Resources | Parrotingo — YDT Study Tools & References",
    description:
        "Handpicked dictionaries, practice platforms, and official references to support your YDT English preparation.",
    keywords: [
        "YDT kaynaklar",
        "YDT İngilizce hazırlık",
        "Cambridge Dictionary",
        "YDT study resources",
        "Parrotingo resources",
    ],
};

export default function ResourcesPage() {
    return (
        <>
            <Header />
            <main>
                <ResourcesHero />
                <ResourcesGrid />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    );
}
