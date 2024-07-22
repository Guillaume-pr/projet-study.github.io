import React, { useState } from "react";
import "../styles/CreateStay.css";
import Navigation from "./Navigation";

const CreateStay = ({ isAuthenticated }) => {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    specialty: "",
    doctor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      // Handle form submission
    } else {
      alert("Please log in to create a stay.");
    }
  };

  return (
    <div>
      <Navigation />

      <div className="create-stay-container">
        <h1>Sejour</h1>
        <form onSubmit={handleSubmit}>
          <label>Date de debut</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
          />

          <label>Date de fin</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            required
          />

          <label>Raison</label>
          <input
            type="text"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
          />

          <label>Specialté</label>
          <input
            type="text"
            name="specialty"
            value={form.specialty}
            onChange={handleChange}
            required
          />

          <label>Docteur</label>
          <input
            type="text"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
          />

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CreateStay;
