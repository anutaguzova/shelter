
let petsFile = await fetch("../../assets/pets.json");
let petsList = await petsFile.json();
let randomPet = petsList.sort(() => Math.round(Math.random() * 100) - 50);

function checkMediaQuery() {
    if (window.innerWidth >= 1280) {
        document.querySelector(".pets__cards_common").innerHTML = `
    <div class=" pets__cards slide">
                            <div class="pets__card ${randomPet[0].name}" id="0">
                                <img class="pets__image" alt="${randomPet[0].name}" src="${randomPet[0].img}">
                                <p class="pets__name">${randomPet[0].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[1].name}" id="1">
                                <img class="pets__image" alt="${randomPet[1].name}" src="${randomPet[1].img}">
                                <p class="pets__name">${randomPet[1].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[2].name}" id="2">
                                <img class="pets__image" alt="${randomPet[2].name}" src="${randomPet[2].img}">
                                <p class="pets__name">${randomPet[2].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                        </div>
    
                        <div class=" pets__cards slide">
                            <div class="pets__card ${randomPet[3].name}" id="3">
                                <img class="pets__image" alt="${randomPet[3].name}" src="${randomPet[3].img}">
                                <p class="pets__name">${randomPet[3].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[4].name}" id="4">
                                <img class="pets__image" alt="${randomPet[4].name}" src="${randomPet[4].img}">
                                <p class="pets__name">${randomPet[4].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[5].name}" id="5">
                                <img class="pets__image" alt="${randomPet[5].name}" src="${randomPet[5].img}">
                                <p class="pets__name">${randomPet[5].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                        </div>
    
                        <div class=" pets__cards slide">
                            <div class="pets__card ${randomPet[6].name}" id="6">
                                <img class="pets__image" alt="Freddie" src="${randomPet[6].img}">
                                <p class="pets__name">${randomPet[6].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[7].name}" id="7">
                                <img class="pets__image" alt="${randomPet[7].name}" src="${randomPet[7].img}">
                                <p class="pets__name">${randomPet[7].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                        </div>`
    } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        document.querySelector(".pets__cards_common").innerHTML = `
    <div class=" pets__cards slide">
                            <div class="pets__card ${randomPet[0].name}" id="0">
                                <img class="pets__image" alt="${randomPet[0].name}" src="${randomPet[0].img}">
                                <p class="pets__name">${randomPet[0].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[1].name}" id="1">
                                <img class="pets__image" alt="${randomPet[1].name}" src="${randomPet[1].img}">
                                <p class="pets__name">${randomPet[1].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                        
                        </div>
    
                        <div class=" pets__cards slide">
                        <div class="pets__card ${randomPet[2].name}" id="2">
                        <img class="pets__image" alt="${randomPet[2].name}" src="${randomPet[2].img}">
                        <p class="pets__name">${randomPet[2].name}</p>
                        <button type="button" class="pets__button">Learn more</button>
                    </div>
                            <div class="pets__card ${randomPet[3].name}" id="3">
                                <img class="pets__image" alt="${randomPet[3].name}" src="${randomPet[3].img}">
                                <p class="pets__name">${randomPet[3].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                           
                        </div>
                        <div class=" pets__cards slide">
                            <div class="pets__card ${randomPet[4].name}" id="4">
                                <img class="pets__image" alt="${randomPet[4].name}" src="${randomPet[4].img}">
                                <p class="pets__name">${randomPet[4].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[5].name}" id="5">
                                <img class="pets__image" alt="${randomPet[5].name}" src="${randomPet[5].img}">
                                <p class="pets__name">${randomPet[5].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                        </div>
    
                        <div class=" pets__cards slide">
                            <div class="pets__card ${randomPet[6].name}" id="6">
                                <img class="pets__image" alt="Freddie" src="${randomPet[6].img}">
                                <p class="pets__name">${randomPet[6].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                            <div class="pets__card ${randomPet[7].name}" id="7">
                                <img class="pets__image" alt="${randomPet[7].name}" src="${randomPet[7].img}">
                                <p class="pets__name">${randomPet[7].name}</p>
                                <button type="button" class="pets__button">Learn more</button>
                            </div>
                        </div>`
    } else {
        document.querySelector(".pets__cards_common").innerHTML = `
                 ${randomPet.map((el) => `
                 <div class=" pets__cards slide" id="${randomPet.indexOf(el)}">
                    <div class="pets__card ${el.name}">
                       <img class="pets__image" alt="${el.name}" src="${el.img}">
                       <p class="pets__name">${el.name}</p>
                       <button type="button" class="pets__button">Learn more</button>
                    </div>
                </div>`).join('')}`
    }
};


