
import React, { useState } from "react";

// ダミーデータ。将来的にはサーバーから取得します。
const dummyRooms = [
  { id: "1", name: "まったりボードゲーム部屋" },
  { id: "2", name: "ガチ対戦部屋" },
  { id: "3", name: "初心者歓迎！" },
];

const RoomLobby: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState(dummyRooms); // ダミーデータをstateで管理

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      alert(`部屋 "${roomName}" を作成しました！ (実際にはサーバーと連携します)`);
      // ダミーで部屋リストに追加
      setRooms([...rooms, { id: Date.now().toString(), name: roomName.trim() }]);
      setRoomName("");
    } else {
      alert("部屋名を入力してください。");
    }
  };

  const handleJoinRoom = (roomId: string) => {
    alert(`部屋ID: ${roomId} に参加します！ (実際には画面遷移します)`);
  };

  return (
    <div>
      <h1>ルームロビー</h1>
      <p>ここで部屋を作成したり、既存の部屋に参加できます。</p>

      <div>
        <h2>新しい部屋を作成</h2>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="部屋名を入力"
        />
        <button onClick={handleCreateRoom}>部屋を作成</button>
      </div>

      <hr />

      <div>
        <h2>既存の部屋に参加</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              {room.name}
              <button onClick={() => handleJoinRoom(room.id)}>参加</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomLobby;

