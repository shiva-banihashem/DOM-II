let blocks=document.querySelectorAll('.block');

blocks.forEach((item,i) => {
    item.addEventListener('click', event => {
     console.log(item);
     classname0 = blocks[0].className;
    console.log("class name:"+ classname0)
     classnamei= item.className;
    blocks[0].setAttribute("class", classnamei);
    blocks[i].setAttribute("class",classname0);
    
     
    })
  })
  
