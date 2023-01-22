let Container  = document.getElementById("menu-container");
let Order = JSON.parse(localStorage.getItem("Add-to-Cart")) || [];

function Display(data){
    let total = document.getElementById("total-price")
    Container.innerHTML = "";
    Order.forEach((product,index) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let desrc = document.createElement("p");
        let price = document.createElement("h4");
        let quantity = document.createElement("span");
        let Cancel = document.createElement("button");
        let increment = document.createElement("button");
        let decrement = document.createElement("button");

            quantity.textContent = product.quantity;
            Cancel.textContent = "Cancel";
            increment.textContent = "+";
            decrement.textContent = "-";
            image.src = product.image;
            name.textContent = product.name;
            desrc.textContent = product.desrc;
            price.textContent = product.price;

        Cancel.addEventListener("click", () =>{
            Order = Order.filter((element) =>{
            return element.id !== product.id;
            })
            localStorage.setItem("Add-to-Cart",JSON.stringify(Order))
            Display()
        });
        increment.addEventListener("click",() =>{
            product=product.quantity++
            localStorage.setItem("Add-to-Cart",JSON.stringify(Order))
            Display()
        });
        decrement.addEventListener("click",() =>{
            if(product.quantity>1){
            product=product.quantity--
            localStorage.setItem("Add-to-Cart",JSON.stringify(Order))
            Display()
            }
        });
        
        card.append(image,name,desrc,price,increment,quantity,decrement,Cancel);
        Container.append(card);
    });
    
    let sum = 0;
    for(let x=0; x<Order.length; x++){
        sum+=(Number(Order[x].price) * Number(Order[x].quantity));
    }
    total.textContent = sum;
}
Display();