import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Filter({ setSearchValue, stars, setStars }) {
  const ratingChanged = (newRating) => {
    setStars(newRating);
  };
  return (
    <div className="filter-search d-flex align-items-center justify-content-between text-light">
      Movies by Stars
      <div className="mx-3">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={stars}
        />
      </div>
      <div>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
}

export default Filter;
