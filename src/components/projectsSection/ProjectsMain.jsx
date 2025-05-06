import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "DEVILAI",
    year: "AI Career Coach | Next.js, Prisma, NeonDB, Inngest, Gemini AI",
    align: "right",
    image: "/images/banner.jpeg",
    link: "https://devil-ai-career-coach.vercel.app/",
  },
  {
    name: "Pokedex",
    year: "ReactJS,RestAPI",
    align: "left",
    image: "/images/Pokedex.png",
    link: "https://pokedex-mauve-two.vercel.app/",
  },
  {
    name: "E-Commerce(Myntra)",
    year: "ReactJS,RestAPI",
    align: "right",
    image: "/images/myntra.jpg",
    link: "https://myntra-frontend-kappa.vercel.app/",
  },
  {
    name: "Cab-Booking Web App(Uber)",
    year: "Full Stack (Mobile Responsive)",
    align: "left",
    image: "/images/uber.png",
    link: "https://mega-project-q48j.vercel.app/",
  },
  {
    name: "Portfolio Website",
    year: "React,TailwindCSS,Framer Motion",
    align: "right",
    image: "/images/portfolio.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
