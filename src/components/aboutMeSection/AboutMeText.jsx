import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Pre-final year Computer Science student with a strong foundation in Data Structures and Algorithms (DSA)
        and analytical thinking. Skilled in competitive programming with expertise in C++, JavaScript, and algorithm
        optimization. Experienced in full-stack web development using the MERN stack (MongoDB, Express.js,React.js,
        Node.js). Proficient in developing and integrating RESTful APIs and managing back-end services.
        Knowledge of Agile methodologies and software development life cycle (SDLC).
        
        Dedicated to leveraging strong coding skills to drive digital transformation and contribute to company’s
        mission of delivering innovative and impactful solutions.
      </p>
      <div className="flex gap-4 mt-10">
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>
        <button
          className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/images/resume.pdf"; // Path to your resume file
            link.download = "resume.pdf"; // Name of the downloaded file
            link.click();
          }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;