const url = `https://63cad53df36cbbdfc761442b.mockapi.io/hot-grill-products`;

async function FetchData(){
try{
    let request = await fetch(url);
    request = await request.json();
    // console.log(request)
    // console.log(request.data)
    Display(request)
}catch(error){
    console.log(error);
}
}
FetchData();


let Container  = document.getElementById("menu-container");
let MyOrder = JSON.parse(localStorage.getItem("Add to Cart")) || [];

function Display(data){
    Container.innerHTML = "";
    data.forEach((product) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let desrc = document.createElement("p");
        let price = document.createElement("h4");
        let add = document.createElement("button");

            add.textContent = "Add to Cart";
            image.src = product.image;
            name.textContent = product.name;
            desrc.textContent = product.desrc;
            price.textContent = product.price;

        add.addEventListener("click",() =>{
            if(checkOrder(product)){
            alert("Product Already in Card");
            }else{
            MyOrder.push(product);
            localStorage.setItem("Add to Cart",JSON.stringify(MyOrder))
            alert("Product Add");
            }
        });
        
        card.append(image,name,desrc,price,add);
        Container.append(card);
    });
}

function checkOrder(product){
for(let x=0; x<MyOrder.length; x++){
    if(MyOrder[x].id === product.id){
        return true
    }
}
return false
}