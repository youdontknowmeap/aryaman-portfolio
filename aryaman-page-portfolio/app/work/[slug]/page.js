import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projectsData";
import ProjectClient from "@/components/casestudy/ProjectClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} allProjects={projects} />;
}
