class Category {
    //able to access all categories created
    static all = []

    constructor(name){
        this.name = name 

        Category.all.push(this)
    }


    //Index function, pulls all categories
    static getCategories(){
        fetch(base_url + "/categories")
        .then(resp => resp.json())
        .then(json => console.log(json))
        debugger
    }
}