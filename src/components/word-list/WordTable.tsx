import type { Word } from "@/data/wordList";

interface WordTableProps {
    words: Word[];
}

export default function WordTable({ words }: WordTableProps) {
    return (
        <div
            className="hidden md:block overflow-hidden rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000]"
            id="word-table"
        >
            <table className="w-full">
                {/* Header */}
                <thead>
                    <tr className="bg-brand-blue text-white text-left">
                        <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider">Word</th>
                        <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider">Meaning</th>
                        <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider">Definition</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word, i) => (
                        <tr
                            key={word.id}
                            className={`border-t-2 border-black/10 transition-colors duration-150 hover:bg-brand-orange2 ${i % 2 === 0 ? "bg-[#E8E0D8]" : "bg-[#DED6CE]"
                                }`}
                        >
                            <td className="px-5 py-3.5">
                                <span className="text-base font-extrabold text-foreground tracking-tight">
                                    {word.word}
                                </span>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="text-sm text-foreground/60 font-medium">
                                    {word.meaning}
                                </span>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="text-sm text-foreground/45 italic leading-relaxed">
                                    {word.definition}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
