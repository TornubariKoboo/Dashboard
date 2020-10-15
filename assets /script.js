$(document).ready(function () {
  $("#submitWeather").click(function (e) {
    e.preventDefault();
    var city = $("#city").val();
    if (city != "") {
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q= " +
          city +
          "&units=metric" +
          " &appid=52b7957135e0e4875cf1b83a5b268b0a",
          type: "GET",
          dataType:"jsonp", 
          success:function(data){
              console.log(data.weather[0].main)
              var widget = show(data)
              $(".returnWeather").html(widget);
              $('#city').val('');

          }

      });
    } else {
      $("error").html("Field cannot be empty");
    }
  });
});


function show(data) {
  console.log(data)
    return '<h3><strong>Weather</strong>:' + data.weather[0].main + ' <h3>' +
    '<h3><strong>Description</strong>:' + data.weather[0].description + ' <h3>' +
    '<h3><strong> Main Temperature </strong></strong>:' + data.main.temp + ' <h3>' +
    '<h3><strong> Pressure </strong></strong>:' + data.main.pressure + ' <h3>' +
    '<h3><strong> Humidity </strong></strong>:' + data.main.humidity + ' <h3>' +
    '<h3><strong> Min Temperature </strong></strong>:' + data.main.temp_min + ' <h3>' +
    '<h3><strong> Max Temperature </strong></strong>:' + data.main.temp_max + ' <h3>' 
}
