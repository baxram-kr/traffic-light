let red = document.getElementById("redl")
let yellow = document.getElementById("yellowl")
let green = document.getElementById("greenl")


function myfun(){
    setTimeout(() => {
        red.classList.add('red')
        yellow.classList.remove('yellow')
        green.classList.remove('green')
     }, 0);
     
     setTimeout(() => {
        red.classList.remove('red')
        yellow.classList.add('yellow')
        green.classList.remove('green')
      }, 5000);
      setTimeout(() => {
        red.classList.remove('red')
        yellow.classList.remove('yellow')
        green.classList.add('green')   
      }, 10000); 
      setTimeout(() => {
        red.classList.remove('red')
        yellow.classList.add('yellow')
        green.classList.remove('green')   
      }, 15000); 
}
setInterval(myfun, 20001);
myfun()




