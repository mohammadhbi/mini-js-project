function cardGenerator() {
  const cardHTML =`<div class="card">
            <h1>
                title card
            </h1>
            <p class="content">
                Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Fuga, tenetur.
            </p>
            <button class="delete-btn">delete</button>
          </div>`;
          document.getElementById('container').insertAdjacentHTML('beforeend', cardHTML);
}

document.getElementById('container').addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        event.target.parentElement.remove();
    }
});