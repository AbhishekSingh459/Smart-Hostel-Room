import React, { useState } from "react";
import { api } from "../services/api";

const AllocateRoom = () => {
  const [req, setReq] = useState({
    students: 1,
    needsAC: false,
    needsWashroom: false,
  });

  const [result, setResult] = useState(null);

  const handleAllocate = async (e) => {
    e.preventDefault();
    const data = await api.allocateRoom(req);
    setResult(data);
  };

  return (
    <div className="card">
      <h2>Allocate Room</h2>

      <form onSubmit={handleAllocate}>
        <input
          type="number"
          min="1"
          value={req.students}
          onChange={(e) =>
            setReq({ ...req, students: Number(e.target.value) })
          }
        />

        <label>
          <input
            type="checkbox"
            checked={req.needsAC}
            onChange={(e) => setReq({ ...req, needsAC: e.target.checked })}
          />
          AC Required
        </label>

        <label>
          <input
            type="checkbox"
            checked={req.needsWashroom}
            onChange={(e) =>
              setReq({ ...req, needsWashroom: e.target.checked })
            }
          />
          Washroom Required
        </label>

        <button type="submit">Allocate</button>
      </form>

      {result && (
        <div className="result">
          {result.roomNo ? (
            <p>
              ✅ Room <strong>{result.roomNo}</strong> allocated
            </p>
          ) : (
            <p>❌ No room available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllocateRoom;
