import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MessageContainer from "../messages/MessageContainer";
import { IoMenu } from "react-icons/io5"; // Menu icon for mobile

const  Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true); // Manage sidebar visibility
  const [isMobileView, setIsMobileView] = useState(false); // Detect mobile view

  // Toggle the sidebar visibility
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  // Automatically detect screen size (optional: you could replace with CSS breakpoints)
  const handleResize = () => {
    if (window.innerWidth <= 768) setIsMobileView(true);
    else setIsMobileView(false);
  };

  // Use effect to add event listener for window resize
  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='relative flex h-screen bg-gray-100'>
      {/* Hamburger Menu Button (Visible on Mobile) */}
      {isMobileView && (
        <button
          onClick={toggleSidebar}
          className='absolute top-4 left-4 z-50 bg-sky-500 text-white p-2 rounded-full shadow-lg'
        >
          <IoMenu className='w-6 h-6' />
        </button>
      )}

      {/* Sidebar: Toggle visibility based on `showSidebar` */}
      {showSidebar && (
        <div
          className={`fixed sm:relative z-40 w-64 bg-slate-800 text-white transition-transform duration-300
            ${isMobileView ? (showSidebar ? "translate-x-0" : "-translate-x-full") : ""}
          `}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      )}

      {/* MessageContainer: Only show if sidebar is hidden on mobile */}
      {!showSidebar && isMobileView ? null : <MessageContainer />}
    </div>
  );
};

export default  Layout;
