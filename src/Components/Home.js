import { Link } from "react-scroll";
import myImage from './DP.jpg';

const Home = () => {
    return (
        <div id="home"  className='text-black relative bg-gradient-to-br bg-neutral-200 bg-center bg-cover h-[100vh] max-h-[60rem] min-h-[30rem] ' >
                <div className=" absolute top-[15%] right-[5%] m-2 p-1">

                    {/* <img className="rounded-full w-full h-52" src="https://media.licdn.com/dms/image/D5635AQFaGaMpTjmUSA/profile-framedphoto-shrink_400_400/0/1704479193639?e=1713193200&v=beta&t=s2w-PD5nygo-IwXZW_GiwNMmGgCMvtd6P5sAqzg2Kx8" alt="image description" /> */}

                    <img className="rounded-full w-full h-52" src={myImage} alt="image description" />

                </div>
                <div className="absolute left-[10%] top-[40%] m-2 p-2 md:m-10 md:p-2">
                    <h1 className="text-4xl font-bold py-2">Hey, I'm Yaswanth Naga Mahesh</h1>
                    <p className="text-xl break-normal">Driven and Passionate Software Developer</p>
                    <div className="flex flex-wrap gap-4 py-2">
                    <Link to="projects" spy={true} smooth={true} offset={50}>
                            <div className="p-2 bg-gray-700 text-white rounded-lg cursor-pointer"> PROJECTS </div>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={50}>
                        <div className="p-2 bg-gray-700 text-white rounded-lg cursor-pointer"> CONTACT </div>
                    </Link>
                    </div>
                </div>
                
            

            <div className="absolute left-0 top-[65%]">
                <div className="">
                    <ul className="flex flex-col p-2">
                    
                        <li className="flex w-36 items-center justify-between p-2 ml-[-100px] bg-transparent hover:ml-[-10px] duration-150 focus:outline-none">
                            <a target="_blank" className="flex justify-between w-full align-center text-black px-2" href="https://www.linkedin.com/in/yaswanth-nandigam-54005517a/" rel="noreferrer">
                                LinkedIn 
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                            </a>
                        </li>
                        <li className="flex w-36 items-center justify-between p-2 ml-[-100px] bg-transparent hover:ml-[-10px] duration-150 focus:outline-none">
                            <a target="_blank" className="flex justify-between w-full align-center text-black px-2" href="https://github.com/YaswanthMahesh?tab=repositories" rel="noreferrer">
                                Github 
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                        </path>
                                    </svg>
                            </a>
                        </li>
                        <li className="flex w-36 items-center justify-between p-2 ml-[-100px] bg-transparent hover:ml-[-10px] duration-150 focus:outline-none">
                            <a target="_blank" className="flex justify-between w-full align-center text-black px-2" href="mailto:yaswanmthmahesh7@gmail.com" rel="noreferrer">
                                Email 
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
                            </a>
                        </li>
                        <li className="flex w-36 items-center justify-between p-2 ml-[-100px] bg-transparent hover:ml-[-10px] duration-150 focus:outline-none">
                            <a target="_blank" download="" className="flex justify-between w-full align-center text-black px-2" href="./resume.pdf" rel="noreferrer">
                                Resume 
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg>
                                </a>
                        </li>
                    </ul>
                </div>
            </div> 

            <Link to="about" spy={true} smooth={true} offset={-25}>
                <div className=" absolute border  border-gray-300 shadow-lg bottom-5 right-[45%] md:righjt-[45%] flex justify-center items-center px-4 py-1 gap-1 cursor-pointer">
                    <h1>More Info</h1>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className=" animate-bounce w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                </div>
            </Link>
    

    </div>
  )
}

export default Home;
    

