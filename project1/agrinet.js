//to bring the popup
const modal = document.querySelector("#modal");
function closeModal() {
    modal.style.display = "none";
    document.getElementById("number").value = "";

}
function openModal() {
    modal.style.display = "block";
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
 function openModal(plan, price) {
            // Set the modal content based on the selected plan
            document.getElementById("selectedPlan").textContent = plan;
            document.getElementById("selectedprice").textContent =price;
            
            // Show the modal
            modal.style.display = "flex";
        }
//code group 2 to make the button funtional

/*document.getElementById('Lion').addEventListener('click', function () {
    const lion = document.getElementById("lion").textContent;
    document.getElementById("play").textContent = lion;
    return;

});
*/