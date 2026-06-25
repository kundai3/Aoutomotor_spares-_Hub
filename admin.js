const productForm = document.getElementById("productForm");

if(productForm){
    productForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Product added successfully!");
    });
}

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {
    button.addEventListener("click", function(){
        this.closest("tr").remove();
        alert("Product deleted!");
    });
});
