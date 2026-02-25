import Navbar from "../Navbar";

export default function AppShell({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      <footer style={{ marginTop: "40px", padding: "20px", background: "#eee" }}>
        <p>© 2026 Pemrograman Framework - Fajrul Santoso</p>
      </footer>
    </>
  );
}