// const counter = document.querySelector(".visitorCount");
const counter = document.querySelectorAll(".visitorCount");
async function updateCount(){
    try{
    let response = await fetch("https://7t4nsq3jccynt5cy2lwycoyuum0iatod.lambda-url.us-east-2.on.aws/")
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json()
    counter.innerHTML = `Views: ${data}`
    
} catch(error){
    console.error("Error fetching data:", error);
}
}
// function run
updateCount();