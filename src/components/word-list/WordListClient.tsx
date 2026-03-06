"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { Word } from "@/data/wordList";
import WordTable from "@/components/word-list/WordTable";
import WordCard from "@/components/word-list/WordCard";

export default function WordListClient() {
    const [words, setWords] = useState<Word[]>([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/api/words");
                if (!response.ok) {
                    throw new Error("Failed to fetch words");
                }
                const data = await response.json();
                setWords(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching words:", err);
                setError("Sözlük verileri yüklenirken bir hata oluştu.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchWords();
    }, []);

    const filteredWords = useMemo(() => {
        if (search === "") return words;
        const q = search.toLowerCase();
        return words.filter(
            (w) =>
                (w.word?.toLowerCase() || "").includes(q) ||
                (w.turkishDefinition?.toLowerCase() || "").includes(q) ||
                (w.englishDefinition?.toLowerCase() || "").includes(q) ||
                (w.category?.toLowerCase() || "").includes(q)
        );
    }, [search, words]);

    return (
        <div className="bg-brand-blue">
            <div className="w-full bg-brand-blue rounded-[3rem] px-6 py-12 lg:py-16">
                <div className="mx-auto max-w-5xl">
                    {/* ── Search Bar ── */}
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                            <input
                                type="text"
                                id="word-search"
                                placeholder="Search by word, English or Turkish definition..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-13 pr-6 py-3.5 rounded-full bg-[#E8E0D8] text-foreground text-base font-medium placeholder:text-foreground/40 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-100"
                            />
                        </div>
                    </div>

                    {/* ── Results count ── */}
                    <div className="mb-5">
                        <span className="text-sm font-semibold text-white/30">
                            {filteredWords.length} word{filteredWords.length !== 1 ? "s" : ""} found
                        </span>
                    </div>

                    {/* ── Content ── */}
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-12 h-12 text-white/40 animate-spin mb-4" />
                            <p className="text-white/40 text-lg font-semibold">Kelimeler yükleniyor...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-red-500/10 rounded-3xl border-2 border-red-500/20">
                            <p className="text-4xl mb-3">⚠️</p>
                            <p className="text-white/60 text-lg font-semibold">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white font-bold"
                            >
                                Tekrar Dene
                            </button>
                        </div>
                    ) : filteredWords.length > 0 ? (
                        <>
                            {/* Desktop table */}
                            <WordTable words={filteredWords} />

                            {/* Mobile cards */}
                            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {filteredWords.map((word, i) => (
                                    <WordCard key={word.id} word={word} index={i} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-4xl mb-3">🦜</p>
                            <p className="text-white/40 text-lg font-semibold">
                                Aradığınız kelime bulunamadı.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
