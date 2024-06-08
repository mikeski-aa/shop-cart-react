import { Link, link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1> Oh no , this route doesn't exist</h1>
      <Link to="/">You can go back to the home page here, though!</Link>
    </div>
  );
}

export { ErrorPage };
