const categories = [
    {
        label: "Exam & Official",
        accent: "#0F2A4A",
        resources: [
            {
                title: "ÖSYM",
                description: "Official exam board. Access past YDT papers, announcements, and exam schedules directly from the source.",
                url: "https://www.osym.gov.tr",
                cta: "Visit ÖSYM →",
            },
            {
                title: "Parrotingo App",
                description: "Practice YDT vocabulary with spaced repetition, quizzes, and real exam-style questions — built specifically for this exam.",
                url: "https://demo.parrotingo.com",
                cta: "Open App →",
            },
        ],
    },
    {
        label: "Dictionaries",
        accent: "#E8651A",
        resources: [
            {
                title: "Cambridge Dictionary",
                description: "The gold standard for learner-friendly definitions. Every word includes pronunciation, examples, and collocations.",
                url: "https://dictionary.cambridge.org",
                cta: "Open Cambridge →",
            },
            {
                title: "Oxford Learner's Dictionary",
                description: "Designed for English learners. Clear definitions, usage notes, and CEFR level labels on every entry.",
                url: "https://www.oxfordlearnersdictionaries.com",
                cta: "Open Oxford →",
            },
            {
                title: "Merriam-Webster",
                description: "Great for understanding subtle nuances and seeing how words evolve. Includes a free thesaurus.",
                url: "https://www.merriam-webster.com",
                cta: "Open M-W →",
            },
        ],
    },
    {
        label: "Practice & Learning",
        accent: "#D4843A",
        resources: [
            {
                title: "BBC Learning English",
                description: "Free, high-quality English lessons from the BBC. Excellent for grammar, vocabulary, and listening practice.",
                url: "https://www.bbc.co.uk/learningenglish",
                cta: "Visit BBC →",
            },
            {
                title: "British Council",
                description: "Grammar reference, vocabulary exercises, and skills practice — all free and level-appropriate for B2–C1 learners.",
                url: "https://learnenglish.britishcouncil.org",
                cta: "Visit BC →",
            },
            {
                title: "Quizlet",
                description: "Create or use existing flashcard sets to drill vocabulary. Search for YDT word lists made by other students.",
                url: "https://quizlet.com",
                cta: "Open Quizlet →",
            },
        ],
    },
];

export default function ResourcesGrid() {
    return (
        <section id="resources-grid" className="bg-gradient-to-b from-brand-blue to-brand-orange">
            <div className="w-full bg-brand-blue rounded-[3rem] px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl flex flex-col gap-16">
                    {categories.map((cat, ci) => (
                        <div key={cat.label}>
                            {/* Category heading */}
                            <div className="flex items-center gap-3 mb-8">
                                <span
                                    className="text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border-2 border-black text-white"
                                    style={{ backgroundColor: cat.accent }}
                                >
                                    {cat.label}
                                </span>
                                <div className="flex-1 h-[2px] bg-black/10 rounded-full" />
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.resources.map((res) => (
                                    <div
                                        key={res.title}
                                        className="bg-[#E8E0D8] rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] flex flex-col overflow-hidden hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
                                    >
                                        {/* Accent strip */}
                                        <div className="h-2.5 w-full" style={{ backgroundColor: cat.accent }} />

                                        <div className="p-5 flex flex-col gap-3 flex-1">
                                            <h3 className="text-lg font-extrabold text-foreground tracking-tight leading-snug">
                                                {res.title}
                                            </h3>
                                            <p className="text-sm text-foreground/50 leading-relaxed flex-1">
                                                {res.description}
                                            </p>
                                            <a
                                                href={res.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="self-start mt-1 inline-flex items-center px-5 py-2 rounded-full text-sm font-extrabold text-white border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100"
                                                style={{ backgroundColor: cat.accent }}
                                            >
                                                {res.cta}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}