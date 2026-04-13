"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import WordTable from "@/components/word-list/WordTable";
import WordCard from "@/components/word-list/WordCard";
import { Word } from "@/data/wordList";

interface WordListClientProps {
    initialWords: Word[];
}

export default function WordListClient({ initialWords }: WordListClientProps) {
    const [search, setSearch] = useState("");

    const filteredWords = useMemo(() => {
        if (search === "") return initialWords;
        const q = search.toLowerCase();
        return initialWords.filter(
            (w) =>
                w.word.toLowerCase().includes(q) ||
                w.meaning.toLowerCase().includes(q) ||
                w.definition.toLowerCase().includes(q)
        );
    }, [search, initialWords]);

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
                                placeholder="Search words or meanings..."
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
                    {filteredWords.length > 0 ? (
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
                                No words found. Try a different search term.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
