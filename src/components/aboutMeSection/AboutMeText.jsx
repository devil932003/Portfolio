import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Pre-final year Computer Science student with a strong foundation in
       Data Structures and Algorithms (DSA) and analytical thinking. 
       Skilled in competitive programming with expertise in C++, 
       JavaScript, and algorithm optimization. Experienced in front-end 
       web development using React.js and back-end development with Node.js
      and Express.js. Proficient in developing and integrating RESTful APIs, 
      managing relational databases, and working with MongoDB for NoSQL solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
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
    </div>
  );
};

export default AboutMeText;
