"use client"
import { useState } from "react";

type Priority = "high" | "medium" | "low";

interface ITask {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

// Mock data matching your schema exactly
const mockTasks: ITask[] = [
  { _id: "6601a1", userId: "u1", title: "Design new landing page", description: "Create wireframes and mockups for the new marketing landing page.", completed: false, priority: "high", dueDate: "2026-03-05", createdAt: "2026-02-10T09:00:00Z", updatedAt: "2026-02-20T11:00:00Z" },
  { _id: "6601a2", userId: "u1", title: "Fix auth bug on login", description: "Users are getting logged out after 5 minutes unexpectedly.", completed: false, priority: "high", dueDate: "2026-02-28", createdAt: "2026-02-12T10:00:00Z", updatedAt: "2026-02-22T08:00:00Z" },
  { _id: "6601a3", userId: "u1", title: "Write Q1 report", description: "Summarize performance metrics and KPIs for Q1.", completed: false, priority: "medium", dueDate: "2026-03-10", createdAt: "2026-02-14T08:30:00Z", updatedAt: "2026-02-14T08:30:00Z" },
  { _id: "6601a4", userId: "u1", title: "Update API documentation", description: "Reflect recent endpoint changes in the public docs.", completed: true, priority: "low", dueDate: "2026-02-20", createdAt: "2026-02-01T12:00:00Z", updatedAt: "2026-02-19T16:00:00Z" },
  { _id: "6601a5", userId: "u1", title: "User interviews — March batch", description: "Schedule and conduct 6 user interviews for UX research.", completed: false, priority: "medium", dueDate: "2026-03-15", createdAt: "2026-02-15T09:00:00Z", updatedAt: "2026-02-15T09:00:00Z" },
  { _id: "6601a6", userId: "u1", title: "Set up CI/CD pipeline", description: "Configure GitHub Actions for automated deployment.", completed: true, priority: "high", createdAt: "2026-02-05T07:00:00Z", updatedAt: "2026-02-18T14:00:00Z" },
  { _id: "6601a7", userId: "u1", title: "Onboard new designer", description: "Prepare onboarding docs and set up tools access.", completed: false, priority: "low", dueDate: "2026-03-01", createdAt: "2026-02-18T11:00:00Z", updatedAt: "2026-02-18T11:00:00Z" },
  { _id: "6601a8", userId: "u1", title: "Migrate to PostgreSQL", completed: false, priority: "medium", dueDate: "2026-03-20", createdAt: "2026-02-20T10:00:00Z", updatedAt: "2026-02-20T10:00:00Z" },
];

const priorityConfig: Record<Priority, { label: string; color: string; dot: string; ring: string }> = {
  high:   { label: "High",   color: "text-rose-400",    dot: "bg-rose-400",    ring: "ring-rose-400/20" },
  medium: { label: "Medium", color: "text-amber-400",   dot: "bg-amber-400",   ring: "ring-amber-400/20" },
  low:    { label: "Low",    color: "text-emerald-400", dot: "bg-emerald-400", ring: "ring-emerald-400/20" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function isOverdue(dueDate?: string, completed?: boolean) {
  if (!dueDate || completed) return false;
  return new Date(dueDate) < new Date();
}

export default function TaskDashboard() {
  const [search, setSearch]                   = useState("");
  const [filterCompleted, setFilterCompleted] = useState<"all" | "pending" | "completed">("all");
  const [filterPriority, setFilterPriority]   = useState<Priority | "all">("all");
  const [selectedTask, setSelectedTask]       = useState<ITask | null>(null);

  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user") || "{}"); }
    catch { return { name: "User", email: "" }; }
  })();

  const filtered = mockTasks.filter((t) => {
    const matchSearch   = t.title.toLowerCase().includes(search.toLowerCase()) ||
                          (t.description ?? "").toLowerCase().includes(search.toLowerCase());
    const matchComplete = filterCompleted === "all"
      ? true : filterCompleted === "completed" ? t.completed : !t.completed;
    const matchPriority = filterPriority === "all" || t.priority === filterPriority;
    return matchSearch && matchComplete && matchPriority;
  });

  const total     = mockTasks.length;
  const completed = mockTasks.filter((t) => t.completed).length;
  const pending   = total - completed;
  const overdue   = mockTasks.filter((t) => isOverdue(t.dueDate, t.completed)).length;
  const pct       = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen bg-[#0c0d12] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2d3a; border-radius: 4px; }
        .card { transition: transform 0.18s ease, background 0.18s ease; cursor: pointer; }
        .card:hover { transform: translateY(-3px); background: #191c28 !important; }
        .fade-in { animation: fi 0.5s ease both; }
        @keyframes fi { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: none; } }
        .stagger > * { animation: fi 0.4s ease both; }
        .stagger > *:nth-child(1){animation-delay:.05s} .stagger > *:nth-child(2){animation-delay:.10s}
        .stagger > *:nth-child(3){animation-delay:.15s} .stagger > *:nth-child(4){animation-delay:.20s}
        .stagger > *:nth-child(5){animation-delay:.25s} .stagger > *:nth-child(6){animation-delay:.30s}
        .stagger > *:nth-child(7){animation-delay:.35s} .stagger > *:nth-child(8){animation-delay:.40s}
        .pill { transition: all .15s ease; }
        .overlay { animation: ov .2s ease; }
        @keyframes ov { from{opacity:0} to{opacity:1} }
        .modal { animation: md .25s cubic-bezier(.34,1.56,.64,1); }
        @keyframes md { from{opacity:0;transform:scale(.93) translateY(12px)} to{opacity:1;transform:none} }
        input:focus { outline: none; }
        .progress-ring { transform: rotate(-90deg); }
      `}</style>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[60px] bg-[#0e0f16] border-r border-white/[0.04] flex flex-col items-center py-5 gap-5 z-20">
        <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-500/30">T</div>
        {[
          { icon: "▤", active: true },
          { icon: "◫", active: false },
          { icon: "◉", active: false },
          { icon: "⚙", active: false },
        ].map((item, i) => (
          <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all ${item.active ? "bg-indigo-500/20 text-indigo-400" : "text-slate-600 hover:text-slate-400 hover:bg-white/5"}`}>
            {item.icon}
          </button>
        ))}
        <div className="mt-auto w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold">
          {(user.name?.[0] ?? "U").toUpperCase()}
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-[60px] p-8 max-w-[1200px] fade-in">

        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <p className="text-slate-500 text-sm">Welcome back,</p>
            <h1 className="text-xl font-semibold mt-0.5">{user.name ?? "User"}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-slate-400 text-xs">{user.email}</p>
              <p className="text-slate-600 text-xs">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold">
              {(user.name?.[0] ?? "U").toUpperCase()}
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 stagger">

          {/* Circular progress */}
          <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5 flex items-center gap-4">
            <div className="relative w-14 h-14 shrink-0">
              <svg width="56" height="56" className="progress-ring">
                <circle cx="28" cy="28" r="22" fill="none" stroke="#1e2030" strokeWidth="5" />
                <circle cx="28" cy="28" r="22" fill="none" stroke="#6366f1" strokeWidth="5"
                  strokeDasharray={`${2 * Math.PI * 22}`}
                  strokeDashoffset={`${2 * Math.PI * 22 * (1 - pct / 100)}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 1s ease" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-400">{pct}%</span>
            </div>
            <div>
              <p className="text-slate-500 text-xs mb-0.5">Progress</p>
              <p className="text-white font-semibold text-sm">{completed}/{total} done</p>
            </div>
          </div>

          <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Total</p>
            <p className="text-3xl font-bold text-white">{total}</p>
            <p className="text-slate-600 text-xs mt-1">all tasks</p>
          </div>

          <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Pending</p>
            <p className="text-3xl font-bold text-amber-400">{pending}</p>
            <p className="text-slate-600 text-xs mt-1">not completed</p>
          </div>

          <div className="bg-[#13141d] border border-white/[0.05] rounded-2xl p-5">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Overdue</p>
            <p className="text-3xl font-bold text-rose-400">{overdue}</p>
            <p className="text-slate-600 text-xs mt-1">past due date</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="relative flex-1 min-w-48">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search by title or description…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#13141d] border border-white/[0.06] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500/40"
            />
          </div>

          {/* Completion filter */}
          <div className="flex gap-1 bg-[#13141d] border border-white/[0.06] rounded-xl p-1">
            {(["all", "pending", "completed"] as const).map((v) => (
              <button key={v} onClick={() => setFilterCompleted(v)}
                className={`pill px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filterCompleted === v ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"}`}>
                {v}
              </button>
            ))}
          </div>

          {/* Priority filter */}
          <div className="flex gap-1 bg-[#13141d] border border-white/[0.06] rounded-xl p-1">
            {(["all", "high", "medium", "low"] as const).map((v) => (
              <button key={v} onClick={() => setFilterPriority(v)}
                className={`pill px-3 py-1.5 rounded-lg text-xs font-medium capitalize ${filterPriority === v ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"}`}>
                {v === "all" ? "All Priority" : v}
              </button>
            ))}
          </div>
        </div>

        <p className="text-slate-600 text-xs mb-4">{filtered.length} task{filtered.length !== 1 ? "s" : ""}</p>

        {/* Task Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-600">
            <p className="text-5xl mb-4">🗂️</p>
            <p className="text-sm">No tasks match your filters.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 stagger">
            {filtered.map((task) => {
              const p   = priorityConfig[task.priority];
              const due = isOverdue(task.dueDate, task.completed);
              return (
                <div key={task._id} onClick={() => setSelectedTask(task)}
                  className="card bg-[#13141d] border border-white/[0.05] rounded-2xl p-5 flex flex-col gap-3">

                  {/* Badges */}
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center gap-1.5 text-xs font-medium ring-1 px-2.5 py-1 rounded-lg ${p.color} ${p.ring} bg-white/[0.03]`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                      {p.label}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${task.completed ? "bg-emerald-900/50 text-emerald-400" : "bg-slate-800 text-slate-400"}`}>
                      {task.completed ? "✓ Done" : "Pending"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-sm font-semibold leading-snug ${task.completed ? "line-through text-slate-500" : "text-white"}`}>
                    {task.title}
                  </h3>

                  {/* Description */}
                  {task.description && (
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{task.description}</p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-white/[0.04] mt-auto">
                    <span className="text-slate-700" style={{ fontFamily: "DM Mono, monospace" }}>
                      #{task._id.slice(-6)}
                    </span>
                    {task.dueDate ? (
                      <span className={due ? "text-rose-400 font-medium" : "text-slate-500"}>
                        {due ? "⚠ " : "📅 "}{formatDate(task.dueDate)}
                      </span>
                    ) : (
                      <span className="text-slate-700 italic">No due date</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedTask && (
        <div className="overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTask(null)}>
          <div className="modal bg-[#13141d] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>

            <div className="flex items-start justify-between mb-5">
              <div className="flex gap-2 flex-wrap">
                <span className={`flex items-center gap-1.5 text-xs font-medium ring-1 px-2.5 py-1 rounded-lg ${priorityConfig[selectedTask.priority].color} ${priorityConfig[selectedTask.priority].ring} bg-white/[0.03]`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${priorityConfig[selectedTask.priority].dot}`} />
                  {priorityConfig[selectedTask.priority].label} Priority
                </span>
                <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${selectedTask.completed ? "bg-emerald-900/50 text-emerald-400" : "bg-slate-800 text-slate-400"}`}>
                  {selectedTask.completed ? "✓ Completed" : "Pending"}
                </span>
              </div>
              <button onClick={() => setSelectedTask(null)} className="text-slate-600 hover:text-white transition-colors ml-3 text-lg leading-none">✕</button>
            </div>

            <h2 className={`text-base font-semibold mb-2 ${selectedTask.completed ? "line-through text-slate-400" : "text-white"}`}>
              {selectedTask.title}
            </h2>

            {selectedTask.description
              ? <p className="text-slate-400 text-sm leading-relaxed mb-5">{selectedTask.description}</p>
              : <p className="text-slate-600 text-sm italic mb-5">No description provided.</p>
            }

            {/* Meta fields — directly from schema */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Task ID",    value: `#${selectedTask._id.slice(-6)}`,                              mono: true  },
                { label: "Completed",  value: selectedTask.completed ? "Yes" : "No"                                      },
                { label: "Due Date",   value: selectedTask.dueDate ? formatDate(selectedTask.dueDate) : "—"               },
                { label: "Priority",   value: priorityConfig[selectedTask.priority].label                                 },
                { label: "Created At", value: formatDate(selectedTask.createdAt)                                          },
                { label: "Updated At", value: formatDate(selectedTask.updatedAt)                                          },
              ].map((item) => (
                <div key={item.label} className="bg-white/[0.03] border border-white/[0.04] rounded-xl p-3">
                  <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                  <p className={`text-white text-sm font-medium ${item.mono ? "font-mono" : ""}`}>{item.value}</p>
                </div>
              ))}
            </div>

            {isOverdue(selectedTask.dueDate, selectedTask.completed) && (
              <div className="mt-4 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3 text-rose-400 text-xs">
                ⚠️ This task is past its due date.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}