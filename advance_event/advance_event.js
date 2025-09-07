const ul_list = document.getElementById("ul_id")
const divBtn = document.getElementById("divBtn")
const body_id = document.body


ul_list.addEventListener("keydown", (event) => {
  
        if(event.key === "Enter" && event.target.tagName === "LI"){
            console.log("Enter pressed on: ", event.target.textContent)

    }
})

ul_list.addEventListener("click", (event) => {
  
        if(event.target.tagName === "LI"){
            console.log("Enter clicked on: ", event.target.textContent)

    }
})

divBtn.addEventListener("click", (event) =>{

        if(event.target.tagName === "BUTTON"){

            body_id.style.backgroundColor = event.target.dataset.color
        }


})


