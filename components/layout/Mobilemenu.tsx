"use client";
import React, { useState } from "react";

interface MenuItem {
  title: string;
  submenu: string[];
}

interface MobileMenuProps {
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  {
    title: "About",
    submenu: ["History", "Mission & Vision", "Leadership", "Campus"],
  },
  {
    title: "Academics",
    submenu: ["Programs", "Departments", "Calendar", "Library"],
  },
  {
    title: "Admissions",
    submenu: ["Apply Now", "Requirements", "Tuition", "Financial Aid"],
  },
  {
    title: "Student Life",
    submenu: ["Activities", "Athletics", "Clubs", "Events"],
  },
  {
    title: "Contact",
    submenu: ["Directory", "Location", "Support"],
  },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems = defaultMenuItems,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Improved hamburger menu component
  const Hamburger: React.FC<{ isOpen: boolean; onClick: () => void }> = ({
    isOpen,
    onClick,
  }) => (
    <button
      onClick={onClick}
      className="fixed top-6 right-4 z-50 w-10 h-10 focus:outline-none bg-white rounded-lg shadow-md flex items-center justify-center"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="w-6 flex flex-col items-center justify-center">
        <span
          className={`bg-gray-800 rounded-full h-0.5 w-6 transform transition-all duration-300 ease-in-out 
            ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
        />
        <span
          className={`bg-gray-800 rounded-full h-0.5 w-6 my-1 transform transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0 translate-x-full" : ""}`}
        />
        <span
          className={`bg-gray-800 rounded-full h-0.5 w-6 transform transition-all duration-300 ease-in-out
            ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </div>
    </button>
  );

  return (
    <div className="relative">
      {/* Improved Hamburger Button */}
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {/* Overlay Background */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <nav className="h-full overflow-y-auto" role="navigation">
          <div className="pt-16 px-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === item.title ? null : item.title
                      )
                    }
                    className="w-full py-3 flex justify-between items-center text-gray-800 hover:text-blue-600 transition-colors duration-200"
                    aria-expanded={activeSubmenu === item.title}
                  >
                    <span className="font-medium">{item.title}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 
                        ${activeSubmenu === item.title ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Submenu with improved animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        activeSubmenu === item.title
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                  >
                    <ul className="pl-4 py-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href="#"
                            className="block py-2 px-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            onClick={(e) => e.preventDefault()}
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
