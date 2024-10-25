import { useEffect, useState } from "react";
import axios from "axios";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);

  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    (async function getConversations() {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/users", { cache: "no-cache" });

        // console.log(data);
        setConversation(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();

    // getConversations();
  }, []);
  // console.log(conversation);

  return { loading, conversation };
};

export default useGetConversations;