class Pattern {

    
    constructor({name, difficulty, description, yarn, category_id}){
        this.name = name
        this.difficulty = difficulty
        this.description = description
        this.yarn = yarn
        this.category_id = category_id

        this.element = document.createElement("li")
        this.element.id = `pattern-${this.name}`
    }



    static getPatterns(){
        fetch(pattern_url)
        .then(resp => resp.json())
        .then(patterns => {
            for(const pattern of patterns){
                let p = new Pattern(pattern)
                p.appendPattern()
            }
        })
    }

    appendPattern(){
        patternContainer.append(this.patternHTML())
    }

    patternHTML(){
        this.element.innerHTML += `
        <h3>${this.name}</h3>
        <p>${this.difficulty} / ${this.yarn}</p>
        <p>${this.description}</p>
        
        `
        return this.element
    }

/////////////////Pattern Form/////////////////////////

static renderForm(){
    formContainer.innerHTML += `
    <form id="new-pattern-form" class="forms">
    Name:<input type="text" id="name">
    Difficulty:<input type="Integer" id="difficulty">
    Description:<textarea type="text" id="description"></textarea>
    Yarn:<input type="text" id="yarn">
    Category:<select id="pattern-dropdown" name="pattern-dropdown">
                <option value="crochet">Crochet</option>
                <option value="knitting">Knitting</option>
                <option value="weaving">Weaving</option>
            </select>
    <input type="submit" id="submit-form">
    </form>
    `
    }

//////////////////Pattern Button/////////////////
    static renderButton(){
        newPatternButton.innerHTML += `
        <form id="add-pattern-button" class="buttons">
        <button type="submit" form="new-pattern-form" value="Add a Pattern">Add a Pattern</button>
        </form>
        `
    }
}