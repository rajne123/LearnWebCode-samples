/*this is added as GIT Rep*/
var itemCounter = 1;
var vHeadLine = document.getElementById("RS1") ;
var Ulvaritems = document.getElementById("ULRS1").getElementsByTagName("li");
var vButton = document.getElementById("BT1");
var vOuterList = document.getElementById("ULRS1");

vButton.addEventListener("click" , addnewListItems);
vOuterList.addEventListener("click" , callfunc1);


//Adding Listener at OuterList level

/*
for (i = 0 ;  i < Ulvaritems.length ; i++ )
{
  //Ulvaritems[i].innerHTML = i ///
  Ulvaritems[i].addEventListener("click" , callfunc1);
}
*/

function callfunc1(e)
{
  vHeadLine.innerHTML = e.target.innerHTML;
  //this.classlist.add("active");
}

function addnewListItems ()
{
vOuterList.innerHTML += "<li>" + "Something new" + itemCounter + "</li>" ;
itemCounter++ ;
}
