import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className='flex flex-col h-full'>
      <SearchInput />
      <div className='divider'></div>
      <Conversations toggleSidebar={toggleSidebar} /> {/* Pass the toggle function */}
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
