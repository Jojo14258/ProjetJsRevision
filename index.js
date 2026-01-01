
function ajoutImages(){
    const elt = document.querySelector("aside");
    for(let i = 1; i < 7; i++){
        const img = document.createElement('img');
        img.src = `/img/img${i}.jpg`;
        img.width = 50;
        img.height = 50;
        elt.appendChild(img);
    }

}

ajoutImages();