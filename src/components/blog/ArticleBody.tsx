interface ArticleBodyProps {
    content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
    return (
        <section
            id="article-body"
            className="bg-brand-blue"
        >
            <div className="w-full bg-[#E8E0D8] rounded-t-[3rem] px-6 py-16 lg:py-20">
                <article
                    className="mx-auto max-w-3xl prose-parrotingo"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </section>
    );
}
