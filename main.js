let box = document.querySelectorAll('.box')
let body = document.querySelector('body')
let h = document.querySelector('h1')

// window.addEventListener('scroll', scrollFunction)

// function scrollFunction(){
// let scrollY = window.scrollY
// // let a = window
// if(scrollY >= 2000 ){
//     let div = document.createElement('div')
//     body.appendChild(div)
//     div.innerHTML = `<h2> Content </h2>`
//     div.classList.add('box', 'boxShow') 

// }
// }
// let animation = document.querySelectorAll('.animation')


window.addEventListener("scroll", scrollAnimation)
function scrollAnimation(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i< box.length; i++){ 
        let anim = box[i].offsetTop;
        if((anim -500) < scrollTop)   {
            box[i].classList.add('boxLeft');
        }
    }
//     for(let x = 0; x<box.length; x++){
//       if ( box[x%2==0]){
// box.classList.add('boxRight')
// }else{
//     box.classList.add('boxLeft')
// }
//     }
}

//     let scrollY= window.scrollY
//     if(scrollY >= 500){
// box.classList.add('boxShow')
// box.classList.remove('boxHide')
    // }
/*function scrollFunction(){
let scrollY = window.scrollY
if(scrollY > 2000){
box.classList.add('boxShow')
box.classList.remove('hidden')

}else{ box.classList.remove('boxShow')
box.classList.add('hidden')

}
}*/
// function scrollFunction(){

// var position = box.getBoundingClientRect();

// // checking whether fully visible
// box.forEach(e => {
    
//     if(position.top >= 0 && position.bottom <= window.innerHeight) {
//         console.log('Element is fully visible in screen');
//     }
    
//     // checking for partial visibility
//     if(position.top < window.innerHeight && position.bottom >= 0) {
//         console.log('Element is partially visible in screen');
//     }
// });
// };