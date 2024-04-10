import { experiences } from "../utils/constants";
import Experience from "./Experience";


const Experiences = () => {
    return (
        <div id="experience" className="pt-24 p-2 md:mx-10 md:pb-px-5">
            <div className="text-center mb-10">
                <h1 className="font-bold text-4xl">Work Experience</h1>
                <div className="w-[60%] m-auto text-xl break-words opacity-80 text-center">Explore my experiences and accomplishments in technology and programming, tracing my journey from beginner to skilled professional.</div>
            </div>


            <div>
                {experiences.map((experience, index) => 
                    <Experience 
                        key={index}
                        logo= {experience[0]}
                        workTasks={experience[3]}
                        companyDetails={experience[1]}
                        period={experience[2]}
                    />
                )}
                
            </div>        
        </div>
    )
}

export default Experiences;