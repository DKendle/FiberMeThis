class Pattern {
    static all = []
    constructor(name, difficulty, description, yarn, needle_type, needle_size, category_id){
        this.name = name
        this.difficulty = difficulty
        this.description = description
        this.yarn = yarn
        this.needle_type = needle_type
        this.needle_size = needle_size
        this.category_id = category_id

        Pattern.all.push(this)

    }
}