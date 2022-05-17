// Obtener Elementos HTML

// ToggleButton y List 
const $toggleButton = document.querySelector(".toggleButton");
const $list = document.querySelector(".list");

// ToggleButtonImg
const $toggleButtonImg = document.querySelector(".toggleButton__img");

// Projects
const $projects = document.querySelector(".projects");

// ProjectInfo
const $projectInfo = document.querySelector(".project__info");

// ProjectFirst / ProjectSecond / ProjectThird / ProjectFourth
const $projectFirst = document.querySelector(".project--first");
const $projectSecond = document.querySelector(".project--second");
const $projectThird = document.querySelector(".project--third");
const $projectFourth = document.querySelector(".project--fourth");

// Project Subtitle
const $projectSubtitle = document.querySelector(".project__subtitle");

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

    const openProjectsFunction = function () {
        $projectFirst.addEventListener("click" , ()=> {
        //     $projectSecond.classList.add("active");
        //     $projectThird.classList.add("active");
        //     $projectFourth.classList.add("active");

        //     $information.classList.add("active");
        //     $projectInfo.classList.add("active");
        //     $projectSubtitle.classList.add("active");
        })

        // $projectSecond.addEventListener("click" , ()=> {
        //     $projectFirst.classList.toggle("active");
        //     $projectThird.classList.add("active");
        //     $projectFourth.classList.add("active");
        // })
    }
    openProjectsFunction();


//  ARREGLAR
