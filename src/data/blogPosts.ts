export type BlogPost = {
    id: number;
    slug: string;
    category: "Study Tips" | "Grammar" | "Motivation" | "Vocabulary";
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    featured?: boolean;
    accent: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "5-ways-to-memorize-ydt-words-faster",
        category: "Study Tips",
        title: "5 Ways to Memorize YDT Words Faster",
        excerpt:
            "Discover proven techniques to boost your vocabulary retention and study smarter — not harder — for the exam.",
        date: "Feb 20, 2026",
        readTime: "4 min read",
        featured: true,
        accent: "#E8651A",
    },
    {
        id: 2,
        slug: "common-mistakes-in-english-collocations",
        category: "Grammar",
        title: "Common Mistakes in English Collocations",
        excerpt:
            "Learn about the most frequent collocation errors Turkish students make and simple strategies to fix them.",
        date: "Feb 15, 2026",
        readTime: "5 min read",
        accent: "#0F2A4A",
    },
    {
        id: 3,
        slug: "how-to-stay-consistent-while-studying",
        category: "Motivation",
        title: "How to Stay Consistent While Studying",
        excerpt:
            "Building a sustainable study habit is more important than cramming. Here's a proven daily routine that works.",
        date: "Feb 10, 2026",
        readTime: "3 min read",
        accent: "#D4843A",
    },
    {
        id: 4,
        slug: "top-50-ydt-phrasal-verbs",
        category: "Vocabulary",
        title: "Top 50 YDT Phrasal Verbs You Must Know",
        excerpt:
            "Phrasal verbs are everywhere in YDT exams. Here are the 50 most commonly tested ones with example sentences.",
        date: "Feb 06, 2026",
        readTime: "6 min read",
        accent: "#E8651A",
    },
    {
        id: 5,
        slug: "spaced-repetition-explained",
        category: "Study Tips",
        title: "Spaced Repetition: The Science Behind Parrotingo",
        excerpt:
            "Why do some words stick and others vanish? Spaced repetition is the answer — and here's exactly how it works.",
        date: "Jan 30, 2026",
        readTime: "5 min read",
        accent: "#0F2A4A",
    },
    {
        id: 6,
        slug: "active-vs-passive-voice-ydt",
        category: "Grammar",
        title: "Active vs Passive Voice in YDT Questions",
        excerpt:
            "Passive voice questions trip up thousands of students every year. This breakdown will clear the confusion once and for all.",
        date: "Jan 25, 2026",
        readTime: "4 min read",
        accent: "#D4843A",
    },
    {
        id: 7,
        slug: "overcoming-exam-anxiety",
        category: "Motivation",
        title: "Overcoming Exam Anxiety: A Student's Guide",
        excerpt:
            "Exam stress is real — but it can be managed. Practical tips from students who aced YDT despite being nervous wrecks.",
        date: "Jan 18, 2026",
        readTime: "4 min read",
        accent: "#E8651A",
    },
    {
        id: 8,
        slug: "academic-word-list-ydt",
        category: "Vocabulary",
        title: "Academic Word List: Which Words Matter for YDT?",
        excerpt:
            "Not all academic words are equal. We analyzed past YDT papers to find out which AWL words actually show up.",
        date: "Jan 12, 2026",
        readTime: "7 min read",
        accent: "#0F2A4A",
    },
    {
        id: 9,
        slug: "pomodoro-technique-language-learning",
        category: "Study Tips",
        title: "The Pomodoro Technique — Does It Work for Language Learning?",
        excerpt:
            "25 minutes on, 5 minutes off. We tested this popular productivity method for YDT prep. Here's what we found.",
        date: "Jan 05, 2026",
        readTime: "3 min read",
        accent: "#D4843A",
    },
];

export const allCategories = [
    "All",
    "Study Tips",
    "Grammar",
    "Motivation",
    "Vocabulary",
] as const;

export const categoryAccent: Record<string, string> = {
    "Study Tips": "#E8651A",
    "Grammar": "#0F2A4A",
    "Motivation": "#D4843A",
    "Vocabulary": "#E8651A",
};
