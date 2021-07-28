class Category {
    //able to access all categories created
    static all = []

    constructor(name){
        this._name = name 

        Category.all.push(this)
    }
}


