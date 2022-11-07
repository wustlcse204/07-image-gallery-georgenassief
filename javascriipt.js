
const ids = ["1", "2", "3","4","5","6","7","8","9","10","11","12"];
var center = document.getElementById("centerbox");
var cen = document.getElementById("cen");
var leftclick=document.getElementById("left");
var rightclick= document.getElementById("right");
var close = document.getElementsByClassName("closer")[0];

//inspired by https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
function slick(img){
  center.style.display = "block";
    cen.src=img.target.src;
 cen.alt=img.target.alt; 


}


for(let i=0; i<ids.length; i++){
   var img1=document.getElementById(ids[i]);

    img1.addEventListener("mouseover", click );
    img1.addEventListener("mouseleave", clock );
    img1.addEventListener("click", slick);
    
    function click(img){
     
        img.target.style.boxShadow= "5px 10px";
     
    }
    function clock(img){
       
          img.target.style.boxShadow= "0px 0px";
       
      }
      
    


      var clicker = document.getElementById(ids[i]);



  






close.onclick = function() {
  center.style.display = "none";
  
}




    }
   
 function Rc() {
      for(let i=0; i<ids.length; i++){
      
      if( ids[i] ==document.getElementById("cen").alt){
        if(document.getElementById("cen").alt==ids[11]){
          console.log("hello1");
          cen.src=document.getElementById(ids[0]).src;
        cen.alt=document.getElementById(ids[0]).alt;
       
          break;
         }
         else{

        cen.src=document.getElementById(ids[i+1]).src;
        cen.alt=document.getElementById(ids[i+1]).alt;
          break;
         }
      }}}


      rightclick.addEventListener("click", Rc);
      leftclick.addEventListener("click", Rq)





      function Rq() {
        for(let i=0; i<ids.length; i++){
        
        if( ids[i] ==document.getElementById("cen").alt){
          console.log("hello");
          if(document.getElementById("cen").alt==ids[0]){
            console.log("hello1");
            cen.src=document.getElementById(ids[11]).src;
          cen.alt=document.getElementById(ids[11]).alt;
         break;
  
           }
           else{
  
            console.log("hello2");
          cen.src=document.getElementById(ids[i-1]).src;
          cen.alt=document.getElementById(ids[i-1]).alt;
  break;
           }}}}
   
      
     
        
       
    
       
      
   
    
    

    
  


