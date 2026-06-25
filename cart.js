document.addEventListener("DOMContentLoaded", function(){

    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {
        button.addEventListener("click", function(){
            this.parentElement.remove();
            alert("Item removed from cart");
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
