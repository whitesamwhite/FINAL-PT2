(function ($) {
// ALL YOUR CODE GOES AFTER THIS LINE!  Don't delete the very final line, though!
  makeCube();
  make2Cube();
  // First step - listen for when the Search Button (indicated by the class 'search-button') is clicked
  $('.search-button').click(function(){

    // remove any already-existing results from results-area
    $('.results-area h3').remove();


    // if the search button was clicked, store the text from the search box
    // in a variable.
    var searchtext = '';
    searchtext = $('.search-box').val();

    // now, run the function runSearch using the value from the search box
    runSearch(searchtext);

  });

// don't get rid of this line!
}(jQuery));




// Our search function
function runSearch(usertext){
  var encodedText;
  encodedText = encodeURIComponent(usertext);
  $.getJSON("http://www.omdbapi.com/?s=" + encodedText + "&r=json", function (data) {
    $.each(data.Search, function(counter, movie) {
      console.log(movie);
      //document.write(movie.Title);
      $('.results-area').append('<div class="movie-result">');
      $('.results-area').append('<h3>' + movie.Title + '</h3>');
      $('.results-area').append('<p>' + movie.Year + '</p>');
      $('.results-area').append('<p>' + "<img src=" + movie.Poster + ">" + '</p>');
      $('.results-area').append('<a href="http://www.imdb.com/title/' + movie.imdbDB + '">IMBD</a>');
      $('.results-area').append('</div>');
    });
  });
}


function makeCube(){

  $.getJSON("http://www.omdbapi.com/?s=Star&20Wars&r=json", function (data) {
    $.each(data.Search, function(counter, movie) {
      //document.write(movie.Title);

      if(counter == 0){
        $('.starwars ._3dface--front').css('background','url(' + movie.Poster +')');
      }
      if(counter == 1){
        $('.starwars ._3dface--top').css('background','url(' + movie.Poster +')');
      }
      if(counter == 6){
        $('.starwars ._3dface--bottom').css('background','url(' + movie.Poster +')');
      }
      if(counter == 3){
        $('.starwars ._3dface--left').css('background','url(' + movie.Poster +')');
      }
      if(counter == 4){
        $('.starwars ._3dface--right').css('background-image','url(' + movie.Poster +')');
      }
      if(counter == 5){
        $('.starwars ._3dface--back').css('background','url(' + movie.Poster +')');
      }

    });
  });
}
function make2Cube(){

  $.getJSON("http://www.omdbapi.com/?s=Hunger&20Games&r=json", function (data) {
    $.each(data.Search, function(counter, movie) {
      //document.write(movie.Title);

      if(counter == 0){
        $('.hunger ._3dface--front').css('background','url(' + movie.Poster +')');
      }
      if(counter == 1){
        $('.hunger ._3dface--top').css('background','url(' + movie.Poster +')');
      }
      if(counter == 6){
        $('.hunger ._3dface--bottom').css('background','url(' + movie.Poster +')');
      }
      if(counter == 3){
        $('.hunger ._3dface--left').css('background','url(' + movie.Poster +')');
      }
      if(counter == 4){
        $('.hunger ._3dface--right').css('background-image','url(' + movie.Poster +')');
      }
      if(counter == 5){
        $('.hunger ._3dface--back').css('background','url(' + movie.Poster +')');
      }

    });
  });
}
