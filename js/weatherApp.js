$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://weather-api.herokuapp.com/cities') + '&callback=?', function(data){
  console.log(data.contents);
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


// var temperature = 22;
// var weatherIcon = 'snow';
// $.each(apiData, function(index, city) {
//   console.log(apiData[city])
//   $('.cities').append(
//     $('<option></option>').val(city).html(city + " ⌄")
//   );
// });
// $('.temperature').text(temperature);
// $('img').attr('src', 'images/' + weatherIcon + '.svg')
