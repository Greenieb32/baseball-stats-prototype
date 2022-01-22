import { Link } from "react-router-dom"; 

function Error() {
    return (
      <section className="error-page section">
        <div className="error-container">
          <h1>Sorry No Players Here!</h1>
          <Link to="/" className="btn btn-primary">
            Return to Home Page!
          </Link>
        </div>
      </section>
    );
}

export default Error
