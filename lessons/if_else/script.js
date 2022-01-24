"use strickt";



if (personalMovieDB.count < 10 ){
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log("Вы класический зритель");
} else if ( personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

if (a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
}  else{
    console.log('error');
    i--;
}