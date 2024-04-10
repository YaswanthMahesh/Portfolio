import ReactDOM from "react-dom/client";
import BodyComponent from "./Components/BodyComponent";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";

/**
 * Home
 *  - Name
 *  - Nav Items
 * Body
 *   - Home Page
 *     - Name and Describtion
 *     - Projects button
 *     - Contact button
 *     
 *     - Social platform fields
 * 
 *   - About
 *     - About Me and describtion
 *     - Some describtion about me
 *     - Skills ( Programming languages, Technologies, Frameworks etc)
 *  
 *   - Experience
 *     - Work Experience and some describtion
 *     - Job roles and their describtion
 * 
 *   - Projects
 *     - Projects and describtion
 *      - Project picture
 *      - Project describtion and links
 * 
 *   - Contact
 *     - Name
 *     - Email
 *     - Message
 * 
 * 
 * Footer
 *   - Name and describtion
 *   - Social Links
 */


const Applayout = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <BodyComponent />
            <Footer />
        </div>
        
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/experiences",
                element: <Experiences />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
