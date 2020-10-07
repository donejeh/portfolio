//DONEJEH.XYZ
//+2347064641016
//

 $('#yellow-color').click(function(e){
             $(".main-wrapper-resume").attr("id", "yellow");
         });
         $('#red-color').click(function(e){
             $(".main-wrapper-resume").attr("id", "red");
         });
         $('#blue-color').click(function(e){
             $(".main-wrapper-resume").attr("id", "blue");
         });
         $('#green-color').click(function(e){
             $(".main-wrapper-resume").attr("id", "green");
         });
		 
$(document).ready(function(){
  $(".setting-icon").click(function(){
    $(".color-box").toggleClass("main");
  });
});


$(document).ready(function(){
  $(".socials-text").click(function(){
    $(".socialicons").toggleClass("main");
  });
});

var myVar;

function myFunction(){
    myVar = setTimeout(hiding, 3000);
    myVar = setTimeout(showPage,4000);
}

function showPage(){
    document.getElementById("preload").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("preload").style.animation = "fadeout 1s ease";
    document.getElementById("myDiv").style.animation = "fadein 1s ease";
}



