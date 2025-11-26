
import React, { useState } from "react";

const RoomLobby: React.FC = () => {
  const [roomName, setRoomName] = useState("");

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      alert(`部屋 "${roomName}" を作成しました！ (実際にはサーバーと連携します)`);
      setRoomName("");
    } else {
      alert("部屋名を入力してください。");
    }
  };

  return (
    <div>
      <h1>ルームロビー</h1>
      <p>ここで部屋を作成したり、既存の部屋に参加できます。</p>

      <h2>新しい部屋を作成</h2>
      <input
        type="text"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="部屋名を入力"
      />
      <button onClick={handleCreateRoom}>部屋を作成</button>
    </div>
  );
};

export default RoomLobby;

