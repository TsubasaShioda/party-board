
import React from "react";

interface GameControlsProps {
  // 将来的には操作に応じたプロップスを渡す
}

const GameControls: React.FC<GameControlsProps> = () => {
  return (
    <div style={{ padding: "20px", borderTop: "1px solid #ccc", marginTop: "20px" }}>
      <h2>ゲームコントロール</h2>
      <button onClick={() => alert("操作を実行")}>操作ボタン</button>
      {/* 将来的にはここにゲーム固有の操作UIが入る */}
    </div>
  );
};

export default GameControls;

