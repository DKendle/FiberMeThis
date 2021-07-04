const base_url = "http://localhost:3000"
const pattern_url = base_url + "/patterns"


const patternContainer = document.getElementById("pattern-container")
const patternList = document.getElementById("pattern-list")
const newPatternButton = document.getElementById("new-pattern-button")
const deleteButton = document.getElementById("delete-button")

const formContainer = document.getElementById("form-container")

////Event Listeners
newPatternButton.addEventListener("click", goToPatternForm)
formContainer.addEventListener("submit", submitPattern)
deleteButton.addEventListener("submit", deletePattern)

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
       headers: {
           "Content-Type": "application/json"
       }
   }
   
   fetch(pattern_url + "/1", deleteObj)
   .then(resp => resp.json())
   .then(json => console.log(json))
   this.element.remove()
debugger
   }

Pattern.getPatterns()
Pattern.renderButton()
Pattern.deleteButton()
