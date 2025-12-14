import { useEffect, useState } from "react";

const API_URL = "http://192.168.64.163:7070"; // Replace with your backend port

function App() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({ name: "", brand: "", price: "" });
  const [editId, setEditId] = useState(null);

  const fetchCars = async () => {
    try {
      const res = await fetch(`${API_URL}/cars`);
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await fetch(`${API_URL}/cars`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editId, ...form }),
        });
        setEditId(null);
      } else {
        await fetch(`${API_URL}/cars`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setForm({ name: "", brand: "", price: "" });
      fetchCars();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (car) => {
    setEditId(car.id);
    setForm({ name: car.name, brand: car.brand, price: car.price });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/cars/${id}`, { method: "DELETE" });
      fetchCars();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Car Management</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
          required
        />
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand"
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editId ? "Update Car" : "Add Car"}
        </button>
      </form>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Brand</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                No cars available
              </td>
            </tr>
          )}
          {cars.map((car) => (
            <tr key={car.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{car.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{car.brand}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{car.price}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <button
                  onClick={() => handleEdit(car)}
                  style={{ marginRight: "8px", cursor: "pointer" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(car.id)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;