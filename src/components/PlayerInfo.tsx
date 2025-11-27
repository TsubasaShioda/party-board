
import React from "react";

interface PlayerInfoProps {
  playerName: string;
  score: number;
  isActive: boolean; // 現在のターンかどうか
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ playerName, score, isActive }) => {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", margin: "5px", backgroundColor: isActive ? "#e0ffe0" : "#f0f0f0" }}>
      <h3>{playerName}</h3>
      <p>スコア: {score}</p>
      {isActive && <p>(現在のターン)</p>}
    </div>
  );
};

export default PlayerInfo;

