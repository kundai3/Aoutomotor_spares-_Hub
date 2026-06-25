document.addEventListener("DOMContentLoaded", function(){

    const buttons = document.querySelectorAll("button");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const products = document.querySelectorAll(".product-card");

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            alert("Product added to cart!");
        });
    });

    if(searchInput){
        searchInput.addEventListener("keyup", function(){
            let value = this.value.toLowerCase();

            products.forEach(product => {
                let name = product.querySelector("h3").textContent.toLowerCase();

                if(name.includes(value)){
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    }

    if(categoryFilter){
        categoryFilter.addEventListener("change", function(){
            let category = this.value;

            products.forEach(product => {
                if(category === "all" || product.dataset.category === category){
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    }

});
