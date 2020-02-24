console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogPics => addDogPics(dogPics.message))

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogBreeds => displayBreed(dogBreeds.message))



    function addDogPics(dogPics){
        let imgContainer = document.getElementById('dog-image-container')
    
        dogPics.forEach(function(dog){
            let img = document.createElement('img')
            img.src = dog
            imgContainer.append(img)
        })
    }

    let ul = document.getElementById('dog-breeds')
    function displayBreed(dogBreed){
        breeds = Object.keys(dogBreed)
        addBreed(breeds)
    }

    function addBreed(breeds){
        breeds.forEach(function(breed){
            let li = document.createElement('li')
            li.className = "breed"
            li.style.cursor = 'pointer'
            li.innerText = breed
            ul.append(li)
            li.addEventListener("click", function(event){
                if (event.target.style.color == "red"){
                    event.target.style.color = 'black'
                } else {
                    event.target.style.color = 'red'
                }
            })
        })
    }

    let dropdownSelect = document.getElementById('breed-dropdown')
    dropdownSelect.addEventListener('change', function(event){
        
        let filteredBreeds = filterBreed(event.target.value)
        ul.innerHTML = ""

        console.log(filteredBreeds)
        addBreed(filteredBreeds)
    })

    function filterBreed(letter){
        return breeds.filter(breed => breed.startsWith(letter))
    }


})
