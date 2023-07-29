var headers=document.getElementsByClassName('headers');
var items=document.getElementsByClassName('items');
var closeadd=document.getElementById('closeadd');
var closeaddupdate=document.getElementById('closeaddupdate');
var add=document.getElementById('addbtn');
var update=document.getElementById('updatebtn');
var del=document.getElementById('deletebtn');
var tables=document.getElementsByClassName('tables');
var addmodel=document.getElementById('addmodel');
var updatemodel=document.getElementById('updatemodel');

var form1=document.getElementById('form1');
var form2=document.getElementById('form2');
var actualtable=document.getElementById('actualtable');
var updateinput=document.getElementById('updaterollno');

add.addEventListener('click',addelement);
closeadd.addEventListener('click',closemodel)
update.addEventListener('click',updateelement);
closeaddupdate.addEventListener('click',closemodelupdate);
del.addEventListener('click',deleteelement);
form1.addEventListener('submit',addItem)
form2.addEventListener('submit',updateItem)
count=1
function addelement(){
addmodel.style.display="block";
}
function closemodel(){
addmodel.style.display="none";
}

function closemodelupdate(){
    updatemodel.style.display="none";
    
    }
function deleteelement(e){
    if(confirm('Are your sure you want to delete?')){
     
    }
}

function addItem(e){
    let count=0
  
  let textnode=count;
    e.preventDefault();
    var newitem=document.getElementById('rollno').value;
    var newtr=document.createElement('tr');
    var newtd1=document.createElement('td');
    var newtd2=document.createElement('td');
    var newtd3=document.createElement('td');
    var addbutton=document.createElement('button');
    var updatebutton=document.createElement('button');
    var deletebutton=document.createElement('button');
    newtr.className="items";
    addbutton.id="addbtn";
    addbutton.type="submit";
    addbutton.appendChild(document.createTextNode("Add"))
    updatebutton.id="updatebtn";
    updatebutton.type="submit";
    updatebutton.appendChild(document.createTextNode("Update"))
    deletebutton.id="deletebtn";
    deletebutton.type="submit";
    deletebutton.appendChild(document.createTextNode("Delete"))
    newtd1.appendChild(document.createTextNode(count+1));
    newtd2.appendChild(document.createTextNode(newitem));
    newtd3.appendChild(addbutton);
    newtd3.appendChild(updatebutton);
    newtd3.appendChild(deletebutton);
    newtr.appendChild(newtd1);
    newtr.appendChild(newtd2);
    newtr.appendChild(newtd3);
    console.log(newtr)
actualtable.appendChild(newtr);
console.log(actualtable)
}

function updateelement(){
    updatemodel.style.display="block";
}

function updateItem(){
updateinput.placeholder=""
}