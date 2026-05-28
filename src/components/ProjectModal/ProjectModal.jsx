import "./ProjectModal.css";

export default function Modal({
  project,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalProjects,
}) {
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
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
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

        {(project.technologies || project.techs) && (
          <div className="modal-techs">
            {(project.technologies || project.techs).map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        {(project.codeSnippet || project.code) && (
          <div className="modal-code">
            <code>{project.codeSnippet || project.code}</code>
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
