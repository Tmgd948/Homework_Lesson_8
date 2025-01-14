let products = [
    {
        name: "shirt",
        type: "short sleeve",
        price: 10
    },
    {
        name: "shirt",
        type: "long sleeve",
        price: 15
    },
    {
        name: "pants",
        type: "shorts",
        price: 20
    },
    {
        name: "pants",
        type: "jeans",
        price: 25
    },
    {
        name: "socks",
        type: "winter",
        price: 5
    },
    {
        name: "gloves",
        type: "winter",
        price: 5
    },
    {
        name: "shoes",
        type: "boots",
        price: 25
    },
    {
        name: "shoes",
        type: "slippers",
        price: 10
    },
    {
        name: "suit",
        type: "hiking",
        price: 30
    }
]

const priceInput = document.getElementById("priceInput");
const mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);


function priceFilter() {

    mainDiv.innerText = "";

    for (let i = 0; i < products.length; i++) {
        if (products[i].price <= priceInput.value) {
            
            const newDiv = document.createElement("div");
            newDiv.innerText = "product: " + products[i].name + " type: " + products[i].type + " price: " + products[i].price;
            newDiv.style.margin = "10px";
            newDiv.style.padding = "5px";
            newDiv.style.border = "solid";
            newDiv.style.borderWidth = "2px";
            mainDiv.appendChild(newDiv);
        }
    }

}

priceInput.oninput = priceFilter;