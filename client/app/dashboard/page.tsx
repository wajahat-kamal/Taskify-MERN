"use client"
import { useState } from "react";

type Priority = "high" | "medium" | "low";
type Status = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  category: string;
  dueDate: string;
  assignee: string;
}

const mockTasks: Task[] = [
  { id: 1, title: "Design new landing page", description: "Create wireframes and mockups for the new marketing landing page.", priority: "high", status: "in-progress", category: "Design", dueDate: "2026-03-05", assignee: "Sarah K." },
  { id: 2, title: "Fix auth bug on login", description: "Users are getting logged out after 5 minutes unexpectedly.", priority: "high", status: "todo", category: "Engineering", dueDate: "2026-02-28", assignee: "You" },
  { id: 3, title: "Write Q1 report", description: "Summarize performance metrics and KPIs for Q1.", priority: "medium", status: "todo", category: "Management", dueDate: "2026-03-10", assignee: "You" },
  { id: 4, title: "Update API documentation", description: "Reflect recent endpoint changes in the public docs.", priority: "low", status: "done", category: "Engineering", dueDate: "2026-02-20", assignee: "Tom R." },
  { id: 5, title: "User interviews — March batch", description: "Schedule and conduct 6 user interviews for UX research.", priority: "medium", status: "in-progress", category: "Research", dueDate: "2026-03-15", assignee: "You" },
  { id: 6, title: "Set up CI/CD pipeline", description: "Configure GitHub Actions for automated deployment.", priority: "high", status: "done", category: "Engineering", dueDate: "2026-02-18", assignee: "Tom R." },
  { id: 7, title: "Onboard new designer", description: "Prepare onboarding docs and set up tools access.", priority: "low", status: "todo", category: "Management", dueDate: "2026-03-01", assignee: "You" },
  { id: 8, title: "Migrate to PostgreSQL", description: "Move from SQLite to Postgres for production readiness.", priority: "medium", status: "in-progress", category: "Engineering", dueDate: "2026-03-20", assignee: "Sarah K." },
];

const priorityConfig: Record<Priority, { label: string; color: string; dot: string }> = {
  high: { label: "High", color: "text-rose-400", dot: "bg-rose-400" },
  medium: { label: "Medium", color: "text-amber-400", dot: "bg-amber-400" },
  low: { label: "Low", color: "text-emerald-400", dot: "bg-emerald-400" },
};

