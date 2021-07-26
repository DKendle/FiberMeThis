const base_url = "http://localhost:3000"
const pattern_url = base_url + "/patterns"


const patternContainer = document.getElementById("pattern-container")
const patternList = document.getElementById("pattern-list")
const newPatternButton = document.getElementById("new-pattern-button")
//HTML collection of delete buttons
const deleteButtonsColl = document.getElementsByClassName("delete")
const formContainer = document.getElementById("form-container")

////Event Listeners
newPatternButton.addEventListener("click", goToPatternForm)
formContainer.addEventListener("submit", submitPattern)

function goToPatternForm(){
    event.preventDefault()
    Pattern.renderForm()
}
function submitPattern(){
    event.preventDefault()
    Pattern.createPattern()
    event.target.reset()
}

function deletePattern(){
    let deleteObj = {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    }
    for(const button of deleteButtonsColl){
        button.addEventListener("click", function(e){
            e.preventDefault()
            fetch(pattern_url+`/${this.id}`, deleteObj)
            this.parentElement.remove()        
        }
        
        )
        
    }
}




Pattern.getPatterns()
Pattern.renderButton()
this.deletePattern()
//Pattern.deleteButton()
//Array.from(deleteButton).forEach(addEventListener("submit", deletePattern))
