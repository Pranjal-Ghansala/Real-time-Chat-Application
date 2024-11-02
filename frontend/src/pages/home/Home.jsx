import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar className='  hidden  sm:block' />

			<MessageContainer className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 '/>
		</div>
	);
};
export default Home;