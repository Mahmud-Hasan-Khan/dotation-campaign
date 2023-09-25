import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between gap-3 p-2">
            <div>
                <img src="https://i.ibb.co/MpdBx7j/Logo.png" alt="" />
            </div>
            <ul className="text-lg font-bold flex gap-10">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dotation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;