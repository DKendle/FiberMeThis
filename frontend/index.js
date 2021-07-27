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
patternList.addEventListener("click", e => {
    e.preventDefault()
    let target = e.target
    if(target.className === "delete"){
        const deleteObj ={
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
           }
        }
        fetch(pattern_url+"/"+target.id, deleteObj)

        target.parentElement.remove()
    }
}
    )
function callCreate(){
    event.preventDefault()
    Pattern.createPattern()
}


Pattern.renderPatterns()
Pattern.patternForm()