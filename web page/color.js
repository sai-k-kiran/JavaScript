const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Shows which element you clicked on
// grandparent.addEventListener('click', e =>{
//     console.log(e.target)
// })

// Event bubbling
grandparent.addEventListener('click', e =>{
    console.log('Grandparent');
})
parent.addEventListener('click',e =>{
    console.log('parent');
})
child.addEventListener('click', e =>{
    console.log('Child');
})
document.addEventListener('click', e =>{
    console.log("White space");
})

// Bubbling wont happen if child is clicked. Only child gets printed out
// child.addEventListener('click', e =>{
//     console.log('Child'); e.stopPropagation();
// })

// Parent will run only one time, even if you click on it or in bubbling
// parent.addEventListener('click', e =>{
//     console.log('parent')}, { once:true };
// )

// You can pass a Fn to print 'HI' instead of 'parent'

// parent.addEventListener('click', e => {   // This one will not work with removeEventListener, use below one for that
//     printHi() , e.stopPropagation();
// })

// OR

// function printHi(){
//     console.log('HI');
// }
// parent.addEventListener('click', printHi)
// setTimeout(() => {
//     parent.removeEventListener('click', printHi)
// }, 5000)

// Add eventListener to mutilple same elements, will print 'Multip..' for each div element
// const divs = document.querySelectorAll('div');  // Will bubble
// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log('Multiple event');
//     })
// })

// OR

// document.addEventListener('click', e => {  // Will not bubble
//     if (e.target.matches('div')){
//         console.log('Muliple event');
//     }
// })

// Same as above but in a Fn
// function addglobalEventListenener(type, selector, callback){
//     document.addEventListener(type, e => {
//         if (e.target.matches(selector)) callback(e)
//     })
// }