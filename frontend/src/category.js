class Category {
    //able to access all categories created
    static all = []

    constructor(name){
        this.name = name 

        this.element = document.createElement("li")
        this.element.id = `category-${this.name}`
        Category.all.push(this)
    }


    //Index function, pulls all categories
    static getCategories(){
        fetch(category_url)
        .then(resp => resp.json())
        .then(json => {
            for(const category of json){
                console.log(category)
            }
        })
    }

    categoryHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</3>
        </div>
    `
    }
    //grab category div
    //create category container
    //append new category to container
    createList(){
    let li = document.createElement("li")
    let updatedLi = li.innerHTML = `
    ${this.name}
`
    categoryContainer.append(updatedLi)
    
    }

}