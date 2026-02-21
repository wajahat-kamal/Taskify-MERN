"use client"
import { useState, useEffect, useRef } from "react";

const TASKS = [
  { id: 1, title: "Redesign onboarding flow", tag: "Design", tagClass: "bg-blue-500/15 text-blue-400", avatarBg: "bg-blue-500", avatar: "AK" },
  { id: 2, title: "Finalize API integration", tag: "Dev", tagClass: "bg-violet-500/15 text-violet-400", avatarBg: "bg-violet-500", avatar: "MR" },
  { id: 3, title: "Q3 campaign brief", tag: "Marketing", tagClass: "bg-emerald-500/15 text-emerald-400", avatarBg: "bg-emerald-500", avatar: "SC" },
  { id: 4, title: "Fix auth bug — critical", tag: "Bug", tagClass: "bg-red-500/15 text-red-400", avatarBg: "bg-red-500", avatar: "JP" },
];

const STATS = [
  { label: "Tasks Done", value: "48", change: "↑ 12% this week", up: true, valueClass: "text-emerald-400" },
  { label: "In Progress", value: "16", change: "↑ 3 new today", up: true, valueClass: "text-blue-400" },
  { label: "Overdue", value: "3", change: "↓ Needs fix", up: false, valueClass: "text-red-400" },
];

const MEMBERS = [
  { name: "Alex Kim", role: "Product Lead", initials: "AK", bg: "bg-blue-500", online: true },
  { name: "Maya Ross", role: "Engineer", initials: "MR", bg: "bg-violet-500", online: true },
  { name: "Jake Park", role: "Designer", initials: "JP", bg: "bg-yellow-500", online: false },
];

