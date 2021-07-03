const base_url = "http://localhost:3000"
const pattern_url = base_url + "/patterns"
const category_url = base_url + "/categories"

const patternContainer = document.getElementById("pattern-container")

Category.grabCategories()
Category.renderForm()
//Category.categoryForm.addEventListener("submit", submitCategory())
//Category.categoryList.addEventListener("click", clickCat())


function submitCategory(){
}

function catClick(){
    debugger
}