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
    static grabCategories(){
        fetch(category_url)
        .then(resp => resp.json())
        .then(json => {
            for(const category of json){
                let c = new Category(category.name)
                c.addCategoryToDOM()
            }
        })
    }

    categoryHTML(){
        this.element.innerHTML += `
            <h3>${this.name}</3>`
        return this.element
    }
    
    addCategoryToDOM(){
        categoryList.append(this.categoryHTML())
    }

}