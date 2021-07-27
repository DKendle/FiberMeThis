const base_url = "http://localhost:3000"
const pattern_url = base_url + "/patterns"


const patternContainer = document.getElementById("pattern-container")
const patternList = document.getElementById("pattern-list")
const newPatternButton = document.getElementById("new-pattern-button")
//HTML collection of delete buttons
const deleteButtonsColl = document.getElementsByClassName("delete")
const formContainer = document.getElementById("form-container")


////Event Listeners
formContainer.addEventListener("submit", callCreate)

function callCreate(){
    event.preventDefault()
    Pattern.createPattern()
}


Pattern.renderPatterns()
Pattern.patternForm()