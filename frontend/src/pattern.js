class Pattern {
    static all = []
    constructor(name, difficulty, description, yarn, category_id){
        this.name = name
        this.difficulty = difficulty
        this.description = description
        this.yarn = yarn
        this.category_id = category_id

        Pattern.all.push(this)

    }
}