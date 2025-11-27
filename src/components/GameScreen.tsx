
import React from "react";
import GameBoard from "./GameBoard";
import PlayerInfo from "./PlayerInfo";
import GameControls from "./GameControls";
import Chat from "./Chat";

interface GameScreenProps {
  // GameRoomから渡されるゲームIDやプレイヤー情報など
  roomId: string;
  gameId: string; // どのゲームが選択されたか
}

const GameScreen: React.FC<GameScreenProps> = ({ roomId, gameId }) => {
  // ダミーのプレイヤー情報
  const dummyPlayers = [
    { playerName: "プレイヤー1", score: 10, isActive: true },
    { playerName: "プレイヤー2", score: 5, isActive: false },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <h1>ゲーム画面: {gameId} (部屋ID: {roomId})</h1>
      
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%", maxWidth: "800px", marginBottom: "20px" }}>
        {dummyPlayers.map((player, index) => (
          <PlayerInfo key={index} {...player} />
        ))}
      </div>

      <GameBoard /> {/* 汎用GameBoardを配置 */}

      <GameControls />

      <Chat />
    </div>
  );
};

export default GameScreen;

