import React from "react";

const RoomList = ({ rooms, loading }) => {
  return (
    <div className="card">
      <h2>Room List</h2>

      {loading ? (
        <p>Loading rooms...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Capacity</th>
              <th>Facilities</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.roomNo}</td>
                <td>{room.capacity}</td>
                <td>
                  {room.hasAC && "AC "}
                  {room.hasAttachedWashroom && "Washroom"}
                </td>
                <td>{room.isAllocated ? "Allocated" : "Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RoomList;
