import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo2.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-28 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-14 w-20 mr-2" src={logo} alt="Logo" />
                        <div className="span text-xl tracking-tight">VirtualR</div>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.href}`} className="hover:bg-gradient-to-r from-pink-500 to-pink-900 hover:text-transparent bg-clip-text transition-all duration-300 ease-in-out">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#signin" className="py-2 px-3 border rounded-md transition-transform duration-300 ease-in-out hover:bg-neutral-700 hover:scale-105 active:scale-95">
                            Sign In
                        </a>
                        <a href="#signup" className="bg-gradient-to-r from-pink-700 to-blue-800 py-2 px-3 rounded-md transition-transform duration-300 ease-in-out hover:from-pink-800 hover:to-blue-900 hover:scale-105 active:scale-95">
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={`#${item.href}`} className="hover:bg-gradient-to-r from-pink-500 to-pink-900 hover:text-transparent bg-clip-text transition-all duration-300 ease-in-out">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#signin" className="py-2 px-3 border rounded-md transition-transform duration-300 ease-in-out hover:bg-neutral-700 hover:scale-105 active:scale-95">
                                Sign In
                            </a>
                            <a href="#signup" className="bg-gradient-to-r from-pink-500 to-blue-800 py-2 px-3 rounded-md transition-transform duration-300 ease-in-out hover:from-pink-800 hover:to-blue-900 hover:scale-105 active:scale-95">
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
