// import Link from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "./register.module.css";

const TampilanRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullname = formData.get("fullname") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullname, password }),
      });

      if (response.status === 200) {
        event.currentTarget.reset();
        setIsLoading(false);
        router.push("/auth/login");
      } else {
        setIsLoading(false);
        setError(
          response.status === 400 ? "User already exists" : "An error occurred"
        );
      }
    } catch (err) {
      setIsLoading(false);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Halaman Register</h1>

      {error && <div className={style.register__error}>{error}</div>}

      <div className={style.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={style.register__form_item}>
            <label htmlFor="email" className={style.register__form_item_label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.register__form_item_input}
              required
            />
          </div>

          <div className={style.register__form_item}>
            <label
              htmlFor="fullname"
              className={style.register__form_item_label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Fullname"
              className={style.register__form_item_input}
              required
            />
          </div>

          <div className={style.register__form_item}>
            <label
              htmlFor="password"
              className={style.register__form_item_label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={style.register__form_item_input}
              required
            />
          </div>

          <button
            type="submit"
            className={style.register__form_item_button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>

      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default TampilanRegister;