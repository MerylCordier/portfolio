import "./ProjectModal.css";
import type { Project } from "../../types/Project";
import LinkIcon from "./LinkIcon";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalProjects: number;
  onAnalyze?: () => void;
}

export default function Modal({
  project,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalProjects,
}: ProjectModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title-container">
          <div className="modal-title-wrapper">
            <h2 className="modal-title">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-title-link"
                >
                  {project.title}
                  <LinkIcon />
                </a>
              ) : (
                project.title
              )}
            </h2>
            <span className="modal-counter">
              {currentIndex + 1} / {totalProjects}
            </span>
          </div>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <p className="modal-description">{project.description}</p>

        {project.techs && project.techs.length > 0 && (
          <div className="modal-techs">
            {project.techs.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.code && (
          <div className="modal-code">
            <code>{project.code}</code>
          </div>
        )}

        <div className="modal-navigation">
          <button className="modal-nav-button" onClick={onPrev}>
            ← Précédent
          </button>
          <button className="modal-nav-button" onClick={onNext}>
            Suivant →
          </button>
        </div>
      </div>
    </div>
  );
}
