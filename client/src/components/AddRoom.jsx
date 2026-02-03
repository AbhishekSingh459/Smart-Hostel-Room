import React, { useState } from "react";
import { api } from "../services/api";

const AddRoom = ({ refreshRooms }) => {
  const [form, setForm] = useState({
    roomNo: "",
    capacity: 1,
    hasAC: false,
    hasAttachedWashroom: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.roomNo) {
      alert("Room number is required");
      return;
    }

    await api.addRoom(form);
    alert("Room added successfully");

    setForm({
      roomNo: "",
      capacity: 1,
      hasAC: false,
      hasAttachedWashroom: false,
    });

    refreshRooms();
  };

  return (
    <div className="card">
      <h2>Add Room</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Room Number"
          value={form.roomNo}
          onChange={(e) => setForm({ ...form, roomNo: e.target.value })}
        />

        <input
          type="number"
          min="1"
          placeholder="Capacity"
          value={form.capacity}
          onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })}
        />

        <label>
          <input
            type="checkbox"
            checked={form.hasAC}
            onChange={(e) => setForm({ ...form, hasAC: e.target.checked })}
          />
          Has AC
        </label>

        <label>
          <input
            type="checkbox"
            checked={form.hasAttachedWashroom}
            onChange={(e) =>
              setForm({ ...form, hasAttachedWashroom: e.target.checked })
            }
          />
          Attached Washroom
        </label>

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
