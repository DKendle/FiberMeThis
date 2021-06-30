class Pattern {
    static all = []

    //object passed in for destructuring assignment later in grab patterns
    constructor({name, difficulty, description, yarn, category_id}){
        this.name = name
        this.difficulty = difficulty
        this.description = description
        this.yarn = yarn
        this.category_id = category_id

        this.element = document.createElement("li")
        this.element.id = `pattern-${this.name}`
        Pattern.all.push(this)
    }

    //use fetch data to display in pattern container
    grabPatterns(){
        fetch(pattern_url)
        .then(resp => resp.json())
        .then(patterns => {
            for (const pattern of patterns){
                let p = new Pattern(pattern)
                p.addToDOM()
            }
        })
    }

    patternHTML(){
        this.element.innerHTML += `
            <h3>${this.name}</h3>
            <p>${this.description}</p>
        
        `
        return this.element
    }

    addToDOM(){
        patternContainer.append(this.patternHTML())
    }

}