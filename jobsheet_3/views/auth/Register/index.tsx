import styles from "./Register.module.css";

export default function RegisterView() {
  return (
    <div className={styles.register}>
      <h1>Register</h1>

      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Nama"
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />

        <button className={styles.button}>
          Daftar
        </button>
      </form>
    </div>
  );
}