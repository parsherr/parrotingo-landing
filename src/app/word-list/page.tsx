import type { Metadata } from "next";
import Header from "@/components/Header";
import WordListHero from "@/components/word-list/WordListHero";
import WordListClient from "@/components/word-list/WordListClient";
import WordListCTA from "@/components/word-list/WordListCTA";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Word List | Parrotingo — Essential YDT Vocabulary",
    description:
        "Explore Parrotingo's curated YDT word list. 500+ essential English words with meanings, definitions, and examples to boost your exam score.",
    keywords: [
        "YDT kelime listesi",
        "YDT vocabulary",
        "İngilizce kelime",
        "YDT sınav hazırlık",
        "Parrotingo word list",
    ],
};

export default function WordListPage() {
    return (
        <>
            <Header />
            <main>
                <WordListHero />
                <WordListClient />
                <WordListCTA />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    );
}
