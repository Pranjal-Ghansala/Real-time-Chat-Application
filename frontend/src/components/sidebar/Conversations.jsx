import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = ({ toggleSidebar }) => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <div key={conversation._id} onClick={toggleSidebar}>
          <Conversation
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        </div>
      ))}

      {loading && <span className='loading loading-spinner mx-auto'></span>}
    </div>
  );
};

export default Conversations;
