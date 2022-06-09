// Change css class name to cool from hot
var el = document.getElementById('one');
el.className = 'cool';

// If there is an ele with 'hot' class, change the first one to 'complete'
var deh = document.getElementsByClassName('hot');
if (deh.length >= 1){
    var firstItem = deh[0];
    firstItem.className = 'complete';
}

// Add link to the ele with id=one
var first = document.getElementById('one');
var content = first.innerHTML;

first.innerHTML = '<a href="">' + content + '</a>';

// Add a new node and a text node to the first ul element
var newEl = document.createElement('li');
var newText = document.createTextNode('Salmon');

newEl.appendChild(newText); // add the 'newText' node to the'newEl' node so the it becomes its child node

var ulist = document.getElementsByTagName('ul')[0];

ulist.appendChild(newEl); // add newEl node to the first 'ul' ele in the whole web page

// Add an event to remove an item from the list
function getTarget(e){
    if (!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}
function itemDone(e){
    var target, parent, Gparent;
    target = getTarget(e);
    parent = target.parentNode;
    Gparent = target.parentNode.parentNode;
    Gparent.removeChild(parent);

    if (e.preventDefault){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var el = document.getElementById('shoppingList');
if (el.addEventListener){
    el.addEventListener('click', e => {
        itemDone(e);
    }, false);
} else{ 
    el.attachEvent('onclick', e => {
        itemDone(e);
    });
}