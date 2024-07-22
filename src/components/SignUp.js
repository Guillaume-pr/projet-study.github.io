import React, { useState } from "react";
import "../styles/SignUp.css";
import Navigation from "./Navigation";
import axios from "axios";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        form
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <Navigation />

      <div className="signup-container">
        <h1>Créer un compte</h1>
        <form onSubmit={handleSubmit}>
          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <label>Nom</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label>Adresse</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Validé</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
