const removeCustomerButtons = document.querySelectorAll(".remove-customer-btn");

removeCustomerButtons.forEach(button => {
    button.addEventListener("click", function(){
        this.closest("tr").remove();
        alert("Customer removed!");
    });
});
