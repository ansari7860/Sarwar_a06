document.addEventListener('DOMContentLoaded',function() {


    // for red color
    document.querySelector('#red').onclick = function() {
        document.querySelector('#hello').style.color='red';
    };
     
     // for green color
     document.querySelector('#green').onclick = function() {
        document.querySelector('#hello').style.color='green';
    };
   
     // for blue color
     document.querySelector('#blue').onclick = function() {
        document.querySelector('#hello').style.color='blue';
    };
   
});