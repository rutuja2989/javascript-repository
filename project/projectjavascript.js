var data=[{id:1, rollno:"i20-24"},
{id:2, rollno:"i20-01"}
]

function readall(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata=document.querySelector(".data_table");
    var oject=localStorage.getItem('object');
    var objectdata=JSON.parse(oject);
    var element="";
    objectdata.map(record=>{
        element+=`<tr>
        <td>${record.id}</td>
        <td>${record.rollno}</td>
        <td><button class="edit" onClick="{edit(${record.id})}">edit</button><button class="delete" onClick="{deleted(${record.id})}">delete</button></td>
        </tr>`;
    })
tabledata.innerHTML=element;
}

function add(){
    document.getElementById('addmodel').style.display="block";
}

function addelement(){
var newelement=document.getElementById('rollno').value;
 var newobject={id:3, rollno:newelement};
 data.push(newobject);

readall();
document.getElementById('addmodel').style.display="none";
}
function closemodel(){
document.getElementById('addmodel').style.display="none";
        }

function edit(id){
    document.getElementById('updatemodel').style.display="block";
    var obj=data.find(rec=>rec.id===id);
   document.getElementById('id').value=obj.id;
   document.getElementById('urollno').value = obj.rollno;
}

function updateelement(){
var id=parseInt(document.getElementById('id').value);
var editelement=document.getElementById('urollno').value;

var index=data.findIndex(rec=> rec.id===id);
data[index].rollno= editelement;
document.getElementById('updatemodel').style.display="none";

readall();
}

function closeupdatemodel(){
    document.getElementById('updatemodel').style.display="none";
        }

function deleted(id1){
document.getElementById('deletemodel').style.display="block";
var objd=data.find(rec=>rec.id===id1);
document.getElementById('id1').value=objd.id;
}

function yesdelete(){
        var id1=parseInt(document.getElementById('id1').value);
        var index=data.findIndex(rec=> rec.id===id1);
        data.splice(index,1)
        // console.log(data.filter(rec => rec.id !== id1))
        readall();
        document.getElementById('deletemodel').style.display="none";
}


function closedeletemodel(){
    document.getElementById('deletemodel').style.display="none";

        }
