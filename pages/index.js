import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

// pages/index.js
import React from "react";

export default function Home() {
  // your sample data (can come from DB or API later)
  const records = [
    { id: 1, name: "John Doe", treatment: "Root Canal" },
    { id: 2, name: "Sarah Lee", treatment: "Teeth Whitening" },
    { id: 3, name: "Mark Patel", treatment: "Cavity Filling" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🦷 Patient Records</h1>

      <ul style={styles.list}>
        {records.map((rec) => (
          <li key={rec.id} style={styles.card}>
            <h3>{rec.name}</h3>
            <p>{rec.treatment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// just some inline styles to make it look neat
const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    padding: "2rem",
    background: "#f8f9fa",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};


