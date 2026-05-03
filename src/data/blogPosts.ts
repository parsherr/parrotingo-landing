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
        slug: "ydt-en-sik-kelimeler-2018-2025",
        category: "Vocabulary",
        title: "YDT'de En Çok Çıkan 40 Kelime: 2018–2025 Resmi Sınav Analizi",
        excerpt:
            "8 yıllık resmi ÖSYM kitapçıklarından çıkarılan frekans verileri. Hangi kelimeleri önce öğreneceğinizi artık tahmin etmenize gerek yok.",
        date: "May 03, 2026",
        readTime: "7 min read",
        featured: true,
        accent: "#E8651A",
    },
    {
        id: 2,
        slug: "ydt-baglac-ve-kalip-ifadeler-2018-2025",
        category: "Grammar",
        title: "YDT'nin Gizli Silahı: 16 Bağlaç ve Kalıp İfade (2018–2025 Verisi)",
        excerpt:
            "Kelimeler sizi sınava sokar; bağlaçlar sizi sınavda tutar. 8 yılın tamamında çıkan 16 kalıbı ve nasıl kullanılacağını öğrenin.",
        date: "May 03, 2026",
        readTime: "6 min read",
        accent: "#0F2A4A",
    },
];

export const allCategories = [
    "All",
    "Vocabulary",
    "Grammar",
] as const;

export const categoryAccent: Record<string, string> = {
    "Vocabulary": "#E8651A",
    "Grammar": "#0F2A4A",
};