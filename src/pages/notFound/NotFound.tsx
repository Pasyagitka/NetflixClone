import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <span>
        LOST YOUR WAY? Sorry, we can't find that page. You'll find lots to explore on the home page. Error Code
        NSES-404FROM LOST IN SPACE
      </span>
      <Link to="/">
        <button type="button">NetflixHome</button>
      </Link>
    </div>
  );
}

export default NotFound;
