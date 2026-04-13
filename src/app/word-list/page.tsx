import type { Metadata } from "next";
import Header from "@/components/Header";
import WordListHero from "@/components/word-list/WordListHero";
import WordListClient from "@/components/word-list/WordListClient";
import WordListCTA from "@/components/word-list/WordListCTA";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Word } from "@/data/wordList";

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

async function getWords(): Promise<Word[]> {
    try {
        const res = await fetch("https://admin.parrotingo.com/api/curriculum", {
            cache: 'no-store' // Ensure fresh data on every request
        });

        if (!res.ok) {
            console.error("Failed to fetch curriculum on server");
            return [];
        }

        const data = await res.json();

        return (data.words || []).map((w: any) => ({
            id: w.id,
            word: w.word,
            meaning: w.definition_tr || "",
            definition: w.definition || ""
        }));
    } catch (error) {
        console.error("Error in getWords:", error);
        return [];
    }
}

export default async function WordListPage() {
    const words = await getWords();

    return (
        <>
            <Header />
            <main>
                <WordListHero />
                <WordListClient initialWords={words} />
                <WordListCTA />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    );
}
