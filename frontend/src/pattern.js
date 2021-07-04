class Pattern {
    static all = []
    
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
    Name:<br><input type="text" id="name"><br>
    Difficulty:<br><input type="Integer" id="difficulty"><br>
    Description:<br><textarea type="text" id="description"></textarea><br>
    Yarn:<br><input type="text" id="yarn"><br>
    Category:<br><select id="pattern-dropdown" name="pattern-dropdown">
                <option value="">Choose a Category</option>
                <option value="1">Crochet</option>
                <option value="2">Knitting</option>
                <option value="3">Weaving</option>
            </select>
    <input type="submit" id="submit-pattern-form">
    </form>
    `
    }

//////////////////Pattern Button/////////////////
    static renderButton(){
        newPatternButton.innerHTML += `
        <form id="add-pattern-button" class="buttons">
        <button type="submit" form="new-pattern-form" value="Add a Pattern" onclick="this.disabled = true">Add a Pattern</button>
        </form>
        `
    }

////////////////Creating the Pattern/////////////
static createPattern(){
    const newP = {
        name: document.getElementById("name").value,
        difficulty: document.getElementById("difficulty").value,
        description: document.getElementById("description").value,
        yarn: document.getElementById("yarn").value,
        category_id: document.getElementById("pattern-dropdown").value
    }
debugger
    const configObj = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newP)
    }

    fetch(pattern_url, configObj)
    .then(resp => resp.json())
    .then(pattern => {
        const p = new Pattern(pattern)
        p.appendPattern()
        debugger
    })
}

//assignCat(){
// let allCat = Category.all
// let dropCat = document.getElementById("pattern-dropdown").value
//  let catValue = allCat.find(category => category.name === dropCat )
//
//}
}
