
import React from "react";
import "./GameBoard.css"; // スタイルシートをインポート

interface GameBoardProps {
  // 将来的にはボードの状態などをプロップスとして渡す
  // 例: cellsData: { id: string; content: React.ReactNode }[];
}

const GameBoard: React.FC<GameBoardProps> = () => {
  // 仮のボードサイズ (例: 8x8)
  const boardSize = 8;
  const cells = Array.from({ length: boardSize * boardSize });

  return (
    <div className="game-board">
      {cells.map((_, index) => (
        <div key={index} className="board-cell">
          {/* 将来的にはここに駒などを表示 */}
          {index + 1} {/* セルの番号を表示 (デバッグ用) */}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;

