"use client"
export default function HeroSection() {

    return (
        <header className="text-[#F0F4FF] h-screen overflow-x-hidden relative flex items-center justify-center">
            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">

                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-[13px] text-blue-300 font-medium mb-7" >
                    <span className="badge-dot w-2 h-2 rounded-full bg-blue-500 inline-block" />
                    Powered by GPT-4o · Now in Public Beta
                </div>

                {/* Headline */}
                <h1 className="text-6xl max-w-[750px]" >
                    Manage Tasks Smarter
                    with AI That Works
                    For You
                </h1>

                {/* Subtext */}
                <p className="mt-5 text-[#6B7A99] max-w-[540px] leading-[1.75] text-md">
                    Taskify learns your workflow, auto-assigns priorities, and keeps your
                    team perfectly in sync — so you can focus on what actually matters.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex gap-3 mt-10 flex-wrap justify-center" >
                    <button
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(79,126,255,0.5)]"
                        style={{ boxShadow: "0 0 30px rgba(79,126,255,0.4)" }}
                    >
                        🚀 Get Started Free
                    </button>
                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[#F0F4FF] font-medium px-8 py-3.5 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="#F0F4FF" strokeWidth="1.2" />
                            <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="#F0F4FF" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-4 mt-9 flex-wrap justify-center">
                    <div className="flex">
                        {[["bg-blue-500", "AK"], ["bg-violet-500", "MR"], ["bg-emerald-500", "SC"], ["bg-yellow-500", "JP"]].map(([bg, init], i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#080B12] ${bg} flex items-center justify-center text-[10px] font-bold text-white ${i > 0 ? "-ml-2.5" : ""}`}>
                                {init}
                            </div>
                        ))}
                    </div>
                    <div className="text-left">
                        <div className="text-yellow-400 text-xs tracking-widest">★★★★★</div>
                        <div className="text-xs text-[#6B7A99] mt-0.5">Loved by <strong className="text-[#F0F4FF]">12,000+</strong> teams</div>
                    </div>
                    <div className="w-px h-9 bg-white/10" />
                    <div className="text-left">
                        <div className="text-sm font-semibold">No credit card</div>
                        <div className="text-xs text-[#6B7A99]">Free 14-day trial</div>
                    </div>
                </div>



            </section>
        </header>
    );
}