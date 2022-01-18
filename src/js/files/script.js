// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
    const togggleButton = document.querySelector(".sidebar-toggle__button");
    const sidebar = document.querySelector(".sidebar");
    const searchContainer = document.querySelector(".search__container")

    togggleButton.addEventListener("click", showSidebar);

    function showSidebar() {    
        sidebar.classList.toggle("sidebar__active");
    }

