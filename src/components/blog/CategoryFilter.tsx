"use client";

import { allCategories } from "@/data/blogPosts";

interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
    activeCategory,
    onCategoryChange,
}: CategoryFilterProps) {
    return (
        <div
            id="category-filter"
            className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
            {allCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-150 cursor-pointer ${isActive
                                ? "bg-brand-orange text-white border-[3px] border-black shadow-[3px_3px_0px_0px_#000]"
                                : "bg-transparent text-white/60 border-[2px] border-white/20 hover:border-white/40 hover:text-white/80"
                            }`}
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
}
