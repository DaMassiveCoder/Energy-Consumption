// Calling an API //

function prompting() {
    document.getElementById("demo").innerHTML = x = prompt(
        `
        Type of Electrical Appliance
        1. Refrigerators
        2. Air-conditioners
        3. Light Bulbs
        4. Washing Machines
        `
    )
}

if (x === '1') {
    y = prompt("Brand of refrigerator")
    let calling_API = async () => {
    let response = await fetch(`https://data.energystar.gov/resource/p5st-her9.json?brand_name=${y}`, {method: 'GET'})
    let json = await response.json()
    console.log (json)
    }
    calling_API()
}    

else if (x === '2') {
    y = prompt("Brand of air-conditioner")
    let calling_API = async () => {
    let response = await fetch(`https://data.energystar.gov/resource/rg68-9xmm.json?brand_name=${y}`, {method: 'GET'})

    let json = await response.json()
    console.log (json)
    }
    calling_API()
}
else if (x === '3') {
    y = prompt("Brand of light bulbs")
    let calling_API = async () => {
    let response = await fetch(`https://data.energystar.gov/resource/ebgj-qsf7.json?brand_name=${y}`, {method: 'GET'})

    let json = await response.json()
    console.log (json)
    }
    calling_API()
}
else if (x === '4') {
    y = prompt("Brand of washing machine")
    let calling_API = async () => {
    let response = await fetch('https://data.energystar.gov/resource/9g6r-cpdt.json?brand_name${y}')
    let json = await response.json()
    console.log(json)
    }
    calling_API()
}
else {
    console.log('Sorry, the item that you have inputed does not exist.')
}