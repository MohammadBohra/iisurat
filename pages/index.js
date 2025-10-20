// pages/index.js
import Link from "next/link";
import { records } from "../data/records";

export default function ListReport() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🦷 Patient List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Treatment</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <tr key={rec.id}>
              <td>
                <Link href={`/record/${rec.id}`}>
                  <a style={styles.link}>{rec.name}</a>
                </Link>
              </td>
              <td>{rec.treatment}</td>
              <td>{rec.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: "2rem", fontFamily: "system-ui, sans-serif" },
  heading: { textAlign: "center" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "2rem" },
  link: { color: "#0070f3", textDecoration: "underline", cursor: "pointer" },
};
