
const Experience = ({logo, companyDetails, period, workTasks}) => {
    return (
        <div className="flex flex-col justify-center">

            <div className="flex items-start justify-start p-6 mb-8 w-full mx-auto border shadow-md rounded-md lg:w-[80%]">
                <div className="flex-shrink-0 h-full">
                    <img className="w-16 h-16 object-contain" src={logo} alt="NCR" />
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold">{companyDetails}</h3>
                    <p className="text-gray-600 mb-2">{period}</p>
                    <ul className="list-disc pl-6">
                        {workTasks.map((task) => 
                            <li className="mb-2 text-gray-600 leading-relaxed">{task}</li>
                        )}
                    </ul>
                </div>  
            </div>

        </div>
    )
}

export default Experience;