export const projects = [
  {
    slug: "drunkin",
    title: "DRUNKIN'",
    subtitle: "Social alcohol tracking — Strava for nights out",
    year: "2024",
    tags: ["App Design", "UX", "Motion"],
    role: "Lead Designer",
    duration: "6 weeks",
    coverGradient: "linear-gradient(135deg, #1a001a 0%, #3d003d 50%, #1a001a 100%)",
    accentColor: "#FF00FF",
    coverImage: "/images/drunkin%20screen%20with%20bg.png",
    heroImage: "/images/icon.png",
    cardAspect: "landscape"
  },
  {
    slug: "clarity",
    title: "CLARITY",
    subtitle: "Turning financial anxiety into financial confidence",
    year: "2024",
    tags: ["App Design", "UX Strategy", "Research"],
    role: "Lead Designer",
    duration: "8 weeks",
    coverGradient: "linear-gradient(135deg, #070d1a 0%, #0f1f3d 50%, #070d1a 100%)",
    accentColor: "#4B9FE1",
    coverImage: "/images/clarity-cover.png",
    cardAspect: "portrait"
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
