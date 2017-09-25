$(document).ready(menu);

function menu()
{
    $("<div/>").attr("id","menu").appendTo("body")
    $("<img/>").attr("src","images/menu.jpg").appendTo("#menu")
    $("<button/>").text("start game").attr("id","start").css({
        "position" : "absolute",
        "top":"50%",
        "left":"50%",
        "font-size":"20px",
    }).appendTo("#menu");
$("#start").click(function(){
    $("#menu").empty()
    game()
});
}