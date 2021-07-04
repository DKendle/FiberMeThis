# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

crocheting = Category.create(name: "Crocheting")
knitting = Category.create(name: "Knitting")
weaving = Category.create(name: "Weaving")



hat = Pattern.create(name: "Hat", difficulty: 1,description: "A very nice hat for a beginner",yarn: "Bulky",category_id: 1)
gloves = Pattern.create(name: "Gloves",difficulty: 3,description: "Pretty gloves for fall",yarn: "Fingering",category_id: 1)

sweater = Pattern.create(name: "Sweater",difficulty: 4,description: "Beautiful lightweight sweater for Springtime",yarn:"Worsted",category_id: 2)
shawl = Pattern.create(name: "Shawl",difficulty: 1,description: "Easy peasy shawl",yarn:"Dk",category_id: 2)

sunbox = Pattern.create(name: "Sun Box",difficulty: 3,description: "A great way to showcase the sun stitch",yarn: "Worsted",category_id: 3)
rug = Pattern.create(name: "Rug",difficulty: 1,description: "Easy to make rug that would go great anywhere in the house",yarn: "Bulky",category_id: 3)