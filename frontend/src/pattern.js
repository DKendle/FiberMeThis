class Pattern {
    static all = []

    constructor({id, name, difficulty, description, yarn, category_id}){
        this.id = id
        this.name = name
        this.difficulty = difficulty
        this.description = description
        this.yarn = yarn
        this.category_id = category_id
        
        this.li = document.createElement("li")
        Pattern.all.push(this)
    }
////////////////////////////////////////////////////////
    static renderPatterns(){
        fetch(pattern_url)
        .then(resp => resp.json())
        .then(patterns => {
            for(const pattern of patterns){
                const p = new Pattern(pattern)
                    p.createPatternContainer()//append p as a child of the pattern li box
            }
        })
    }

    patternHTML(){
        this.li.innerHTML += `
        <h3>${this.name}</h3>
        <p>${this.difficulty} / ${this.yarn}</p>
        <p>${this.description}</p>
        `
        return this.li
    }


    appendPattern(){
        patternList.appendChild(this.patternHTML())
    }

///////////////////////////////////////////////////////////////
createPatternContainer(){
    this.li.id = `pattern-${this.name}`

    let deleteButton = document.createElement("button")
    deleteButton.className = "delete"
    deleteButton.id = `${this.id}`
    deleteButton.innerText = "Delete Pattern"
     ////create callback function!!!!
    this.li.appendChild(deleteButton)
    this.appendPattern()
}

    static patternForm(){
        formContainer.innerHTML += `
            <form id="new-pattern-form" class="forms">
            Name:<br><input type="text" id="name"required><br>
            Difficulty:<br><input type="Integer" id="difficulty"><br>
            Description:<br><textarea type="text" id="description"required></textarea><br>
            Yarn:<br><input type="text" id="yarn"><br>
            Category:<br><select id="pattern-dropdown" name="pattern-dropdown" required>
                <option value="">Choose a Category</option>
                <option value="1">Crochet</option>
                <option value="2">Knitting</option>
                <option value="3">Weaving</option>
            </select>
                <input type="submit" id="submit-pattern-form">
            </form>
    `
    }

    static createPattern(){
        const newP = {
            name: document.getElementById("name").value,
            difficulty: document.getElementById("difficulty").value,
            description: document.getElementById("description").value,
            yarn: document.getElementById("yarn").value,
            category_id: document.getElementById("pattern-dropdown").value
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newP)
        }
        fetch(pattern_url, configObj)
        .then(resp => resp.json())
        .then(pattern => {
                const p = new Pattern(pattern)
                p.createPatternContainer()
        })
        
    }

    static newPatternButtonInner(){
        newPatternButton.innerHTML += `
        <form id="add-pattern-button" class="buttons">
        <button type="submit" form="new-pattern-form" value="Add a Pattern" onclick="this.disabled = true">Add a Pattern</button>
        </form>
        `
    }
}
