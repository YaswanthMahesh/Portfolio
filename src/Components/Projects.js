import Project from "./Project";
import { projectsData } from "../utils/projectsData";


const Projects = () => {
    return (

        <div id="projects" className="flex flex-col  items-center justify-center pt-16 p-2 md:mx-10 md:pb-px-5">
            <div className="text-center mb-10">
                <h1 className="font-bold text-4xl">Projects</h1>
                <div className=" m-auto text-xl break-words opacity-80 text-center">Here are some of my personal projects</div>
            </div>

            {projectsData.map((project, index) => 
                <Project
                    key = {index}
                    name = {project[1]}
                    description = {project[2]}
                    note = {project[3]}
                    displayDemo = {project[4]}
                    demo = {project[5]}
                    code = {project[6]}
                />
            )}

        </div>

        
    )
}

export default Projects;