window.addEventListener('resize', checkMediaQuery);


document.querySelector(".pets__cards_common").innerHTML = `
<div class=" pets__cards slide">
                        <div class="pets__card ${randomPet[0].name}" id="0">
                            <img class="pets__image" alt="${randomPet[0].name}" src="${randomPet[0].img}">
                            <p class="pets__name">${randomPet[0].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                        <div class="pets__card ${randomPet[1].name}" id="1">
                            <img class="pets__image" alt="${randomPet[1].name}" src="${randomPet[1].img}">
                            <p class="pets__name">${randomPet[1].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                        <div class="pets__card ${randomPet[2].name}" id="2">
                            <img class="pets__image" alt="${randomPet[2].name}" src="${randomPet[2].img}">
                            <p class="pets__name">${randomPet[2].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                    </div>
                    <div class=" pets__cards slide">
                        <div class="pets__card ${randomPet[3].name}" id="3">
                            <img class="pets__image" alt="${randomPet[3].name}" src="${randomPet[3].img}">
                            <p class="pets__name">${randomPet[3].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                        <div class="pets__card ${randomPet[4].name}" id="4">
                            <img class="pets__image" alt="${randomPet[4].name}" src="${randomPet[4].img}">
                            <p class="pets__name">${randomPet[4].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                        <div class="pets__card ${randomPet[5].name}" id="5">
                            <img class="pets__image" alt="${randomPet[5].name}" src="${randomPet[5].img}">
                            <p class="pets__name">${randomPet[5].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                    </div>
                    <div class=" pets__cards slide">
                        <div class="pets__card ${randomPet[6].name}" id="6">
                            <img class="pets__image" alt="Freddie" src="${randomPet[6].img}">
                            <p class="pets__name">${randomPet[6].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                        <div class="pets__card ${randomPet[7].name}" id="7">
                            <img class="pets__image" alt="${randomPet[7].name}" src="${randomPet[7].img}">
                            <p class="pets__name">${randomPet[7].name}</p>
                            <button type="button" class="pets__button">Learn more</button>
                        </div>
                    </div>`



// carousel
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";

}

document.querySelector(".left").addEventListener("click", prevSlide);
document.querySelector(".right").addEventListener("click", nextSlide);







//  popup

let pets = document.querySelectorAll("div.pets__card");

pets.forEach(pet => {
    pet.addEventListener("click", () => {

        document.getElementById("popup_more").classList.add("visible"),
            document.documentElement.style.overflowY = "hidden",
            document.querySelector(".description").innerHTML = `
            <div class="description_image">
              <img src="${randomPet[pet.id].img}" alt="Pets">
            </div>
            <div class="description_content">
              <div class="description_name">${randomPet[pet.id].name}</div>
              <div class="description_type">${randomPet[pet.id].type} - ${randomPet[pet.id].breed}</div>
              <div class="description_more">${randomPet[pet.id].description}</div>
              <ul class="add_information" type="disc">
                <li>
                    <span class="add_information-title">Age: </span>
                    <span>${randomPet[pet.id].age}</span>
                </li>
                <li>
                    <span class="add_information-title">Inoculations: </span>
                    <span>${randomPet[pet.id].inoculations}</span>
                </li>
    
                <li>
                    <span class="add_information-title">Diseases: </span>
                    <span>${randomPet[pet.id].diseases}</span>
                </li>
                <li>
                    <span class="add_information-title">Parasites: </span>
                    <span>${randomPet[pet.id].parasites}</span>
                </li>
            </ul>
        </div>`
    })
});


document.querySelector(".close_result").addEventListener("click", function () {
    document.getElementById("popup_more").classList.remove("visible"),
        document.documentElement.style.overflowY = "visible"
});

document.querySelector(".close_result").addEventListener("mouseover", function () {
    document.querySelector(".close_result").style.backgroundColor = "#FDDCC4";
});

document.getElementById("popup_more").addEventListener("click", function (e) {
    const click = e.composedPath().includes(document.getElementById("more_content"));
    if (!click) {
        document.getElementById("popup_more").classList.remove("visible");
        document.documentElement.style.overflowY = "visible"
    }
});

document.getElementById("popup_more").addEventListener("mouseover", function (e) {
    const click = e.composedPath().includes(document.getElementById("more_content"));
    if (!click) {
        document.getElementById("popup_more").style.cursor = "pointer";
        document.querySelector(".close_result").style.backgroundColor = "#FDDCC4";
    } else {
        document.getElementById("popup_more").style.cursor = "auto";
        document.querySelector(".close_result").style.backgroundColor = "#FAFAFA";
    }

});