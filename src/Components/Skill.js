

const Skill = ({SkillDescribtion, RelavantSkills}) => {
    return (
        <div>
            <div className="text-lg font-semibold">
                <h1>{SkillDescribtion}</h1>
            </div>
             <div className="flex flex-wrap">
                {
                    RelavantSkills.map((s) => (
                        <div className="py-2 px-4 text-gray-600 m-2 bg-gray-200 rounded-md">{s}</div>
                    ))
                }

            </div>
        </div>
    )
    
}

export default Skill;