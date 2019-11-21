 var info = $('#hotelinfo');
 var cid = $('#exampleInputcityid1');
var cin = $("#exampleInputcheckin1");
var cout = $("#exampleInputcheckout1");

$("form button").click(function (e) {
    
    e.preventDefault();
    var cityid= cid.val();
    var cindate = cin.val();
    var coutdate = cout.val();
    
    // if( cityid === "" && cindate === "" && coutdate === "") {
    //     alert("Please fill the field");
    //     return;
    // }
   
    let url = "http://developer.goibibo.com/api/cyclone/?app_id=cb1e0edc&app_key=d95a59e16c120bb391c85e56a9d53e66&city_id=" + cityid +"&check_in=" + cindate + "&check_out=" + coutdate  ;
    $.get(url, function (data) {
        let myinfo = data.metadata;
        
        
        if(data.metadata.offerdict === 0 ) {
            alert("No data available for these entries");
            return;
        }
    
        console.log(myinfo);
        

      //  for (let final of myinfo) {
          //  info.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
       // }
    });

});