document.addEventListener("DOMContentLoaded", function(){

    const checkoutForm = document.getElementById("checkoutForm");

    if(checkoutForm){
        checkoutForm.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Order placed successfully!");
        });
    }

    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {
        button.addEventListener("click", function(){
            this.parentElement.remove();
        });
    });

    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const quantity = document.getElementById("quantity");

    if(minus && plus && quantity){

        minus.addEventListener("click", function(){
            if(quantity.value > 1){
                quantity.value--;
            }
        });

        plus.addEventListener("click", function(){
            quantity.value++;
        });

    }

});
