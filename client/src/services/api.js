const API_BASE_URL = "http://localhost:5000/api";

export const api = {
  // Get all rooms
  getRooms: async () => {
    const res = await fetch(`${API_BASE_URL}/rooms`);
    return res.json();
  },

  // Add new room
  addRoom: async (roomData) => {
    const res = await fetch(`${API_BASE_URL}/rooms`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomData),
    });
    return res.json();
  },

  // Allocate room
  allocateRoom: async (requirements) => {
    const res = await fetch(`${API_BASE_URL}/allocate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requirements),
    });
    return res.json();
  },
};
