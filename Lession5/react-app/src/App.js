import { Link, Outlet } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}
export function History() {
  return (
    <div>
      <h1>This is our history</h1>
    </div>
  );
}
export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>Contact us anytime</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
