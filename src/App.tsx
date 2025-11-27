import { useState } from 'react';
import RoomLobby from './components/RoomLobby';
import GameRoom from './components/GameRoom'; // GameRoomをインポート
import GameScreen from './components/GameScreen'; // GameScreenをインポート
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'lobby' | 'room' | 'game'>('lobby');
  const [roomId, setRoomId] = useState<string | null>(null);
  const [isHost, setIsHost] = useState<boolean>(false);
  const [gameId, setGameId] = useState<string | null>(null);

  const handleJoinRoom = (id: string, host: boolean) => {
    setRoomId(id);
    setIsHost(host);
    setCurrentScreen('room');
  };

  const handleStartGame = (selectedGameId: string) => {
    setGameId(selectedGameId);
    setCurrentScreen('game');
  };

  return (
    <div className="App">
      {currentScreen === 'lobby' && <RoomLobby onJoinRoom={handleJoinRoom} />}
      {currentScreen === 'room' && roomId && <GameRoom roomId={roomId} isHost={isHost} onStartGame={handleStartGame} />}
      {currentScreen === 'game' && roomId && gameId && <GameScreen roomId={roomId} gameId={gameId} />}
    </div>
  );
}

export default App;