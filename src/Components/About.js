import SkillSection from "./SkillSection";

const About = () => {
    const data = {
        title: "About Me",
        description:
          "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
      };
      return (
        <div id="about" className="pt-24 p-2 md:mx-10 md:pb-px-5">
          {/* <SectionTitleLayout title={data.title} description={data.description} /> */}
          <div className="text-center mb-10">
                <h1 className="font-bold text-4xl">ABOUT ME</h1>
                <div className="w-[60%] m-auto text-xl break-words opacity-80 text-center">"Here, you'll find information about my skills, what I've accomplished, and my work in technology and programming."</div>
            </div>
    
          <div className="flex flex-wrap gap-20 my-6 mx-2 p-2">
            <div className="lg:w-[45%]">
              <h3 className="text-2xl font-semibold mb-5">Get to know me!</h3>
              <div>
                <p className="mb-2">
                  I am on a mission to excel as a full-stack developer, leveraging
                  my extensive experience to master multiple technologies and build
                  impactful tech products. Eager to explore new technologies, I'm
                  currently pursuing higher studies in Computer Science to deepen my
                  knowledge and maximize my impact.
                </p>
                <p className="mb-2">
                  Experienced Web Developer with a strong track record. Led the
                  migration of a project at Gupta Permold , achieving a 30%
                  reduction in page load times. At PHENOM PEOPLE, revolutionized
                  schema versioning and crafted high-performance widgets with React.
                  Contributed significantly to automation and bug resolution at OPEN
                  TEXT TECHNOLOGIES. Adept at creating seamless and efficient web
                  solutions.
                </p>
                <p className="mb-2">
                  I'm open to Job opportunities where I can contribute, learn and
                  grow. If you have a good opportunity that matches my skills and
                  experience then don't hesitate to contact me.
                </p>
              </div>
            </div>
            <div className="lg:w-[45%]">
              <h3 className="text-2xl font-bold mb-5">My Skills</h3>
              <div>
                <SkillSection />
              </div>
            </div>
          </div>
        </div>
      );
    }


const About1 = () => {
    return (
        <div id="about" className="flex justify-center pt-16 p-2 md:mx-10 md:pb-px-5">
            About
        </div>
    )
}
export default About