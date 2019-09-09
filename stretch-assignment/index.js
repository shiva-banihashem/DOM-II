let blocks=document.querySelectorAll('.block');
let passengers = document.querySelectorAll('.passenger');

let leftvar=0;
let mousedown=false;
blocks.forEach((item,i) => {
    
    item.addEventListener('click', event => {
     
     classname0 = blocks[0].className;
     passenger0 = passengers[0].innerHTML;
    
     classnamei= item.className;
     passengeri = passengers[i].innerHTML;
    blocks[0].setAttribute("class", classnamei);
    blocks[i].setAttribute("class",classname0);
    passengers[0].innerHTML = passengeri;
    passengers[i].innerHTML = passenger0;
    event.stopImmediatePropagation();

    
     
    })
    
    
    
  })
  passengers.forEach ((item,i) => {
    function movebox(){
        if(mousedown){
          item.style.position ='relative';
          
          leftarray =item.style.left.split('px');
          
          leftvar = Number(leftarray[0]);
          
          leftvar = leftvar+100;
          botvar = item.style.bottom;
          
          item.style.left = leftvar +'px';
          
          
          item.style.bottom = botvar;
         }
      }
  item.addEventListener('mousedown', event => {
       
    

   
    mousedown = true;
     movebox();
})
item.addEventListener('mouseup', event => {
   
   mousedown = false;
 


})
})
