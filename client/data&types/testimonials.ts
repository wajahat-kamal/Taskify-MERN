export const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Product Manager @ Notion",
        avatar: "SM",
        color: "#4f7eff",
        stars: 5,
        text: "Taskify completely replaced our chaotic Notion setup. The AI prioritization alone saved us 4+ hours of planning every single week.",
    },
    {
        name: "James Okafor",
        role: "CTO @ Streamline",
        avatar: "JO",
        color: "#7c3aed",
        stars: 5,
        text: "I was skeptical about another task tool. But Taskify's AI actually understands context — it feels like having a Chief of Staff.",
    },
    {
        name: "Priya Sharma",
        role: "Engineering Lead @ Vercel",
        avatar: "PS",
        color: "#06b6d4",
        stars: 5,
        text: "Our sprint delivery rate went from 60% to 94% in two months. The team sync features are genuinely game-changing.",
    },
    {
        name: "Lucas Brennan",
        role: "Founder @ Launchpad",
        avatar: "LB",
        color: "#10b981",
        stars: 5,
        text: "As a solo founder wearing every hat, Taskify keeps me sane. It knows what's urgent before I even open the app.",
    },
    {
        name: "Aiko Tanaka",
        role: "Design Director @ Figma",
        avatar: "AT",
        color: "#f59e0b",
        stars: 5,
        text: "The UI is beautiful and the intelligence behind it is real. Taskify has become non-negotiable for our design team.",
    },
    {
        name: "Daniel Reeves",
        role: "COO @ ScaleHQ",
        avatar: "DR",
        color: "#ef4444",
        stars: 5,
        text: "We evaluated 12 tools before choosing Taskify. Nothing else came close to the depth of AI features at this price point.",
    },
];

export interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    color: string;
    stars: number;
    text: string;
};