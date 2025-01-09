/*let div = document.querySelector('div');

div.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    
    div.style.color = 'red';
}

div.ondblclick = (evt1) => {
    console.log(evt1);
    console.log(evt1.type);
    
    div.style.color = 'black';
}

let btn = document.querySelector('#btn');

btn.addEventListener('mouse',()=>{
    console.log('Button Clicked');
    btn.style.backgroundColor ='red';
})

// toogle button
let body = document.querySelector('body');
let mode = document.querySelector('#mode');
let currMode = 'light';
mode.addEventListener('click',() => {
    if(currMode==='light') {
        body.style.backgroundColor = 'black';
        currMode = 'black';
    }
    else {
        body.style.backgroundColor = 'white';
        currMode ='light';
    }
})*/

// let disco = document.querySelector('.disco');
// let body = document.querySelector('body');
let audio = document.querySelector('audio');

// let audioAllowed = false;

// document.body.addEventListener('click', () => {
//   audioAllowed = true;
// });

// document.addEventListener('mouseover',()=>{
//     document.style.animation = 'disco 0.5s infinite';
//     audio.currentTime = 0;
//     audio.play();
// })

// document.addEventListener('mouseout', () => {
//     document.style.animation = '';
//     audio.pause();
//   });


document.addEventListener('mouseover', () => {
    document.body.style.animation = 'disco 0.5s infinite';
    audio.currentTime = 0; // Restart audio
    audio.play().catch(err => console.error('Audio play error:', err)); // Handle autoplay issues
  });

  document.addEventListener('mouseout', () => {
    document.body.style.animation = ''; // Stop the disco animation
    audio.pause(); // Pause the audio
  });