const PROJECTS = [
  { name: "Website Redesign", pct: 72, barClass: "bg-gradient-to-r from-blue-500 to-violet-500" },
  { name: "Mobile App", pct: 45, barClass: "bg-gradient-to-r from-violet-500 to-red-400" },
  { name: "API v2", pct: 88, barClass: "bg-gradient-to-r from-emerald-400 to-blue-500" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState([1]);
  const [hovered, setHovered] = useState(null);
  const [dashVisible, setDashVisible] = useState(false);
  const dashRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setDashVisible(true); },
      { threshold: 0.1 }
    );
    if (dashRef.current) obs.observe(dashRef.current);
    return () => obs.disconnect();
  }, []);

  const toggle = (id: any) =>
    setChecked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }

        @keyframes drift1 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(30px,40px); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-25px,28px); }
        }
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes blink {
          0%,100% { opacity:1; box-shadow:0 0 10px #4F7EFF; }
          50%      { opacity:.35; box-shadow:0 0 3px #4F7EFF; }
        }
        .blob1 { animation: drift1 9s ease-in-out infinite; }
        .blob2 { animation: drift2 11s ease-in-out infinite; }
        .blob3 { animation: drift1 14s ease-in-out infinite reverse; }
        .badge-dot { animation: blink 2s infinite; }
        .shimmer-text {
          background: linear-gradient(135deg,#4F7EFF 0%,#A78BFA 50%,#22D3A0 100%);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }
        .dash-enter {
          opacity: 0;
          transform: translateY(60px) perspective(1200px) rotateX(7deg);
          transition: opacity 1.1s cubic-bezier(.22,1,.36,1) .15s,
                      transform 1.1s cubic-bezier(.22,1,.36,1) .15s;
        }
        .dash-enter.visible {
          opacity: 1;
          transform: translateY(0) perspective(1200px) rotateX(0deg);
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1);
        }
        .fade-up.show { opacity:1; transform:translateY(0); }
        .progress-bar { transition: width 1.5s cubic-bezier(.22,1,.36,1); }
      `}</style>

      <div className="font-dm bg-[#080B12] text-[#F0F4FF] min-h-screen overflow-x-hidden relative">

        {/* ── BACKGROUND ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="blob1 absolute w-[580px] h-[580px] rounded-full -top-40 -left-40 opacity-30"
            style={{ background: "radial-gradient(circle, rgba(79,126,255,0.5) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="blob2 absolute w-[480px] h-[480px] rounded-full top-0 -right-24 opacity-25"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 65%)", filter: "blur(80px)" }} />
          <div className="blob3 absolute w-[380px] h-[380px] rounded-full bottom-32 left-[35%] opacity-15"
            style={{ background: "radial-gradient(circle, rgba(34,211,160,0.5) 0%, transparent 65%)", filter: "blur(90px)" }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* ── HERO ── */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 min-h-screen">

          {/* Badge */}
          <div
            className={`fade-up ${mounted ? "show" : ""} inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-[13px] text-blue-300 font-medium mb-7`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="badge-dot w-2 h-2 rounded-full bg-blue-500 inline-block" />
            Powered by GPT-4o · Now in Public Beta
          </div>

          {/* Headline */}
          <h1
            className={`fade-up ${mounted ? "show" : ""} font-syne font-extrabold leading-[1.07] tracking-[-2px] max-w-[820px] text-[clamp(40px,6vw,76px)]`}
            style={{ transitionDelay: "0.25s" }}
          >
            Manage Tasks Smarter<br />
            with <span className="shimmer-text">AI That Works</span><br />
            For You
          </h1>

          {/* Subtext */}
          <p
            className={`fade-up ${mounted ? "show" : ""} mt-5 text-[#6B7A99] max-w-[540px] leading-[1.75] text-[clamp(15px,1.5vw,18px)]`}
            style={{ transitionDelay: "0.4s" }}
          >
            Taskify learns your workflow, auto-assigns priorities, and keeps your
            team perfectly in sync — so you can focus on what actually matters.
          </p>

          {/* CTA Buttons */}
          <div
            className={`fade-up ${mounted ? "show" : ""} flex gap-3 mt-10 flex-wrap justify-center`}
            style={{ transitionDelay: "0.55s" }}
          >
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
          <div
            className={`fade-up ${mounted ? "show" : ""} flex items-center gap-4 mt-9 flex-wrap justify-center`}
            style={{ transitionDelay: "0.7s" }}
          >
            <div className="flex">
              {[["bg-blue-500","AK"],["bg-violet-500","MR"],["bg-emerald-500","SC"],["bg-yellow-500","JP"]].map(([bg, init], i) => (
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

          {/* ── DASHBOARD MOCKUP ── */}
          <div
            ref={dashRef}
            className={`dash-enter ${dashVisible ? "visible" : ""} mt-16 w-full max-w-[1100px] relative`}
          >
            {/* Glow under dashboard */}
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-14 opacity-60 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(79,126,255,0.5) 0%, transparent 70%)", filter: "blur(28px)" }}
            />

            <div className="bg-[#0E1320] border border-white/[0.07] rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_50px_100px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)]">

              {/* Topbar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.07] bg-[#141926]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <div className="flex gap-1 ml-4">
                  {["Dashboard","Projects","Calendar","Reports"].map((t, i) => (
                    <div
                      key={t}
                      className={`px-3.5 py-1 rounded-md text-[12px] font-medium cursor-pointer transition-all ${
                        i === 0
                          ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                          : "text-[#6B7A99] hover:text-[#F0F4FF]"
                      }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="ml-auto flex items-center gap-1.5 bg-[#080B12] border border-white/[0.07] rounded-lg px-3 py-1.5 w-44 text-[12px] text-[#6B7A99]">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <circle cx="4.5" cy="4.5" r="3.5" stroke="#6B7A99" strokeWidth="1.2" />
                    <path d="M7.5 7.5l2 2" stroke="#6B7A99" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  Search tasks...
                </div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-[200px_1fr_240px] min-h-[420px]">

                {/* Sidebar */}
                <div className="border-r border-white/[0.07] py-5 bg-[#141926]">
                  <div className="px-3 mb-6">
                    <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#6B7A99] px-2 mb-2">Workspace</p>
                    {[
                      { icon: "📊", label: "Dashboard", active: true },
                      { icon: "✅", label: "My Tasks", badge: "8" },
                      { icon: "📁", label: "Projects" },
                      { icon: "📅", label: "Calendar" },
                    ].map(({ icon, label, active, badge }) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12.5px] cursor-pointer mb-0.5 transition-all ${
                          active
                            ? "bg-blue-500/[0.12] text-[#F0F4FF]"
                            : "text-[#6B7A99] hover:text-[#F0F4FF] hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="text-[13px]">{icon}</span>
                        {label}
                        {badge && (
                          <span className="ml-auto bg-blue-500 text-white text-[10px] font-bold px-1.5 py-px rounded-full">
                            {badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="px-3">
                    <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#6B7A99] px-2 mb-2">AI Tools</p>
                    {[
                      { icon: "🤖", label: "AI Assist" },
                      { icon: "⚡", label: "Automations" },
                      { icon: "📈", label: "Analytics" },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12.5px] text-[#6B7A99] cursor-pointer mb-0.5 hover:text-[#F0F4FF] hover:bg-white/[0.04] transition-all"
                      >
                        <span className="text-[13px]">{icon}</span>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-syne text-[15px] font-bold">Good morning, Alex 👋</h2>
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500/15 to-violet-500/15 border border-blue-500/25 rounded-lg px-3 py-1.5 text-[11.5px] font-semibold text-violet-400 cursor-pointer">
                      ✨ AI Summary
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {STATS.map(({ label, value, change, up, valueClass }) => (
                      <div key={label} className="bg-[#080B12] border border-white/[0.07] rounded-xl p-4">
                        <p className="text-[10.5px] text-[#6B7A99] mb-1.5">{label}</p>
                        <p className={`font-syne text-[22px] font-bold ${valueClass}`}>{value}</p>
                        <p className={`text-[10px] mt-1 ${up ? "text-emerald-400" : "text-red-400"}`}>{change}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tasks */}
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-[12px] font-semibold">Today's Tasks</p>
                    <button className="font-dm text-[11px] text-[#6B7A99] bg-[#080B12] border border-white/[0.07] rounded-md px-2.5 py-1 cursor-pointer">
                      Filter ▾
                    </button>
                  </div>

                  {TASKS.map(({ id, title, tag, tagClass, avatar, avatarBg }) => {
                    const done = checked.includes(id);
                    return (
                      <div
                        key={id}
                        onClick={() => toggle(id)}
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl mb-2 cursor-pointer transition-all duration-200 border ${
                          done ? "opacity-60" : ""
                        } ${
                          hovered === id
                            ? "bg-blue-500/[0.06] border-blue-500/25"
                            : "bg-[#080B12] border-white/[0.07]"
                        }`}
                      >
                        <div
                          className={`w-[17px] h-[17px] rounded-[5px] flex-shrink-0 flex items-center justify-center text-[10px] text-white transition-all duration-200 ${
                            done ? "bg-blue-500" : "border border-white/15"
                          }`}
                        >
                          {done && "✓"}
                        </div>
                        <div className="flex-1 text-left">
                          <p className={`text-[12px] font-medium ${done ? "line-through text-[#6B7A99]" : "text-[#F0F4FF]"}`}>
                            {title}
                          </p>
                          <p className="text-[10px] text-[#6B7A99] mt-0.5">
                            {done ? "Completed · ✓ Done" : "Due today · In Progress"}
                          </p>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${tagClass}`}>{tag}</span>
                        <div className={`w-[23px] h-[23px] rounded-full ${avatarBg} flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0`}>
                          {avatar}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right Panel */}
                <div className="border-l border-white/[0.07] p-5 bg-[#141926] overflow-hidden">
                  <p className="text-[12px] font-semibold mb-3.5">AI Insights</p>
                  <div className="bg-gradient-to-br from-blue-500/[0.08] to-violet-500/[0.08] border border-blue-500/20 rounded-xl p-3.5 mb-4">
                    <p className="text-[11px] font-bold text-blue-400 mb-2">✨ Smart Suggestion</p>
                    <p className="text-[11px] text-[#6B7A99] leading-relaxed">
                      You're most productive 9–11am. Schedule 3 high-priority tasks then.
                    </p>
                  </div>

                  <p className="text-[12px] font-semibold mb-3">Project Progress</p>
                  {PROJECTS.map(({ name, pct, barClass }) => (
                    <div key={name} className="mb-3.5">
                      <div className="flex justify-between text-[11px] text-[#6B7A99] mb-1.5">
                        <span>{name}</span><span>{pct}%</span>
                      </div>
                      <div className="h-[5px] bg-[#080B12] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full progress-bar ${barClass}`}
                          style={{ width: dashVisible ? `${pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}

                  <p className="text-[12px] font-semibold mt-5 mb-3">Team Online</p>
                  {MEMBERS.map(({ name, role, initials, bg, online }) => (
                    <div key={name} className="flex items-center gap-2 mb-2.5">
                      <div className={`w-7 h-7 rounded-full ${bg} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}>
                        {initials}
                      </div>
                      <div className="flex-1">
                        <p className="text-[12px] font-medium leading-tight">{name}</p>
                        <p className="text-[10px] text-[#6B7A99]">{role}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${online ? "bg-emerald-400 shadow-[0_0_8px_#22D3A0]" : "bg-[#6B7A99]"}`} />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}