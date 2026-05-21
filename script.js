// Add to Cart Alert

let buttons = document.querySelectorAll(".addCart");

buttons.forEach(button => {

    button.addEventListener("click", () => {
        alert("Item Added to Cart!");
    });

});


// Search Function

let searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function(){

    let searchValue = searchBox.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        let text = product.innerText.toLowerCase();

        if(text.includes(searchValue)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});
