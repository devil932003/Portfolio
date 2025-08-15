import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       I am a final year Computer Science student with a strong foundation in Data Structures and Algorithms and analytical
thinking. I have worked on several real-world projects using technologies like React.js, Node.js, Express.js, and
databases like MongoDB and PostgreSQL. My recent work includes building AI-powered career coaching platform,
where I used Gemini AI, REST APIs, and tools like inngest and prisma. Alongside development, I have
solved over 200 data structure and algorithm problems on platforms like LeetCode, which has helped me sharpen my
coding and logical thinking I'm currently looking for opportunities internships or entry-level roles where I can learn
from real-world challenges, contribute to a team, and grow as a developer.  
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
            link.href = "/images/Devansh Mishra Resume.pdf"; // Path to your resume file
            link.download = "Devansh Mishra Resume.pdf"; // Name of the downloaded file
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