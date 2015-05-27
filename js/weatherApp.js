$(document).ready(function(){

  $.getJSON('http://weather-api.herokuapp.com/cities', function(data) {
    callJsonObj(data.cities[0]);
    generateList(data.cities);
  });

  function generateList(apiData) {
    $.each(apiData, function(index, city) {
    $('.cities').append(
      $('<option></option>').val(city).html(city + " ⌄")
      );
    }); 
  };

  $('.cities').click(function() {
    var city = $(this).val();
    callJsonObj(city);
  });

  function callJsonObj(city) {
    weather = (($('.icon').attr('class')).split(" "))[1];
    $.getJSON('http://weather-api.herokuapp.com/temperature?city=' + city, function(data) {
      $('.temperature').text(data.temp);
      $('img').attr('src', 'images/' + data.outlook + '.svg');
      $('.icon').removeClass(weather);
      $('.icon').addClass(data.outlook);
      $('body').removeClass(weather + 'Background');
      $('body').addClass(data.outlook + 'Background');
    });  
  };
});