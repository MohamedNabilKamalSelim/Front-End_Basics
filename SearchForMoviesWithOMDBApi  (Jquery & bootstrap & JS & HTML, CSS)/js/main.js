$(function () {
  $("#searchForm").submit(function (e) {
    e.preventDefault();

    let searchText = $("#searchText").val();
    GetMovies(searchText);
  });
});

function GetMovies(searchText) {
  axios
    .get("http://www.omdbapi.com/?s=" + searchText + "&apikey=2791f62f")
    .then((response) => {
      let movies = response.data.Search;
      console.log(movies);
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
        <div class="col-md-3">
          <div class=" bg-light m-1 p-3 well text-center">
            <img src="${movie.Poster}">
            <h5>${movie.Title}</h5>
            <a class="btn btn-primary" onclick="MovieSelected('${movie.imdbID}')" href="#">Movie Details</a>
          </div>
        </div>
        `;
      });
      $("#movies").html(output);
    })
    .catch((err) => {
      alert(err);
    });
}

function MovieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}

function GetMovie() {
  let movieId = sessionStorage.getItem("movieId");
  axios
    .get("http://www.omdbapi.com/?i=" + movieId + "&apikey=2791f62f")
    .then((response) => {
      let movie = response.data;
      $("#movie").html(
        `
        <div class="row m-2">
          <div class="col-md-4">
            <img class="img-thumbnail" style="width: auto; height: 450px; object-fit: cover;" src="${movie.Poster}">
          </div>
          <div class="col-md-8">
            <h3 class="m-2">${movie.Title}</h3>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre: </strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released: </strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated: </strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating: </strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer: </strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors: </strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row m-2">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-secondary">Go Back To Search</a>
          </div>
        </div>
        `
      );
    })
    .catch((err) => {
      alert(err);
    });
}
