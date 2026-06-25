document.addEventListener("DOMContentLoaded", function(){

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            if(!this.id){
                alert("Product added to cart!");
            }
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
