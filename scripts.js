 let productos = [
    {
        tipo:type,
        nombre:name,
        descripcion:description,

    }
 ]
 
 
 
 
 /*
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
   
   let category= document.getElementById('product_category').value;
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
                                    <b>`+category+`</b> <br>
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
function mostrarProducto(id){
 //   let content = document.getElementById('principal');
 //   let producto = productos [id]
    principal.innerHTML= ` 
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">Shop item template</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">$45.00</span>
                            <span>$40.00</span>
                        </div>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div class="d-flex">
                             <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" /> 
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <span class="glyphicon glyphicon-heart"></span>
                                Añadir a favoritos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    `
    
}
function borrar(){
    content.innerHTML=`<p>PRUEBA</P> <button onclick="menuPrincipal()"></button>`
}



//item_menu
