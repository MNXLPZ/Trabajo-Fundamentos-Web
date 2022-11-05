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


<div class="d-flex justify-content-center small text-warning mb-2">
        <div class="bi-star-fill"></div>
</div>

