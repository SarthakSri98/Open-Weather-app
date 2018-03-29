$(document).ready(function(){


	var sub = document.getElementById('submit');

	$('#submit').click(function()
	{
		var city = $('#city').val();
		
		if(city != '')
		{
			$.ajax({
				url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=4210ca092af7d0ee10fd1fb2a6d9c676&callback=?",
				type:"get",
				datatype:"jsonp",
				success: function(data){
					var widgets = show(data);
                    $('#show').html(widgets);
                    city='';
				}
			});
		}
		else
		{
			console.log('Your computer is good for nothing');
		}
	});

	function show(data){
		return "<p><b>Weather:</b>"+data.weather[0].description+"</p></br>"+
		"<p><b>Temp:</b>"+data.main.temp+" degree celcius</p></br>"+
		"<p><b>Position:longitude:-</b>"+" "+data.coord.lon+" "+" latitude:-"+" "+data.coord.lat+"</p></br>"+
		"<p><b>:Humidity:</b>"+data.main.temp+"</p>";
	}


});
