class Category {
    //able to access all categories created
    static all = []
    static categoryForm = document.getElementById("form-container")
    static categoryContainer = document.getElementById("category-container")
    static categoryList = document.getElementById("category-list")


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
       .then(categories => {
           for(const category of categories){
               let c = new Category(category.name)
               c.addCatToDOM()
           }
       })
   }

   categoryHTML(){
    this.element.innerHTML +=`
        <h3>${this.name}</h3>
    
    `
    return this.element
   }

   addCatToDOM(){
       Category.categoryList.append(this.categoryHTML())
   }


static renderForm(){
    Category.categoryForm.innerHTML +=`
    Name: <input type="text" name="name">
    Submit: <input type="submit">
    
    `
}


}


