$(document).ready(function(){             //the code written below will run only when the whole site will be loaded.

    var arr=[];
    //$('.back').style.backgroundimage
	var sub = document.getElementById('submit'); 

	$('#submit').click(function()
	{
		var city = $('#city').val();
		
		if(city != '')
		{                      //the ajax  request part will start here.
			$.ajax({
				url:"https://api.openweathermap.org/data/2.5/weather?q=%22+city+%22&units=metric%22+%22&APPID=4210ca092af7d0ee10fd1fb2a6d9c676",
				type:"get",
				datatype:"jsonp",
				success: function(data){
					var widgets = show(data);
                    $('#show').html(widgets);
                    $('#city').val('');
				}
			});
		}
		else
		{
			console.log('Your computer is good for nothing');
		}
	   
	});

	function show(data){                       //function for displaying the weather data
		return "<p><b>Weather: </b>"+data.weather[0].description+"</p></br>"+
		"<p><b>Temp: </b>"+data.main.temp+" degree celcius</p></br>"+
		"<p><b>longitude: </b>"+" "+data.coord.lon+" ,"+" latitude: "+" "+data.coord.lat+"</p></br>";
	}


});
