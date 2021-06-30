class Pattern {
    static all = []
    constructor(name, difficulty, description, yarn, category_id){
        this.name = name
        this.difficulty = difficulty
        this.description = description
        this.yarn = yarn
        this.category_id = category_id

        this.element = document.createElement("li")
        this.element.id = `pattern-${this.name}`
        Pattern.all.push(this)
    }

}