const actionButton = document.getElementById("actionButton");

if (actionButton) {
    actionButton.addEventListener("click", () => {
        actionButton.textContent = "Clicked!";
    });
}
