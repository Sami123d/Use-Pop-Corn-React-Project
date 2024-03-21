import React from "react";

const MovieShow = ({ movieShow,setMovie }) => {
  if (!Array.isArray(movieShow) || movieShow.length === 0) {
    return <div className="MovieShowDefault">No movies to show</div>;
  }
  console.log(setMovie, "setmovie")
   const clearMovieShow = () => {
       console.log("Chla")
   }
  return (
    <div className="MovieShow">

      <div className="MovieShowItemsDiv">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "3px 6px",
          }}
        >
          <p className="dhus" onClick={clearMovieShow}>-</p>
        </div>
        {movieShow.map((movie) => {
          return (
            <>
              <div className="MovieShowItems">
                <div className="MovieShowItemsImgContainer">
                {movie.Poster === "N/A" ? (
                  <img
                    width={"100%"}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
                    alt="Movie Title"
                  />
                ) : (
                  <img
                    width={"100%"}
                    src={movie?.Poster}
                    alt=""
                    srcSet=""
                  />
                )}
                </div>
                <div className="MovieShowItemsFontContainer">
                  <p>{movie?.Title}</p>
                  <p>
                    <span style={{ marginRight: "4px" }}>📅</span>{movie?.Year}
                  </p>
                </div>
              </div>
              <hr className="customHr" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieShow;
