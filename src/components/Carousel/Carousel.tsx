import "./Carrousel.css";
import { useState } from "react";
import { projects } from "../../data/projects";
import Modal from "../ProjectModal/ProjectModal";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => setCurrentIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <>
      <div className="carousel">
        <div className="carousel-content">
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].catchline}</p>
        </div>
        {/* Bouton demi-cercle */}
        <button
          className="carousel-action-button"
          onClick={() => setIsModalOpen(true)}
        >
          Analyser
        </button>
      </div>

      {/* Indicateur : affiche l'index actuel */}
      <div className="carousel-indicator">
        {currentIndex + 1} / {projects.length}
      </div>
      <div className="carousel-button">
        <button onClick={prev}> ← </button>
        <button onClick={next}> → </button>
      </div>

      {isModalOpen && (
        <Modal
          project={projects[currentIndex]}
          onClose={() => setIsModalOpen(false)}
          onNext={next}
          onPrev={prev}
          currentIndex={currentIndex}
          totalProjects={projects.length}
        />
      )}
    </>
  );
}
