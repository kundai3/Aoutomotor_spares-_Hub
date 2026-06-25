const cancelButtons = document.querySelectorAll(".cancel-btn");

cancelButtons.forEach(button => {
    button.addEventListener("click", function(){
        this.closest("tr").remove();
        alert("Order cancelled!");
    });
});

const statusSelects = document.querySelectorAll(".status-select");

statusSelects.forEach(select => {
    select.addEventListener("change", function(){
        alert("Order status updated to " + this.value);
    });
});
