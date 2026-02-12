import { Link } from "react-router";

export const AboutPage = () => {
  return (
    <article className="page">
      <h1>About us</h1>

      <section className="flex flex-col gap-3">
        <Link to="/profile">Perfil</Link>
        <Link to="/login">Login</Link>
      </section>
    </article>
  );
};
