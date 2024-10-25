import React, { useState } from "react";
import useUserConversation from "../../store/userConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useUserConversation();
  const { conversation } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search should be greater than 3 characters");
    }
    const conversations = conversation.find((c) => {
      console.log(c.emailId.toLowerCase(), search.toLowerCase());
      return c.emailId.toLowerCase() === search.toLowerCase();
    });
    if (conversations) {
      setSelectedConversation(conversations);
      setSearch("");
    } else {
      toast.error("Conversation not found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Enter emailId"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </label>
    </form>
  );
};

export default SearchInput;
