buttonMenuOpened.addEventListener("click", function () {
    $("#buttonMenuOpened").removeClass("gamburgerOpen");
    $("#buttonMenuOpened").addClass("gamburgerClosed");
    $("#buttonMenuClosed").removeClass("gamburgerClosed");
    $("#buttonMenuClosed").addClass("gamburgerOpen");
    $("#dropdownMenuLogo").removeClass("HeaderOpened");
    $("#dropdownMenuLogo").addClass("HeaderClosed");
    $("#dropdownMenuPosition").removeClass("HeaderClosed");
    $("#dropdownMenuPosition").addClass("HeaderOpened");
    $("#menuSecondLayer").removeClass("HeaderClosed");
    $("#menuSecondLayer").addClass("HeaderOpened");
    $("#menuFirstLayer").removeClass("HeaderOpened");
    $("#menuFirstLayer").addClass("HeaderClosed");
});

buttonMenuClosed.addEventListener("click", function () {
    $("#buttonMenuClosed").removeClass("gamburgerOpen");
    $("#buttonMenuClosed").addClass("gamburgerClosed");
    $("#buttonMenuOpened").removeClass("gamburgerClosed");
    $("#buttonMenuOpened").addClass("gamburgerOpen");
    $("#dropdownMenuLogo").removeClass("HeaderClosed");
    $("#dropdownMenuLogo").addClass("HeaderOpened");
    $("#dropdownMenuPosition").removeClass("HeaderOpened");
    $("#dropdownMenuPosition").addClass("HeaderClosed");
    $("#menuSecondLayer").removeClass("HeaderOpened");
    $("#menuSecondLayer").addClass("HeaderClosed");
    $("#menuFirstLayer").removeClass("HeaderClosed");
    $("#menuFirstLayer").addClass("HeaderOpened");
});

paginationSelectorDropdown.addEventListener("change", function (event) {
    $("#paginationSelectorValue").text(event.target.value);
});


// $(document).ready(function () {
//     $(".pagination-selector-dropdown").click(function () {
//         $(this).find(".pagination-selector-dropdown-menu").stop().slideToggle("slow");
//     });
// });

