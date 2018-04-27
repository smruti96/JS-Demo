var movies = [
 {
 	title:"In Bruges",
 	hasWatched: false,
 	rating:5
 },

 {
 	title:"Frozen",
 	hasWatched: true,
 	rating:4.5
 },

 {
 	title:"Mad Max Fury Road",
 	hasWatched: true,
 	rating:5
 },

 {
 	title:"Les Miserables",
 	hasWatched: false,
 	rating:3.5
 }
]

function buildString(movie){
	var result = "Yo have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else{
		result += "have not seen ";
	}
	result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
	
    console.log(buildString(movie));
});
