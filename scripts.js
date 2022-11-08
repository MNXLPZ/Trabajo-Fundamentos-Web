    /*
class dish {
    constructor(name,description,ingredients,price) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.price = price;
    }
Valoration(number)
    if (number=1) {
        let stars = document.getElementById('valoration')
        stars.innerHTML= '<div class="d-flex justify-content-center small text-warning mb-2"><div class="bi-star-fill"></div></div>'
    }
    if (number=2) {
        let stars = document.getElementById('valoration')
        stars.innerHTML= '<div class="d-flex justify-content-center small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>'
    }
    if (number=3) {
        let stars = document.getElementById('valoration')
        stars.innerHTML= '<div class="d-flex justify-content-center small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>'
    }
    if (number=4) {
        let stars = document.getElementById('valoration')
        stars.innerHTML= '<div class="d-flex justify-content-center small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>'
    }
    if (number=5) {
        let stars = document.getElementById('valoration')
        stars.innerHTML= '<div class="d-flex justify-content-center small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>'
    } 
}
*/ function getInfoForm() {
//        const formulario =document.getElementById(product_form);
//        let productFormData = new FormData(formulario);
//        let productFormRef = document.getElementById("item_menu");
   
   let type= document.getElementById('product_type').value;
   let name= document.getElementById('product_name').value;
   let description= document.getElementById('product_description').value;
   let content = document.getElementById('item_menu');
   content.innerHTML += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">`+ name +`</h5>
                                    <b>`+type+`</b>
                                    <!-- Product price-->
                                    `+ description +`
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Añadir a favoritos</a></div>
                            </div>
                        </div>
                    </div>
   `

}
function menuPrincipal(){
    let content=document.getElementById("principal");
    
}

item_menu


//item_menu
