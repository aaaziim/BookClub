import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {<NavLinks></NavLinks>}
                    </ul>
                </div>
                <NavLink to="/" className="text-3xl text-black font-bold hover:text-[#23BE0A] hover:border-2 hover:border-bg-[#23BE0A]  p-2 hover:rounded-xl">
                    BookClub
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  text-xl menu-horizontal px-1 text-black font-medium">
                    {<NavLinks></NavLinks>}
                </ul>
            </div>
            <div className="navbar-end">
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

            </div>
        </div>
    );
};

export default Header;