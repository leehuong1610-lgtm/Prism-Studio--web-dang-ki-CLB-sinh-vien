const form = document.querySelector("form");
const alertBox = document.getElementById("successAlert");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alertBox.style.display = "flex";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 1850);
});
