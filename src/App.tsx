import { useState } from 'react';
import RoomLobby from './components/RoomLobby';
import GameRoom from './components/GameRoom'; // GameRoomをインポート
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'lobby' | 'room'>('lobby');
  const [roomId, setRoomId] = useState<string | null>(null);
  const [isHost, setIsHost] = useState<boolean>(false);

  const handleJoinRoom = (id: string, host: boolean) => {
    setRoomId(id);
    setIsHost(host);
    setCurrentScreen('room');
  };

  return (
    <div className="App">
      {currentScreen === 'lobby' && <RoomLobby onJoinRoom={handleJoinRoom} />}
      {currentScreen === 'room' && roomId && <GameRoom roomId={roomId} isHost={isHost} />}
    </div>
  );
}

export default App;