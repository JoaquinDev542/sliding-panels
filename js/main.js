// Obtener Elementos HTML

// ToggleButton y List 
const $toggleButton = document.querySelector(".toggleButton");
const $list = document.querySelector(".list");

// ToggleButtonImg
const $toggleButtonImg = document.querySelector(".toggleButton__img");

// Projects
const $projects = document.querySelector(".projects");

// ProjectContent
const $projectContent = document.querySelector(".project__content");

// ProjectFirst / ProjectSecond / ProjectThird / ProjectFourth
const $projectFirst = document.querySelector(".project--first");
const $projectSecond = document.querySelector(".project--second");
const $projectThird = document.querySelector(".project--third");
const $projectFourth = document.querySelector(".project--fourth");

// Information
const $information = document.querySelector(".information");

// FUNCTION ToggleButton
    const toggleButtonFunction = function () {
        $toggleButton.addEventListener("click" , () => {
            $projects.classList.toggle("active");
            $list.classList.toggle("active");

            toggleButtonImgChangeFunction();            

        })
    }
    toggleButtonFunction();

// FUNCTION  
    const toggleButtonImgChangeFunction = function () {
        $toggleButtonImg.src = "assets/image/icons/close_black_24dp.svg";
    }


//  eliminar imagen dentro de information , acomodar código html,js 
