
$("h1").addClass("big-title margin-50");
// $("a").attr("href", "https://wwww.yahoo.com");
// $("button").text("Dont Click")
// $("button").click(function(){
//     $("h1").addClass("click-me")
// })
$(document).keydown(function(event){
    console.log($("h1").text(event.key));
})