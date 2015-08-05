$(document).ready(function() {

//    var owl = $("#owl-demo");
//
//    $("#owl-demo").owlCarousel({
//        autoPlay : 4000,
//        slideSpeed : 600,
//        paginationSpeed : 1000,
//        singleItem:true,
//        //navigation: false,
//        pagination: false
//    });
//    $("#next").click(function(){
//        owl.trigger('owl.next');
//        //alert('vse good')
//    });
//    $("#prev").click(function(){
//        owl.trigger('owl.prev');
//    });
});
$("#vxod_na_rabotu").click(function registerButton() {

    var user = {
        "kod":   $('#kod').val(),
        "status": "1"
    };
    console.log(user);
    addUser(user);
    $('#kod').val("");
});
$("#vuhod_na_obed").click(function registerButton() {

    var user = {
        "kod":   $('#kod').val(),
        "status": "3"
    };
    console.log(user);
    addUser(user);
    $('#kod').val("");
});
$("#vgod_s_obeda").click(function registerButton() {
    var user = {
        "kod":   $('#kod').val(),
        "status": "4"
    };
    console.log(user);
    addUser(user);
    $('#kod').val("");

});
$("#vuhod_s_rabotu").click(function registerButton() {
    var user = {
        "kod":   $('#kod').val(),
        "status": "2"
    };
    console.log(user);
    addUser(user);
    $('#kod').val("");
});
$("#close_modal").click(function registerButton() {
    $('#kod').val("");
});
function addUser(data)
{
    $.ajax({
        type: "POST",
        url: "http://10.7.131.134/exampleService/UserRegistry/",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //console.log(data)
            var Jsondata = JSON.parse(data);
            //console.log(Jsondata);
            //console.log(Jsondata.message);
            //console.log(Jsondata.statusInfo);
            $(".massage_box").notify(Jsondata.message ,Jsondata.statusInfo);
       },
        error: function() {
            //alert("Net otveta ot servera");
            $(".massage_box").notify("Нет соединения" ,"error");
        }
    });
}
