// Your code goes here

//mouseover 
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", (e) => {
  
 
  logo.style.transform = 'scale(1.2)';
  logo.style.color = 'red';
  logo.style.transition = ' transform 0.5s';
});

//mouseleave
logo.addEventListener("mouseleave", (e) => {
  
    
    logo.style.transform = 'scale(1)';
    logo.style.color = 'black';
    logo.style.transition = ' transform 0.5s';
  });

//keydown 
  window.addEventListener("keydown", event => {
    
    busImg = document.querySelector('.intro img');
    
    busImg.src = 'img/happytravel.jpg'
  });

//keyup
  window.addEventListener("keyup", event => {
    
    busImg = document.querySelector('.intro img');
    
    busImg.src = 'img/fun-bus.jpg'
  });

  //Wheel event
  h2LetsGo = document.querySelector(".text-content h2 ");
  
  h2LetsGo.addEventListener("wheel", changeH2);
  h2LetsGo.addEventListener("mouseleave", (e) => {

    
    h2LetsGo.style.fontSize = "32px";
    h2LetsGo.style.color = 'black';
    
  });

function changeH2() {
    
  this.style.fontSize = "50px";
  this.style.color = 'blue';
  this.textContent = "Let's Have Fun!!!";
}




//load event
window.addEventListener('load', (event) => {
    let timeEnded =false;
    
    let intro = document.querySelector('.logo-heading');
    setTimeout(function() {
        timeEnded = true;
        intro.style.display = 'flex';

         
     }, 5000);
    setInterval(function() {
        intro.style.display = (timeEnded == false && intro.style.display == 'flex' ? 'none' : 'flex');
        
    }, 500);
    
      
  });
  
  

//resize event
window.addEventListener('resize', event => {
     document.body.style.backgroundColor = 'yellow';
     document.body.style.color = 'blue';
    });

//scroll event
    var lastScrollPosition = 0;
    var newScrollPosition = 0
    window.addEventListener('scroll', function(e) {
    
    const scaleImg = document.querySelectorAll('img');
    
    
    newScrollPosition = window.scrollY;
    
    if (newScrollPosition < lastScrollPosition){
        
        scaleImg.forEach(item => {
        item.style.transform = 'scale(1)';
        item.style.transition = ' transform 0.5s';});
    }else{
        
        scaleImg.forEach(item => {
        item.style.transform = 'scale(1.3)';
        item.style.transition = ' transform 0.5s';});
    }
    lastScrollPosition = newScrollPosition;
    

  });

  // cut event
  

  let paragraphNode = document.querySelector('.content-destination p');
  
  paragraphNode.addEventListener('cut', alertSelection);
  
  function alertSelection(event) {
    

    const selection = document.getSelection();
     alert ('you cut the text:'+ selection);
}


//dblclick event

busImg = document.querySelector('.intro img');
busImg.addEventListener('dblclick', function (e) {
  console.log('busImg Double click');
  busImg.src =  "img/happytravel.jpg";
});
busImg.addEventListener('mouseleave', function (e) {
    console.log('busImg mouseleave');
    busImg.src =  "img/fun-bus.jpg";
  });

  //drag and drop
