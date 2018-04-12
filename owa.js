    $(document).ready(function(){             //the code written below will run only when the whole site will be loaded.

      /*var blinking = function(){
       $('h3').text('Enter your City in the box below');
      };
      function blink(){
      window.setInterval(function(){
          blinking();
      },1000);

      window.setInterval(function(){
          $('h3').text('');
      },1200);
       
     }
     window.setInterval(blink(),5000);*/

     var arr=[];
        //$('.back').style.backgroundimage
        var sub = document.getElementById('submit'); 

        $('#submit').click(function()
           {   window.clearInterval(blink);
              var city = $('#city').val();

              if(city != '')
    		{                      //the ajax  request part will start here.
    			$.ajax({
    				url:"https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&APPID=4210ca092af7d0ee10fd1fb2a6d9c676",
    				type:"get",
    				datatype:"jsonp",
    				success: function(data){
    					
    					if(data.name)
    					{
                            $('#city').val('');
                            var widgets = show(data);
                            $('#show').html(widgets);
                         }
                   /*else if(cod==404)
                    {    
                        $('#city').val('');
                        $('#show').html('Data not found');
                    }*/
                }
            });
        }
        else
        {
            console.log('Your computer is good for nothing');
        }
       $('#show').addClass('show animated rotateIn');
        
       //$('#show').addClass('');
    });
        
        $('#city').on('click',function(){
           $('#blink').removeClass('blink');
       });

        if($('#city').val(''))
        {
        	$('#blink').addClass('blink');
        }
    
    	function show(data){                       //function for displaying the weather data
    		var cod = data.cod;
    		return "<br><p><b>"+'"'+data.name+'"'+"</p></b></br>"+
    		"<p><b>Weather: </b>"+data.weather[0].description+"</p></br>"+
    		"<p><b>Temp: </b>"+data.main.temp+" degree celcius</p></br>"+
    		"<p><b>longitude: </b>"+" "+data.coord.lon+" ,"+" latitude: "+" "+data.coord.lat+"</p></br>";
    	}


    });