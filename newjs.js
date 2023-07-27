// let form=document.getElementById('addform')
// let itemlist=document.getElementById('items')
// let filter=document.getElementById('filter');
// itemlist.addEventListener('click',removeitem)
// filter.addEventListener('keyup',filterdata)
// form.addEventListener('submit',addItem);

// function addItem(e){
//     e.preventDefalult();
//     let newitem=document.getElementById('item').value;
//     let li=document.createElement('li');
//     newitem.className='list-group-item';
//     li.appendChild(document.createTextNode(newitem));
//     let deletebtn=document.createElement('button')
//     deletebtn.className='btn btn-danger btn-sm float-right delete';
//     deletebtn.appendChild(document.createTextNode('x'));
//     li.appendChild(deletebtn)
//     itemlist.appendChild(li);
// }

// function removeitem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             let li=e.target.parentElement;
//             itemlist.removeChild(li);
//         }
//     }
// }

// function filterdata(e){
//     let text=e.target.value.toLowerCase()
//     let items=itemlist.getElementsByTagName('li');
//     Array.from(items).forEach(function(item){
//         let Itemname=item.firstChild.textContent;
//     if(Itemname.toLowerCase().indexOf(text) != -1){
//         item.style.display='block';
//     }
//     else{
//         item.style.display='none';
//     }
//     });
// }



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  text=document.createTextNode(newItem)
  li.appendChild(text);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  let xmark=document.createTextNode('X')
  deleteBtn.appendChild(xmark);

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}