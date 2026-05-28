import type { Project } from "../../types/Project";

interface ProjectProps {
  project: Project;
  onAnalyze: () => void;
}

export default function Project({ project, onAnalyze }: ProjectProps) {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.catchline}</p>
      <button onClick={onAnalyze}>Analyser</button>
    </div>
  );
}
