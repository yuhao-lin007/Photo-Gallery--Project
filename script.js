var images=[
 "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm0xESGkUWDuu13728Lgb_RHzJhyqQyHVdRQ&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgEqB6YNMn81PpbtqIAlPMGugkgv-Y6Fa8pw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6YvO8DOBg83e3Y5pYLJ6LcYGTIUSNahVlqA&usqp=CAU"
    
    ];//array of the images

images.forEach(function(a,b){
$(".shows").append("<img class='image' src=" + images[b] + ">");
});//show the image that i put into the array

$("button").click(function(){
    var inputValue=$ (".inputName").val();//store the input value
    
  images.push(inputValue);//push the link into the array
    
  $(".inputName").val(""); //empty the imput box
    
    $(".shows").empty();//empty the the imgages

    
images.forEach(function(a,b){
$(".shows").append("<img class='image' src=" + images[b] + ">");
});//show all images including what the user put it.
    
});


