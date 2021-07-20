
    function display(val)
    {
     document.getElementById("textval").value+=val
     }

    function clr()
    {
     document.getElementById("textval").value = "";
    }
    

   var x =  document.querySelector('input[value="="]');
   x.onclick = function()
   {
    let x = document.getElementById("textval").value;
    let y = eval(x);
 document.getElementById("textval").value = y;
 console.log(typeof y);
   }