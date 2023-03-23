import { useChatStore } from "@/store/chat.store";
import { useRef } from "react";

function Chat() {
  const [chats, appendChat] = useChatStore((state) => [
    state.chats,
    state.appendChat,
  ]);
  const ref = useRef<HTMLInputElement>(null);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      appendChat((e.target as HTMLInputElement).value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="content">
      <h2 className="m-3">Chatting App</h2>

      <input
        type="text"
        ref={ref}
        placeholder="type"
        onKeyDown={onKeyDown}
        className="mb-3"
      />

      <div className="d-flex justify-content-around flex-column">
        {chats.map((chat) => (
          <span className="mt-2" key={chat}>
            {chat}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Chat;
