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

    // const goToProjectsFunction = function () {
    //     $projectFirst.addEventListener("click" , () => {
    //         $information.classList.add("active");

    //         $projectSecond.classList.add("active");
    //         $projectThird.classList.add("active");
    //         $projectFourth.classList.add("active");

    //     })
    // }
    // goToProjectsFunction();


// Acomodar Código , eliminar imagen dentro de information , ::root

{/* <img src="assets/image/icons/menu_black_24dp.svg" alt="Icon hamburger menu" class="toggleButon__img"> */}