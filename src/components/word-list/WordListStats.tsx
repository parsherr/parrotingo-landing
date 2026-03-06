export default function WordListStats() {
    const stats = [
        { emoji: "🎯", value: "500+", label: "Essential Words", rotation: -1.2 },
        { emoji: "📚", value: "4", label: "Categories", rotation: 0.8 },
        { emoji: "⭐", value: "3", label: "Difficulty Levels", rotation: -0.6 },
    ];

    return (
        <section id="wordlist-stats" className="bg-brand-blue">
            <div className="mx-auto max-w-5xl px-6 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-[#E8E0D8] rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] p-6 text-center flex flex-col items-center gap-2"
                            style={{ transform: `rotate(${stat.rotation}deg)` }}
                        >
                            <span className="text-3xl">{stat.emoji}</span>
                            <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
