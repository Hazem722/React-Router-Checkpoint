import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieCard from "./MovieCard/MovieCard";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

function Movie({ movies }) {
  const params = useParams();
  const movieInfo = movies.filter((movie) => movie.Title === params.title)[0];
  console.log(movieInfo);
  return (
    <Wrapper url={movieInfo.Poster}>
      <Content>
        <MovieCard
          title={movieInfo.Title}
          ImgUrl={movieInfo.Poster}
          description={movieInfo.Type}
          rating={movieInfo.rating}
          clickable={false}
        />
        <YoutubeEmbed embedId={movieInfo.trailer} />
        <Text>
          <p>About this movie : {movieInfo.movieDescription}</p>
        </Text>
      </Content>
    </Wrapper>
  );
}
export default Movie;
const Wrapper = styled.div`
  min-height: 600px;
  background: ${(props) => (props.url ? `url('${props.url}')` : "#000")};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieinfo 1s;
  .card-movie {
    margin: 10px;
  }
  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  padding: 40px;

  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 992px) {
    height: fit-content;
    flex-direction: column;
    max-height: none;
  }
  @media screen and (max-width: 768px) {
    max-height: none;
  }
`;
const Text = styled.div`
  margin: 10px;
  color: #fff;
  text-align: center;
`;
