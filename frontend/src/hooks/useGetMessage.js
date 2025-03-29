import { useEffect, useState } from "react";
import useUserConversation from "../store/userConversation";
import axios from "axios";
import { toast } from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useUserConversation();

  useEffect(() => {
    async function getMessages() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );
        // console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (selectedConversation._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessage;
