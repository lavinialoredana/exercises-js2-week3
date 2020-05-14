/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"


Task 2
A. Use setTimeout to call show the movies after 1 second.
B. Create a new function called "addMovie":
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies
C. Call showMovies, then addMovies after 1 second, and then showMovies 1 second after that. If you see the movies repeated on screen, it's not a problem for now.

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function

// Task 1
// Create a function called "showMovies" that
// - iterates through the "movies" array and
// - for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
// - it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

var allMovies = document.querySelector("#all-movies");

function showMovies() {
  allMovies.innerText = " ";
  for (var i = 0; i < movies.length; i++) {
    var p = document.createElement("p");
    var movie = movies[i];
    p.innerText = movie.title + " by " + movie.director;
    allMovies.appendChild(p);
  }
  var moviesNumbers = document.querySelector("#movies-number");
  moviesNumbers.innerText = movies.length;
}

// showMovies();  this is how it should end but will call the function in part A from task 2 bellow

// Task 2
// A. Use setTimeout to call show the movies after 1 second.
// B. Create a new function called "addMovie":
// - it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide
// - it adds the new movie to the list of movies
// C. Call showMovies, then addMovies after 1 second, and then showMovies 1 second after that. If you see the movies repeated on screen, it's not a problem for now.

// create a new movie object for your favorite movie
var favMovie = {
  title: "Dupa Dealuri",
  director: "Cristi Puiu",
  type: "drama",
  haveWatched: true,
};

// A
setTimeout(showMovies, 1000);

// B - a) new function addMovie creation that has " movie" as an argument, then I push to the movies list the function's argument
function addMovie(movie) {
  movies.push(movie);
}
// B b) I declare my fav movie object as the argument of the addMovie and then I push it to the list of movies after 2 sec with
// setTimeout function
setTimeout(addMovie, 2000, favMovie);

// C
setTimeout(showMovies, 3000);

// Task 3
// A)
// Create a form anywhere on your page. The form should have
// - 4 input text fields, one for each property of your movie object
// - a "save" button.  (done in HTML)\
// B)
// When the button is clicked
// - The field values should be used to create a new movie object literal
// - The new movie is then added to the list of movies and gets displayed on your page
// TIP: Use the functions you created on tasks 1 and 2

var saveButton = document.querySelector("#saveButton"); // select the Save Button
saveButton.addEventListener("click", saveMovie); // add an event listener to it

function saveMovie(event) {
  var movieTitleInput = document.querySelector("#movieTitle"); // get the movie title input value
  var movieTitle = movieTitleInput.value; // set the movie title value
  var movieDirectorInput = document.querySelector("#movieDirector"); // get the movie title input value
  var movieDirector = movieDirectorInput.value; // set the movie title value
  var movieTypeInput = document.querySelector("#movieType"); // get the movie title input value
  var movieType = movieTypeInput.value; // set the movie title value
  var movieWatchedInput = document.querySelector("#movieWatched");
  var movieWatchedStr = movieWatchedInput.value;
  var movieWatched = movieWatchedStr == "true";  // ERROR - to be fixed - can not get the value true or false correctly

  if (movieTitle && movieDirector && movieType) {
    var movie = {
      title: movieTitle,
      director: movieDirector,
      type: movieType,
      haveWatched: movieWatched,
    };
    console.log(movie);
    addMovie(movie);
    showMovies();
  }
  event.preventDefault();
}
