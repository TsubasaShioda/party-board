
import React, { useState } from "react";

// ダミーデータ。将来的にはサーバーから取得します。
const dummyRooms = [
  { id: "1", name: "まったりボードゲーム部屋" },
  { id: "2", name: "ガチ対戦部屋" },
  { id: "3", name: "初心者歓迎！" },
];

interface RoomLobbyProps {
  onJoinRoom: (roomId: string, isHost: boolean) => void;
}

const RoomLobby: React.FC<RoomLobbyProps> = ({ onJoinRoom }) => {
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState(dummyRooms);

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      const newRoomId = Date.now().toString();
      alert(`部屋 "${roomName}" を作成しました！`);
      setRooms([...rooms, { id: newRoomId, name: roomName.trim() }]);
      setRoomName("");
      onJoinRoom(newRoomId, true); // ホストとして部屋に参加
    } else {
      alert("部屋名を入力してください。");
    }
  };

  const handleJoinRoom = (roomId: string) => {
    onJoinRoom(roomId, false); // 参加者として部屋に参加
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

