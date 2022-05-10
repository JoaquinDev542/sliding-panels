const $toggleButton = document.querySelector(".toggleButton");
const $list = document.querySelector(".list");

const $projects = document.querySelector(".projects");

const $projectFirst = document.querySelector(".project--first");
const $projectSecond = document.querySelector(".project--second");
const $projectThird = document.querySelector(".project--third");
const $projectFourth = document.querySelector(".project--fourth");

const $information = document.querySelector(".information");

    const toggleButtonFunction = function () {
        $toggleButton.addEventListener("click" , () => {
            $projects.classList.toggle("active");
            $list.classList.toggle("active");
        })
    }

    toggleButtonFunction();


// Transition transition en las imagenes background-color