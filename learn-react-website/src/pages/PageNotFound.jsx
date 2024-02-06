import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        What were you looking for? Maybe going back to the <Link to="/">Home</Link> will help you find it.
      </p>
    </div>
  );
}