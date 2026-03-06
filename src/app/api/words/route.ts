import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://parrotingo-admin.vercel.app/api/words", {
            cache: 'no-store' // Ensure we get fresh data
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch from upstream" }, { status: response.status });
        }

        const data = await response.json();

        // Normalize data to ensure it matches the expected Word type
        const normalizedData = Array.isArray(data) ? data.map((item: any) => ({
            id: item.id || Math.random().toString(),
            word: item.word || "",
            turkishDefinition: item.translation || item.definition_tr || "",
            englishDefinition: item.example || item.definition || "",
            category: item.category || "General"
        })) : [];

        return NextResponse.json(normalizedData);
    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
