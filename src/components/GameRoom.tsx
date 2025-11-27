
import React, { useState } from "react";

// ダミーデータ
const dummyPlayers = [
  { id: "p1", name: "プレイヤーA" },
  { id: "p2", name: "プレイヤーB" },
];

const dummyGames = [
  { id: "word-basket", name: "ワードバスケット" },
  { id: "word-sniper", name: "ワードスナイパー" },
];

interface GameRoomProps {
  roomId: string;
  isHost: boolean; // ホストかどうかを判定
}

const GameRoom: React.FC<GameRoomProps> = ({ roomId, isHost }) => {
  const [selectedGame, setSelectedGame] = useState(dummyGames[0].id);

  const handleStartGame = () => {
    alert(`ゲーム "${dummyGames.find(g => g.id === selectedGame)?.name}" を開始します！ (実際には画面遷移)`);
  };

  return (
    <div>
      <h1>ゲームルーム: {roomId}</h1>
      <p>部屋に入ってからホストがゲームを選択する形式です。</p>

      <h2>参加者</h2>
      <ul>
        {dummyPlayers.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>

      {isHost && ( // ホストの場合のみゲーム選択と開始ボタンを表示
        <div>
          <h2>ゲームを選択</h2>
          <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
            {dummyGames.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
          <button onClick={handleStartGame}>ゲーム開始</button>
        </div>
      )}

      {!isHost && ( // ホストでない場合
        <p>ホストがゲームを選択し、開始するのを待っています...</p>
      )}
    </div>
  );
};

export default GameRoom;

