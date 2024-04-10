import Skill from "./Skill";

const SkillSection = () => {

    const SkillDescribtions = ["Programming Languages", "Web Technologies", "Libraries Frameworks", "Databases", "Version Control", "Others" ];

    const RelavantSkills = [["C", "Java", "Python", "JavaScript", "C++"], ["HTML", "CSS"], 
                            ["React.js", "Redux", "Jest", "Node.js", "Spring Boot", "Tailwind", "Bootstrap"],
                            ["PostgreSQL", "SQL", "MongoDB"],
                            ["Git", "Bitbucket"],
                            ["Jira", "Jenkins"]
                           ]

    return (

        <div className="my-2">
            {SkillDescribtions.map((s,index) => (
                <Skill 
                    SkillDescribtion = {s}
                    RelavantSkills = {RelavantSkills[index]}
                /> 
            ))}
        </div>

    )
}

export default SkillSection;