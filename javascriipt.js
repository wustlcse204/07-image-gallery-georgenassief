
const ids = ["1", "2", "3","4","5","6","7","8","9","10","11","12"];
var center = document.getElementById("centerbox");
var close = document.getElementsByClassName("closer")[0];
for(let i=0; i<ids.length; i++){

  


    var img1=document.getElementById(ids[i]);
    img1.addEventListener("mouseover", click );
    img1.addEventListener("mouseleave", clock );
    function click(img){
     
        img.target.style.boxShadow= "5px 10px";
     
    }
    function clock(img){
       
          img.target.style.boxShadow= "0px 0px";
       
      }


      var clicker = document.getElementById(ids[i]);
//inspired by https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
clicker.onclick = function() {
  center.style.display = "block";

}
close.onclick = function() {
  center.style.display = "none";
}



    }
  
   


