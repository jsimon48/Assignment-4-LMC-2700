let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(
        title,
        rating,
        haveWatched){
            this.title = title;
            this.rating = rating;
            this.haveWatched = haveWatched
        }
}


//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie)
    console.log("A new movie is added");


}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....")
    for (let index = 0; index < allMovies.length; index++) {
        console.log(allMovies[index].title + ", rating of " + allMovies[index].rating + ", havewatched: " + allMovies[index].haveWatched)
    }
    console.log("\n You have " + allMovies.length + " movies in total")
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    let matches = 0
    console.log("printing movie that has a rating higher than " + rating)
    for (let index = 0; index < allMovies.length; index++) {
        if(allMovies[index].rating > rating){
            console.log(allMovies[index].title + ", rating of " + allMovies[index].rating + ", havewatched: " + allMovies[index].haveWatched)
            matches++
        }
    }
    console.log("\n In total, there are " + matches +" matches" );
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (let index = 0; index < allMovies.length; index++) {
        if(allMovies[index].title == title){
            if(allMovies[index].haveWatched == true) {
                allMovies[index].haveWatched = false
                console.log("changing the status of the movie...")
            } else{
                allMovies[index].haveWatched = true
                console.log("changing the status of the movie...")
            }
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);