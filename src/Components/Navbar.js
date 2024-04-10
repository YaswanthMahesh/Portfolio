import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <header className=" bg-slate-200 fixed top-0 left-0 w-full z-50">
            <div className = "flex justify-between bg-blue-200 shadow-lg">
                <div className="items-center p-8 m-4">
                    YASWANTH 
                </div>
                <div class = "items-center hidden md:flex">
                    <ul className="flex p-4 m-4">
                        <li className="p-4 cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={5} >HOME</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="about" spy={true} smooth={true} offset={-25}>ABOUT</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="experience" spy={true} smooth={true} offset={-25}>EXPERIENCE</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="projects" spy={true} smooth={true} offset={-55}>PROJECTS</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="contact" spy={true} smooth={true} offset={50}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div class="items-center  p-8 m-4 cursor-pointer z-10  md:hidden">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </div>
            </div>
            <div className="flex justify-center items-center top-0 left-0 absolute bg-slate-700 h-screen w-full">
                <ul className="flex flex-col text-white p-4 m-4">
                        <li className="p-4 cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={5} >HOME</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="about" spy={true} smooth={true} offset={-25}>ABOUT</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="experience" spy={true} smooth={true} offset={-25}>EXPERIENCE</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="projects" spy={true} smooth={true} offset={-55}>PROJECTS</Link>
                        </li>
                        <li className="p-4 cursor-pointer">
                            <Link to="contact" spy={true} smooth={true} offset={50}>CONTACT</Link>
                        </li>
                 </ul>
            </div>
        </header>
        
    )
}

export default Navbar;