import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Pureniceness",
    catchline:
      "Développement d’une application “from scratch” pour deux labels musicaux",
    description:
      "Développement d’une application “from scratch” pour deux labels musicaux",
    techs: ["React", "Node.js", "PostgreSQL"],
    code: `
const handleSubmit = async (): Promise<void> => {
  await fetch("/api/login");
};
    `,
    url: "https://www.pureniceness.net",
  },

  {
    id: 2,
    title: "CV interactif",
    catchline:
      "Combinaison ineractive entre le fond et la forme. Amusez vous à retourner les cartes",
    description:
      "Combinaison ineractive entre le fond et la forme. Amusez vous à retourner les cartes",
    techs: ["Javascript Vanilla"],
    code: `
const handleSubmit = async (): Promise<void> => {
  await fetch("/api/login");
};
    `,
    url: "https://merylcordier-cv.netlify.app/",
  },

  {
    id: 3,
    title: "Welygo",
    catchline:
      "Bénévolat pour une plateforme de covoiturage lié à l’évènementiel",
    description:
      "Bénévolat pour une plateforme de covoiturage lié à l’évènementiel",
    techs: ["React", "Python"],
    code: `
const handleSubmit = async (): Promise<void> => {
  await fetch("/api/login");
};
    `,
    url: "https://welygo.com",
  },
];
