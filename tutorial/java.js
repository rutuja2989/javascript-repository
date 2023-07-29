// // alert(1)
// console.dir(document);
// console.log(document.URL);
// console.log(document.forms);
// console.log(document.title);
// // document.title=123;
// console.log(document.all);
// // console.log(document.all[19]);--> not a right way to access the content
// // document.all[19].textContent="Hello"
// console.log(document.forms)
// console.log(document.links)
// console.log(document.head)
// console.log(document.body)
// console.log(document.images)

// console.log(document.getElementById("Headder"))
// let headertitle=document.getElementById("Headder")
// headertitle.textContent="HEllO"
// headertitle.innerText="Goodbye"
// headertitle.innerHTML="<h2>Hii</h2>"
// headertitle.style.borderBottom="solid 3px black"

//get elements by class name
// let items=document.getElementsByClassName('navbar')
// console.log(items)
// items.style.fontWeight="bold"

// let li=document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])
// li[1].textContent="hello 2";
// li[1].style.fontSize='bold';
// // li[1].style.backgroundColor='yellow'
// // li[1].style.color='black'

// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor="yellow";
//     li[i].style.color="black";
// }

// let head=document.querySelector('#Headder');
// head.style.borderBottom='solid 4px #ccc';
 
// let titles=document.querySelectorAll('.navbar')
// console.log(titles)

// let itemlist=document.querySelector('#items')
// itemlist.parentElement.style.backgroundColor="yellow"
// console.log(itemlist);
//  console.log(itemlist.parentNode);
// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentElement);
// console.log(itemlist.parentElement.parentElement);
// itemlist[0].style.color="yellow";

// childnodes
// console.log(itemlist.childNodes)
// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor="yellow";
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent="newtext4";
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color="blue"

// creating a new element using javascript
// let newdiv=document.createElement('div');
// // to add class
// newdiv.className='hello';
// // to add id
// newdiv.id='newid';

// to add attribute
// newdiv.setAttribute('title','newtitle',)
// console.log(newdiv)

// creating and adding text to the newly created div

// let newtext=document.createTextNode('Hello Rutu');

//adding text to div
// newdiv.appendChild(newtext)

// let container=document.querySelector('main h3')
// let h1=document.querySelector('main div')


//  let button=document.getElementById('button').addEventListener('click',buttonclick)
// function buttonclick(e){
// document.getElementById('Headder').textContent="changed"
// console.log(e)
// console.log(e.target);
// console.log(e.target.id)
// console.log(e.target.className)
// console.log(e.target.classList)
// let output=document.getElementById('output')
// output.innerHTML='<h3>'+e.target.id+'</h3>';
// // console.log(e.type)
// console.log(e.clientX)//position from the browser window in x direction
// console.log(e.clientY)//position from the browser window in y direction
// console.log(e.offsetX)//from acatual element in x direction
// console.log(e.offsetY)//from acatual element in x direction
// console.log(e.altkey)
// console.log(e.ctrlkey)
// console.log(e.shiftkey)
// }

// let button =document.getElementById('button').addEventListener('click',runevent)
// let button =document.getElementById('button').addEventListener('dblclick',runevent)
// let button =document.getElementById('button').addEventListener('mouseup',runevent)
// let button =document.getElementById('button').addEventListener('mousedown',runevent)

// let iteminput=document.querySelector('input[type="text"]');
// let form=document.querySelector('form')
// iteminput.addEventListener('keydown',runevent)
// iteminput.addEventListener('keyup',runevent)
// iteminput.addEventListener('keypress',runevent)

// iteminput.addEventListener('focus',runevent)
// iteminput.addEventListener('blur',runevent)
// iteminput.addEventListener('cut',runevent)
// iteminput.addEventListener('paste',runevent)
// iteminput.addEventListener('input',runevent)



// let box=document.getElementById('box');
// box.addEventListener('mouseenter',runevent)
// box.addEventListener('mouseover',runevent)
// box.addEventListener('mouseout',runevent)
// box.addEventListener('mouseleave',runevent)
// box.addEventListener('mousemove',runevent)
// form.addEventListener('submit',runevent)
// function runevent(e){
    // e.preventDefault();
    // console.log('EVENT TYPE: '+e.type);
    // output.innerHTML='<h3>Mouseex'+e.offsetX +'</h3><h3>'+e.offsetY+'</h3>';
    // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+")";
//  console.log(e.target.value)
//  output.innerHTML='<h3>'+e.target.value+'</h3>'
// }