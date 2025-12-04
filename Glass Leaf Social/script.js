
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let like = document.querySelectorAll('.like');
function pad(number){
  return number.toString().padStart(2, 0)
}

document.querySelectorAll('.postTime').forEach((posts)=>{
  posts.innerHTML = `${pad(hours)}:${pad(minutes)} ${(hours>=0 && hours<12)?'AM':'PM'}`;
})

like.forEach((reaction)=>{
  let liked = false;
  reaction.addEventListener('click', ()=>{
    if(liked){
      reaction.style.color = 'whitesmoke';
      reaction.style.textShadow = '0 0 3px black';
      reaction.style.animation = 'none';
    }
    else{
      reaction.style.animation = 'liked 200ms linear 1';
      reaction.style.color = 'red';
      reaction.style.textShadow = 'none';
    }
    liked = !liked;
  })
})

function toggleTheme(){
  document.querySelectorAll('body, #display, p a, .postHeading, footer, input').forEach((element)=>{
    element.classList.toggle('dark');
  })
}