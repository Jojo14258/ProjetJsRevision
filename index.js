let selection1 = null;
let selection2 = null;

function ajoutImages(){
    const elt = document.querySelector("aside");
    fetch('https://api.pexels.com/v1/search?query=capitalism', {headers : {Authorization: 'b52OW4SeRA6CA1G4HagDQ0BgxnmIiUSCorY6UNQTj9px8l8fm8QyiXFW'} })
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < 6; i++){
                const img = document.createElement('img');
                
                img.src = data.photos[i].src.small;
                img.width = 50;
                img.height = 50;
                
                
                elt.appendChild(img);
            }
            
        })
        .catch(error => {
            console.error('Erreur lors du chargement des images:', error);
            for(let i = 1; i <= 6; i++){
                const img = document.createElement('img');
                img.src = `/img/img${i}.jpg`;
                img.width = 50;
                img.height = 50;
                elt.appendChild(img);
            }
        });
 

}

function ajoutImagesCentre(){
    const elt = document.querySelector("main");
    for(let i = 1; i<5; i++){
        const img = document.createElement('img');
        img.src = `/img/img${i}.jpg`;
        img.width = 50;
        img.height = 50;
        elt.appendChild(img);
    }
}

function addEventListenerGauche(){
    parent = document.querySelector("aside");
    parent.addEventListener('click', function(event){
    console.log(event.target.tagName);
    if(event.target.tagName === 'IMG'){
        if(selection1 != null){
            selection1.classList.remove('selected');
        }
        console.log(event.target);
        selection1 = event.target;
        selection1.classList.add('selected');

        if(selection2 != null){
            main = document.querySelector("main");
            enfants = main.children;
            for(let i = 0; i < enfants.length; i++){
                if(enfants[i].classList.contains("selected")){
                    var cloneSelection1 = selection1.cloneNode(true);
                    main.replaceChild(cloneSelection1, enfants[i]);
                    
                    selection1.classList.remove("selected");
                    selection1 = null;
                    cloneSelection1.classList.remove("selected");
                    selection2 = null;
                }
            }
        }
    }
    })
}

function addEventListenerCentre(){
     parent = document.querySelector("main");
    parent.addEventListener('click', function(event){
    console.log(event.target.tagName);
    if(event.target.tagName === 'IMG'){
        if(selection2 != null){
            selection2.classList.remove('selected');
        }
      
        selection2 = event.target;
        selection2.classList.add('selected');

         if(selection1 != null){
            main = document.querySelector("main");
            enfants = main.children;
            for(let i = 0; i < enfants.length; i++){
                if(enfants[i].classList.contains("selected")){
                    var cloneSelection1 = selection1.cloneNode(true);
                    main.replaceChild(cloneSelection1, enfants[i]);
                    
                    selection1.classList.remove("selected");
                    selection1 = null;
                    cloneSelection1.classList.remove("selected");
                    selection2 = null;
                }
            }
        }
    }
    })
}
ajoutImages();
ajoutImagesCentre();
addEventListenerGauche();
addEventListenerCentre();