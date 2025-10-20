// pages/record/[id].js
import { useRouter } from "next/router";
import { records } from "../../data/records";
import Link from "next/link";

export default function ObjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const record = records.find((r) => r.id === parseInt(id));

  if (!record) return <p>Record not found!</p>;

  return (
    <div style={styles.container}>
      <Link href="/">
        <a style={styles.backLink}>← Back to List</a>
      </Link>
      <h1 style={styles.heading}>{record.name}</h1>
      <p>
        <strong>Treatment:</strong> {record.treatment}
      </p>
      <p>
        <strong>Age:</strong> {record.age}
      </p>
    </div>
  );
}

const styles = {
  container: { padding: "2rem", fontFamily: "system-ui, sans-serif" },
  heading: { marginTop: "1rem" },
  backLink: { textDecoration: "underline", color: "#0070f3" },
};

