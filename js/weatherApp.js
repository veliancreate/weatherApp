$.getJSON('http://weather-api.herokuapp.com/cities', function(data){

  var apiData = data.cities;

  var weatherIcon = 'snow';
  $.each(apiData, function(index, city) {
  console.log(apiData[city])
  $('.cities').append(
    $('<option></option>').val(city).html(city + " ⌄")
    );
  });

  $('img').attr('src', 'images/' + weatherIcon + '.svg')
});

$.getJSON('http://weather-api.herokuapp.com/temperature?city=london', function(data){
    console.log(data)
    var temperature = data.temp;
    $('.temperature').text(temperature);
});












// $.getJSON('http://www.weather-api.herokuapp.com/cities', function(data) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });


