function nuevoProducto(titulo, descripcion,  categoria, ingredientes,) {

    let producto = {

        titulo: titulo,
        descripcion: descripcion,
        categoria: categoria,
        ingredientes: ingredientes,

        toString: function(){
            return 'titulo:'+this.titulo+' descripcion:'+this.descripcion+' categoria:'+this.categoria;
        }
    }

    return producto;
}


let productos = [ 
    nuevoProducto('Agua', 'Botella de agua', 'Bebida', ['agua']), 
    nuevoProducto('Arroz', 'Arroz con tomate', 'Plato principal',['arroz', 'tomate'] ),
    nuevoProducto('Natillas', 'Natillas de vainilla', 'Postre', ['leche', 'azucar', 'vainilla']),
    nuevoProducto('Espaguetis', 'Espaguetis con tomate', 'Plato Principal',['espaguetis', 'tomate'] )
];
   
 
 
 
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
function mostrarProducto(indice){
   let content = document.getElementById('principal');
 //   let producto = productos [id]
 content.innerHTML= ` 
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">`+productos[indice].titulo+`</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">`+productos[indice].descripcion+`</span>
                            <span>$40.00</span>
                        </div>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div class="d-flex">
                             <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" /> 
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <span class="glyphicon glyphicon-heart"></span>
                                Añadir a favoritos
                            </button>
                            <button class="btn btn-outline-dark flex-shrink-0" type="button" onclick="borrarProducto(`+indice+`)">
                                <span class="glyphicon glyphicon-heart">Borrar</span>
                            </button>
                            <button class="btn btn-outline-dark flex-shrink-0" type="button" onclick="volver()">
                                <span class="glyphicon glyphicon-heart">Volver</span>
                        </button>                            
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    `
    
}

function mostrarTodos(){
    let content = document.getElementById('item_menu');
    let indice=0;
    for (let producto of productos) {
        content.innerHTML += `
            <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder"><a onclick="mostrarProducto(`+indice+`)" href="#">`+producto.titulo+`</a></h5>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="mostrarProducto(`+indice+`)" href="#">Mas info</a></div>
                </div>
            </div>
        </div> `;
    indice=indice+1;
    }
}

function crearElemento() {
    let content = document.getElementById('principal');
    content.innerHTML= `        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 ">
    <form id="product_form" action="" role="form">
        <div class="form-group">
            <label for="tipo_producto" name="tipo_producto">Categoría de producto:</label>
            <input type="text" name="categoria_producto" class="form-control" size="25" id="product_category" placeholder="Ingresa el tipo de producto a añadir">
        </div>
        <div class="form-group">
            <label for="nombre_producto" name="nombre_producto">Nombre:</label>
            <input type="text" name="nombre_producto" class="form-control" id="product_name" placeholder="Ingresa el nombre del producto">
        </div>
        <div class="form-group">
            <label for="descripción_producto" name="descripción_producto">Descripción del producto:</label>
            <input type="text" name="descripción_producto" class="form-control" id="product_description" placeholder="Ingresa la descripción">
        </div> <br>
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="guardarProducto()" type="submit"  href="#"><span><b>+</b></span> Añadir producto</a></div>
    </form>   
</div>`;
}




function borrar(){
    content.innerHTML=`<p>PRUEBA</P> <button onclick="menuPrincipal()"></button>`
}

function borrarProducto(indice){
    if (confirm("¿Esta seguro de que quiere borrar el elemento?"))
    {
        productos.splice(indice,1);
        volver();
    }   

}

function volver(){
    let content = document.getElementById('principal');
    content.innerHTML= ` 
    <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5">
                    <h2 class="fw-bolder mb-4">Productos</h2>
                    <div class="row text-center mb-10">
                        <div class="col-mb-12 ">
                            <a class="btn btn-outline-dark mt-auto" onclick="crearElemento()" href="#">Añadir Producto</a>
                        </div>
                    </div>
                    <div class="row text-center mb-10">
                        <div class="col-mb-12 ">&nbsp;</div>
                    </div>
                    <div id="item_menu" class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    </div>
                </div>
            </section>`;
    mostrarTodos();
}

function guardarProducto(){
    // leer los campos del formulario
    let name = document.getElementById('product_name').value;
    let category = document.getElementById('product_category').value;
    let description = document.getElementById('product_description').value;
    let ingredientes = [];
    // nuevoProducto
    let nuevo = nuevoProducto(name,description,category,ingredientes);
    // add a Productos
    productos.push(nuevo);
    volver();
}




mostrarTodos();

//item_menu
