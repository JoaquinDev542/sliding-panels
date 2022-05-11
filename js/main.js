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

    // const toggleButtonImgBackFunction = function () {
    //     $toggleButton.src ="assets/image/icons/menu_black_24dp.svg";
    // }
    // toggleButtonImgBackFunction();



    // $toggleButtonImg.addEventListener("click" , () => {
    //     $toggleButtonImg.src = "assets/image/icons/menu_black_24dp.svg";
    // })

    const toggleButtonImgBackFunction = function () {
        $toggleButtonImg.src = "assets/image/icons/menu_black_24dp.svg";
    }

    // const goToProjectsFunction = function () {
    //     $projectFirst.addEventListener("click" , () => {
    //         $information.classList.add("active");

    //         $projectSecond.classList.add("active");
    //         $projectThird.classList.add("active");
    //         $projectFourth.classList.add("active");

    //         $projectContent.classList.add("active");

    //     })
    // }
    // goToProjectsFunction();


//  eliminar imagen dentro de information , acomodar código html,js 
