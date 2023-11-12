/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
 
// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
        }
    },
    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренних фильмов?', ''),
                b = prompt('Насколько оцениваете его?', '');
        
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }    
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const favGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
            if (favGenre == null || favGenre == '') {
                i--;
                console.log('no');
            } else {
                personalMovieDB.genres[i - 1] = `Любимый жанр под номером ${i} это ${favGenre}`;
            }
        }

        personalMovieDB.genres.forEach(function(item, indx){
            console.log(`Любимый жанр под номером ${indx + 1} это ${item}`);
        });
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

// Код возьмите из предыдущего домашнего задания


  