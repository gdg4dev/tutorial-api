let input = document.getElementById("lcForm")
input.addEventListener("click", (e) => {
    e.preventDefault()
    let inputVal = document.getElementById("LocationInput").nodeValue || 'https://google.com/?ref=sal'
    fetch(`https://csclub.uwaterloo.ca/~phthakka/1pt-express?long=${input}`)
    .then((val) => val.text())
    .then((val2) => console.log(val2))
    .catch((err) => console.log(err))
    console.log(inputVal)
}) 