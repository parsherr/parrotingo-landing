import fs from "fs";
import path from "path";
import { marked } from "marked";

export async function getBlogContent(slug: string): Promise<string> {
    const filePath = path.join(process.cwd(), "src/data/blogs", `${slug}.md`);
    try {
        const raw = fs.readFileSync(filePath, "utf-8");
        // Strip the title + metadata block (everything before the first ---)
        const parts = raw.split(/\n---\n/);
        const content = parts.slice(1).join("\n---\n").trim();
        return await marked(content) as string;
    } catch {
        return "<p>Content coming soon…</p>";
    }
}