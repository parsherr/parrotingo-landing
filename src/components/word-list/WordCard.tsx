import type { Word } from "@/data/wordList";

interface WordCardProps {
    word: Word;
    index: number;
}

const cardRotations = [-0.8, 0.5, -0.4, 0.7, -0.6, 0.3, -0.9, 0.4];

export default function WordCard({ word, index }: WordCardProps) {
    const rotation = cardRotations[index % cardRotations.length];

    return (
        <div
            className="bg-[#E8E0D8] rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] p-5 flex flex-col gap-2.5"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* Word */}
            <span className="text-lg font-extrabold text-foreground tracking-tight">
                {word.word}
            </span>

            {/* Turkish meaning */}
            <p className="text-sm text-foreground/60 font-medium">
                {word.meaning}
            </p>

            {/* English definition */}
            <p className="text-xs text-foreground/40 italic leading-relaxed">
                {word.definition}
            </p>
        </div>
    );
}
