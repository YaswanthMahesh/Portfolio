

const Project = ({image, name, description, note, displayDemo, demo, code}) => {
    return (
        <div className="flex flex-wrap my-6 mx-2 p-2 items-center">
            <div className="lg:w-[60%]">
                <div className="flex align-center bg-white">

                </div>

            </div>

            <div className="lg:w-[40%]">
                <h3 className="text-2xl font-bold">{name}</h3>
                <div className="mb-4"></div>
                <div>
                    <p className="mb-2">{description}</p>
                    {
                        note !== "" && (
                            <div>
                                <strong>Note: </strong>
                                <p>{note}</p>
                            </div>
                            
                        )
                    }
                </div>
                {displayDemo && (
                    <div className="mt-3">
                        
                        <a class="bg-gray-700 text-white uppercase py-2 px-6 mx-5 rounded-md cursor-pointer" rel="noopener noreferrer" target="_blank" href="https://enchanting-gaufre-a45bc2.netlify.app/">Demo</a>
                        <button className="bg-gray-700 text-white uppercase py-2 px-6 mx-5 rounded-md cursor-pointer">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/YaswanthMahesh/Chefs-Kitchen">Code</a>
                        </button>

                    </div>
                )}
                
            </div>
        </div>
        
    )
}


export default Project