import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    // { path: "/blog", label: "Resources" },
    // { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
    { path: "/subscription", label: "Pricing" },
  ];

  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={
                        location.pathname === item.path ? "active" : ""
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
        <img src="/pencil-logo.gif" alt="MPencil Logo" className="h-8 w-8 mr-2 inline-block align-middle" />
        <span className="align-middle">MPencil</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? "active font-semibold"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Right side - Actions */}
        <div className="navbar-end gap-8 hidden lg:flex">
          <div className="flex items-center gap-2">
            <Link
              to="/subscription"
              className="btn btn-primary btn-sm sm:btn-md"
            >
              Book a Demo
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
