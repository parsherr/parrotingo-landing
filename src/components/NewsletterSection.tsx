"use client";

import { useState } from "react";
import { Highlighter } from "@/components/ui/highlighter";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <section
            id="newsletter"
            className="bg-gradient-to-b from-brand-orange to-brand-blue-dark"
        >
            <div className="w-full bg-brand-orange rounded-[3rem] px-6 py-20 lg:py-28">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col items-center text-center gap-6">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                            Subscribe to our{" "}
                            <Highlighter action="box" color="#FFFFFF99" strokeWidth={2.5} animationDuration={800} isView>
                                newsletter!
                            </Highlighter>
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            id="newsletter-form"
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mx-auto mt-4"
                        >
                            <input
                                type="email"
                                id="newsletter-email"
                                placeholder="urmail@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 w-full py-3 sm:h-14 px-6 rounded-full bg-[#E8E0D8] text-foreground text-base font-medium placeholder:text-foreground/40 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all duration-100"
                            />
                            {/* Subscribe — cartoon neobrutalist pill button */}
                            <button
                                type="submit"
                                id="newsletter-subscribe"
                                className="w-full sm:w-auto h-14 px-8 rounded-full bg-brand-blue-dark text-white text-base font-extrabold border-[3px] border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] transition-all duration-100 flex-shrink-0"
                            >
                                {submitted ? "✓ Done!" : "Subscribe"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
