import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        < >
            <li >
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : '')}
                >Home
                </NavLink>
            </li>

            <li><NavLink to="/listedbooks" className={({ isActive }) => (isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : '')}>Listed Books </NavLink></li>
            <li> <NavLink to="/pagestoread" className={({ isActive }) => (isActive ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : '')}>Pages to Read </NavLink></li>
        </ >
    );
};

export default NavLinks;