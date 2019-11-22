$(document).ready(function() {
    $('#button').on('click',function(e){
        $('#search').on('click',function(e){
            document.getElementById('ticket').innerHTML='';
        })
      let name = document.getElementById('search').value;
      console.log(name);
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=${name}&currency=RUB`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
            "x-rapidapi-key": "d9c251a8bamshb7073813a2e193bp1765d9jsnec64921776a9",
            "x-access-token": "8af3ed3dc900a0bf330c474822a37f92"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response.data);
        let array=[];
    
        for (var key in response.data) {
            // skip loop if the property is from prototype
    //        if (!validation_messages.hasOwnProperty(key)) continue;
    
            var obj = response.data[key];
    //        console.log(obj);
             array.push({name:key,data:obj});
    
        }
    //    console.log('This is array')
    //	console.log(array);
    
    if(array.length == 0){
        document.getElementById('place').innerHTML='<h1 class="my-3 py-3">NO DATA FOUND</h1>';
    }
    else{
        let component=array.map(fp=>{
            return(`
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Name ${fp.name}</h5>
                    <h5 class="card-title">Airline ${fp.data.airline}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Origin ${fp.data.origin}</h6>
                    <p class="card-text">FLight Number${fp.data.flight_number}</p>
                     <p class="card-text">Price ${fp.data.price} INR</p>
                      <p class="card-text">Destination ${fp.data.destination}</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>`
                )
        });
    
    
        document.getElementById('place').innerHTML=component;
        document.getElementById('ticket').innerHTML=component;
        }
    });
    
    });
    
    $('#routes').on('click',function(e){
    
    document.getElementById('place').innerHTML='';
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions?limit=100&airline_code=SU",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
            "x-rapidapi-key": "d9c251a8bamshb7073813a2e193bp1765d9jsnec64921776a9",
            "x-access-token": "8af3ed3dc900a0bf330c474822a37f92"
        }
    }
    
    $.ajax(settings).done(function (response) {
    
        let amm = [];
         for (var key in response.data) {
    
                var obj = response.data[key];
    
                 amm.push({name:key,data:obj});
    
            }
    
            let component=amm.map(fp=>{
                    return(
                    `
                        <div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title">Name ${fp.name}</h5>
                            <h5 class="card-title">Airline ${fp.data}</h5>
                          </div>
                        </div>
                     `
                     )
                });
    
    
    
    
                document.getElementById('ticket').innerHTML=component;
    
    });
    });
    
    $('#chpbtn').on('click',function(e){
        $('#cheap').on('click',function(e){
            document.getElementById('cheapticket').innerHTML='';
        })
      let name = document.getElementById('cheap').value;
      console.log(name);
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=-&origin=${name}&currency=RUB&page=None`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
		"x-rapidapi-key": "d9c251a8bamshb7073813a2e193bp1765d9jsnec64921776a9",
		"x-access-token": "8af3ed3dc900a0bf330c474822a37f92"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response.data);
	let array=[];

    for (var key in response.data) {
        // skip loop if the property is from prototype
//        if (!validation_messages.hasOwnProperty(key)) continue;

        var obj = response.data[key];
//        console.log(obj);
         array.push({name:key,data:obj});

    }
//    console.log('This is array')
//	console.log(array);

if(array.length == 0){
    document.getElementById('placet').innerHTML='<h1 class="my-3 py-3">NO DATA FOUND</h1>';
}
else{
	let component=array.map(fp=>{
	    return(`
	        <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Name ${fp.name}</h5>
                <h5 class="card-title">Airline ${fp.data.airline}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Origin ${fp.data.origin}</h6>
                <p class="card-text">FLight Number${fp.data.flight_number}</p>
                 <p class="card-text">Price ${fp.data.price} INR</p>
                  <p class="card-text">Destination ${fp.data.destination}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>`
            )
	});


	document.getElementById('placet').innerHTML=component;
	document.getElementById('cheapticket').innerHTML=component;
	}
});

});

});