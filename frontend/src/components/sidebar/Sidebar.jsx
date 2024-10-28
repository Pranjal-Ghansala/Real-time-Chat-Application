import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

	const toggleSidebar = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={`border-r border-slate-500 p-4 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}>
			{/* Toggle Button */}
			<button className="mb-2" onClick={toggleSidebar}>
				{isOpen ? "Hide" : "Show"} Sidebar
			</button>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