const statusConfig: Record<Status, { label: string; bg: string; text: string }> = {
  "todo": { label: "To Do", bg: "bg-slate-700", text: "text-slate-300" },
  "in-progress": { label: "In Progress", bg: "bg-indigo-900", text: "text-indigo-300" },
  "done": { label: "Done", bg: "bg-emerald-900", text: "text-emerald-300" },
};

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");
  const [filterPriority, setFilterPriority] = useState<Priority | "all">("all");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const user = JSON.parse(localStorage.getItem("user") || '{"name":"Alex","email":"alex@example.com"}');

  const filtered = mockTasks.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || t.status === filterStatus;
    const matchPriority = filterPriority === "all" || t.priority === filterPriority;
    return matchSearch && matchStatus && matchPriority;
  });

  const counts = {
    all: mockTasks.length,
    todo: mockTasks.filter((t) => t.status === "todo").length,
    "in-progress": mockTasks.filter((t) => t.status === "in-progress").length,
    done: mockTasks.filter((t) => t.status === "done").length,
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }} className="min-h-screen bg-[#0e0f14] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0e0f14; }
        ::-webkit-scrollbar-thumb { background: #2a2d3a; border-radius: 3px; }
        .task-card { transition: all 0.18s ease; }
        .task-card:hover { transform: translateY(-2px); background: #1c1f2e !important; }
        .fade-in { animation: fadeIn 0.4s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .pill { transition: all 0.15s ease; cursor: pointer; }
        .pill:hover { opacity: 0.85; }
        .modal-overlay { animation: overlayIn 0.2s ease; }
        @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-box { animation: modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1); }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.93) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      `}</style>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-[#13141b] flex flex-col items-center py-6 gap-6 border-r border-white/5 z-10">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm font-bold">T</div>
        {["📋", "📊", "👥", "⚙️"].map((icon, i) => (
          <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:bg-white/10 ${i === 0 ? "bg-white/10" : ""}`}>{icon}</button>
        ))}
        <div className="mt-auto w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-semibold">
          {user.name?.[0]?.toUpperCase() || "U"}
        </div>
      </div>

      {/* Main */}
      <div className="ml-16 p-8 fade-in">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-slate-400 text-sm mb-1">Good morning,</p>
            <h1 className="text-2xl font-semibold tracking-tight">{user.name} 👋</h1>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-xs">{user.email}</p>
            <p className="text-slate-500 text-xs mt-0.5">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Tasks", value: counts.all, accent: "#6366f1", icon: "📋" },
            { label: "To Do", value: counts.todo, accent: "#94a3b8", icon: "⏳" },
            { label: "In Progress", value: counts["in-progress"], accent: "#818cf8", icon: "🔄" },
            { label: "Completed", value: counts.done, accent: "#34d399", icon: "✅" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#13141b] rounded-2xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">{stat.icon}</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
              <p className="text-3xl font-bold" style={{ color: stat.accent }}>{stat.value}</p>
              <div className="mt-2 h-1 rounded-full bg-white/5">
                <div className="h-1 rounded-full" style={{ width: `${(stat.value / counts.all) * 100}%`, backgroundColor: stat.accent }} />
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <div className="flex-1 min-w-48 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#13141b] border border-white/5 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "todo", "in-progress", "done"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`pill px-3 py-2 rounded-xl text-xs font-medium border ${filterStatus === s ? "bg-indigo-600 border-indigo-500 text-white" : "bg-[#13141b] border-white/5 text-slate-400"}`}
              >
                {s === "all" ? "All" : statusConfig[s as Status]?.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {(["all", "high", "medium", "low"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setFilterPriority(p)}
                className={`pill px-3 py-2 rounded-xl text-xs font-medium border ${filterPriority === p ? "bg-indigo-600 border-indigo-500 text-white" : "bg-[#13141b] border-white/5 text-slate-400"}`}
              >
                {p === "all" ? "Any Priority" : priorityConfig[p as Priority].label}
              </button>
            ))}
          </div>
        </div>

        {/* Task count */}
        <p className="text-slate-500 text-xs mb-4">{filtered.length} task{filtered.length !== 1 ? "s" : ""} found</p>

        {/* Task Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-4xl mb-3">🗂️</p>
            <p className="text-sm">No tasks match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((task, i) => {
              const p = priorityConfig[task.priority];
              const s = statusConfig[task.status];
              const isOverdue = new Date(task.dueDate) < new Date() && task.status !== "done";
              return (
                <div
                  key={task.id}
                  className="task-card bg-[#13141b] border border-white/5 rounded-2xl p-5 cursor-pointer"
                  style={{ animationDelay: `${i * 0.04}s` }}
                  onClick={() => setSelectedTask(task)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`${s.bg} ${s.text} text-xs px-2.5 py-1 rounded-lg font-medium`}>{s.label}</span>
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${p.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                      {p.label}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">{task.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{task.description}</p>

                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-white/5 text-slate-400 px-2 py-1 rounded-lg">{task.category}</span>
                    <span className={isOverdue ? "text-rose-400 font-medium" : "text-slate-500"}>
                      {isOverdue ? "⚠️ " : "📅 "}
                      {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold">
                      {task.assignee[0]}
                    </div>
                    <span className="text-slate-500 text-xs">{task.assignee}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedTask && (
        <div
          className="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTask(null)}
        >
          <div
            className="modal-box bg-[#13141b] border border-white/10 rounded-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-2">
                <span className={`${statusConfig[selectedTask.status].bg} ${statusConfig[selectedTask.status].text} text-xs px-2.5 py-1 rounded-lg font-medium`}>
                  {statusConfig[selectedTask.status].label}
                </span>
                <span className={`flex items-center gap-1.5 text-xs font-medium ${priorityConfig[selectedTask.priority].color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${priorityConfig[selectedTask.priority].dot}`} />
                  {priorityConfig[selectedTask.priority].label}
                </span>
              </div>
              <button onClick={() => setSelectedTask(null)} className="text-slate-500 hover:text-white transition-colors text-lg">✕</button>
            </div>

            <h2 className="text-lg font-semibold mb-2">{selectedTask.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{selectedTask.description}</p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Category", value: selectedTask.category },
                { label: "Assignee", value: selectedTask.assignee },
                { label: "Due Date", value: new Date(selectedTask.dueDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) },
                { label: "Task ID", value: `#${String(selectedTask.id).padStart(4, "0")}` },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-3">
                  <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}