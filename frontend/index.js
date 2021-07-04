const base_url = "http://localhost:3000"
const pattern_url = base_url + "/patterns"

const patternContainer = document.getElementById("pattern-container")
const patternList = document.getElementById("pattern-list")
const newPatternButton = document.getElementById("new-pattern-button")

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

Pattern.getPatterns()
Pattern.renderButton()

