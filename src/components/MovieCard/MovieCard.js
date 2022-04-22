import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ ImgUrl, title, description, rating, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${title}`}>
        <Card
          className="card-movie"
          style={{ width: "18rem", height: "18rem" }}
        >
          <Card.Img variant="top" src={ImgUrl} />
          <Card.Body className="card-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="react-stars">
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={rating}
              />
            </div>
          </Card.Body>
        </Card>
      </Link>
    ) : (
      <Card className="card-movie" style={{ width: "18rem", height: "18rem" }}>
        <Card.Img variant="top" src={ImgUrl} />
        <Card.Body className="card-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="react-stars">
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={rating}
            />
          </div>
        </Card.Body>
      </Card>
    )}
  </div>
);

export default MovieCard;
