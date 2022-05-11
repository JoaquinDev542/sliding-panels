const $toggleButton = document.querySelector(".toggleButton");
const $list = document.querySelector(".list");

const $toggleButtonImg = document.querySelector(".toggleButton__img");

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

            toggleButtonImgChangeFunction();
        })
    }
    toggleButtonFunction();

    const toggleButtonImgChangeFunction = function () {
        // $toggleButtonImg
        $toggleButtonImg.src = "assets/image/icons/close_black_24dp.svg";
    }

    // const toggleButtonImgBackFunction = function () {
    //     $toggleButtonImg.src = "assets/image/icons/menu_black_24dp.svg";
    // }
    // toggleButtonImgBackFunction();

    // const goToProjectsFunction = function () {
    //     $projectFirst.addEventListener("click" , () => {
    //         $information.classList.add("active");

    //         $projectSecond.classList.add("active");
    //         $projectThird.classList.add("active");
    //         $projectFourth.classList.add("active");

    //     })
    // }
    // goToProjectsFunction();


//  eliminar imagen dentro de information , ::root

