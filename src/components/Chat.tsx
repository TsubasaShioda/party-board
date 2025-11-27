
import React, { useState } from "react";

interface ChatProps {
  // 将来的にはメッセージの送信関数や受信メッセージのリストを渡す
}

const Chat: React.FC<ChatProps> = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]); // ダミーのメッセージリスト

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, `あなた: ${message}`]); // ダミーでメッセージを追加
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", borderTop: "1px solid #ccc", marginTop: "20px" }}>
      <h2>チャット</h2>
      <div style={{ height: "100px", overflowY: "scroll", border: "1px solid #eee", padding: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力"
        style={{ width: "calc(100% - 70px)", marginRight: "10px" }}
      />
      <button onClick={handleSendMessage}>送信</button>
    </div>
  );
};

export default Chat;

