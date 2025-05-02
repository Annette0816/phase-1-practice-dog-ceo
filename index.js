document.addEventListener("DOMContentLoaded", ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const dropdown = document.getElementById("breed-dropdown");
    let allBreeds = [];

    fetch(imgUrl)
    .then(res=>res.json())
    .then(data =>{
        data.message.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            imageContainer.appendChild(img);
        });
    });

    fetch(breedUrl)
    .then(res=>res.json())
    .then(data=>{
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds)
    });

    function renderBreeds(breeds) {
        breedList.innerHTML="";
        breeds.forEach(breed=>{
            const li = document.createElement("li");
            li.textContent= breed;

            li.addEventListener("click", ()=>{
                li.style.color="purple";
            });
            breedList.appendChild(li);
        });
    }

    dropdown.addEventListener("change",(event)=>{
        const selectedLetter = event.target.value;
        const filtered= allBreeds.filter(breed=>breed.startsWith(selectedLetter));
        renderBreeds(filtered);
    })
})