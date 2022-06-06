let petsJson = await fetch("../../assets/pets.json");
let petsList = await petsJson.json();

let pets = document.querySelectorAll(".pets__card");


//  popup
pets.forEach(pet => {
    pet.addEventListener("click", function () {

        document.getElementById("popup_more").classList.add("visible"),
            document.documentElement.style.overflowY = "hidden",
            document.querySelector(".description").innerHTML = `
            <div class="description_image">
              <img src="${petsList[pet.id].img}" alt="Pets">
            </div>
            <div class="description_content">
              <div class="description_name">${petsList[pet.id].name}</div>
              <div class="description_type">${petsList[pet.id].type} - ${petsList[pet.id].breed}</div>
              <div class="description_more">${petsList[pet.id].description}</div>
              <ul class="add_information" type="disc">
                <li>
                    <span class="add_information-title">Age: </span>
                    <span>${petsList[pet.id].age}</span>
                </li>
                <li>
                    <span class="add_information-title">Inoculations: </span>
                    <span>${petsList[pet.id].inoculations}</span>
                </li>
    
                <li>
                    <span class="add_information-title">Diseases: </span>
                    <span>${petsList[pet.id].diseases}</span>
                </li>
                <li>
                    <span class="add_information-title">Parasites: </span>
                    <span>${petsList[pet.id].parasites}</span>
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
        document.getElementById("popup_more").style.cursor= "pointer";
        document.querySelector(".close_result").style.backgroundColor = "#FDDCC4";
    } else {
        document.getElementById("popup_more").style.cursor= "auto";
        document.querySelector(".close_result").style.backgroundColor = "#FAFAFA";
    }

});