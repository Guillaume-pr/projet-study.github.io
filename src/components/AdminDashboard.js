import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import Navigation from "./Navigation";

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorForm, setDoctorForm] = useState({
    firstName: "",
    lastName: "",
    specialty: "",
    matricule: "",
  });

  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm({
      ...doctorForm,
      [name]: value,
    });
  };

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    setDoctors([...doctors, { ...doctorForm, schedule: [] }]);
    setDoctorForm({
      firstName: "",
      lastName: "",
      specialty: "",
      matricule: "",
    });
  };

  const handleScheduleChange = (doctorIndex, day, isChecked) => {
    const updatedDoctors = [...doctors];
    if (isChecked) {
      updatedDoctors[doctorIndex].schedule.push(day);
    } else {
      updatedDoctors[doctorIndex].schedule = updatedDoctors[
        doctorIndex
      ].schedule.filter((d) => d !== day);
    }
    setDoctors(updatedDoctors);
  };

  return (
    <div>
      <Navigation />

      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        <form onSubmit={handleDoctorSubmit}>
          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            value={doctorForm.firstName}
            onChange={handleDoctorChange}
            required
          />

          <label>Nom</label>
          <input
            type="text"
            name="lastName"
            value={doctorForm.lastName}
            onChange={handleDoctorChange}
            required
          />

          <label>Specialté</label>
          <input
            type="text"
            name="specialty"
            value={doctorForm.specialty}
            onChange={handleDoctorChange}
            required
          />

          <label>Matricule</label>
          <input
            type="text"
            name="matricule"
            value={doctorForm.matricule}
            onChange={handleDoctorChange}
            required
          />

          <button type="submit">Ajouté un Docteur</button>
        </form>
        <div className="doctor-list">
          <h2>Docteur</h2>
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <p>
                <strong>
                  {doctor.firstName} {doctor.lastName}
                </strong>
              </p>
              <p>Specialté: {doctor.specialty}</p>
              <p>Matricule: {doctor.matricule}</p>
              <div className="schedule">
                <p>Emplois du temps:</p>
                {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"].map(
                  (day) => (
                    <label key={day}>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleScheduleChange(index, day, e.target.checked)
                        }
                      />
                      {day}
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
