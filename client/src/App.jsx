import React, { useEffect, useState } from "react";
import { api } from "./services/api";
import AddRoom from "./components/AddRoom";
import RoomList from "./components/RoomList";
import AllocateRoom from "./components/AllocateRoom";
import "./App.css";

const App = () => {
  const [view, setView] = useState("view");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRooms = async () => {
    setLoading(true);
    const data = await api.getRooms();
    setRooms(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="container">
      <h1>Smart Hostel Room Allocation</h1>

      <nav>
        <button onClick={() => setView("view")}>View Rooms</button>
        <button onClick={() => setView("add")}>Add Room</button>
        <button onClick={() => setView("allocate")}>Allocate</button>
      </nav>

      {view === "view" && <RoomList rooms={rooms} loading={loading} />}
      {view === "add" && <AddRoom refreshRooms={fetchRooms} />}
      {view === "allocate" && <AllocateRoom />}
    </div>
  );
};

export default App;
