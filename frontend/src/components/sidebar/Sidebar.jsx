import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
 

const Sidebar = () => {
	return (
		
		<div className='hidden sm:border-r sm:border-slate-500 sm:p-4 sm:flex sm:flex-col'>
			 
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />

		</div>
	);
};
export default Sidebar;

