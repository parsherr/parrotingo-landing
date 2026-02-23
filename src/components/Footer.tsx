const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Download"],
    },
    {
        title: "Company",
        links: ["About", "Blog", "Careers"],
    },
    {
        title: "Support",
        links: ["Help Center", "Contact", "Privacy"],
    },
];

export default function Footer() {
    return (
        <footer
            id="footer"
            className="py-14 lg:py-16 bg-brand-blue-dark"
        >
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    {/* Left — Logo + tagline */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center">
                                <span className="text-lg">🦜</span>
                            </div>
                            <span className="text-xl font-extrabold text-white tracking-tight">
                                Parrot<span className="text-brand-orange-light">ingo</span>
                            </span>
                        </div>
                        <p className="text-white/45 text-sm max-w-[200px] leading-relaxed">
                            Language learning that actually sticks. 🌍
                        </p>
                    </div>

                    {/* Right — Link columns */}
                    <div className="flex gap-12 sm:gap-16">
                        {footerLinks.map((group) => (
                            <div key={group.title} className="flex flex-col gap-2">
                                <h4 className="text-white/60 font-bold text-xs uppercase tracking-wider mb-1">
                                    {group.title}
                                </h4>
                                {group.links.map((link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/25 text-sm">
                        © {new Date().getFullYear()} Parrotingo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
