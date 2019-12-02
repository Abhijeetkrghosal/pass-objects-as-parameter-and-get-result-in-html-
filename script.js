// coding test 1//
// var john = 40;
// var nick  = 60;
//var  pass = 51;
//if(john >= pass && nick >= pass){
//   console.log("yes both have passed");
//   }
//else if( john >=pass || nick >= pass){
//    console.log("sorry  one has passed");
//    if(john > nick){
//        console.log('its you john with'+ " " + john + " "+ 'points');
//    }
//    else{
//        console.log('its you nick with'+" " + nick +" " +'points');
//    }
//}
//else{
//    console.log("sorry ! both have failed");
//}

//json
//var xmlhttp = new XMLHttpRequest();
//xmlhttp.open("GET","users.json",true);
//xmlhttp.onload = function(){
//    if(this.status == 200){
//        var mydata = JSON.parse(this.responseText);
//        console.log(mydata);
//    }
//}
//xmlhttp.send();
$(function(){
     getuser('third');
})

function getuser(id = 'first'){
    let data = jsondata[id]
   var users_details = '';
    $.each(data,function(key,value){
    users_details += '<div class="col-sm-4">'
            +'<div class="card" id="row_data">'
            +'<p>'+value.name+'</p>'
            +'<p>'+value.gender+'</p>'
            +'<p>'+value.designation+'</p>'
           +' <p>'+value.age+'</p>'
           +'</div>'
       +'</div>';
    });
//                      console.log(users_details);
    $('#aaaa').html(users_details);

}
