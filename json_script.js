const div_id = document.getElementById("div_id")

async function getUsers(){

    
    try{

        const response_fetch = await fetch("https://jsonplaceholder.typicode.com/users")
        const data_obj = await response_fetch.json()
        return data_obj

        console.log(data_obj)
    }catch(e){
        console.error(e)
    }

    

}

async function displayList(){
    
    const data_obj = await getUsers()
    const ul_id = document.getElementById("ul_id")

    for(i = 0; i < Object.keys(data_obj).length; i++){

        let {name: name_i, email: email_i} = data_obj[i]

        const newLi = document.createElement("li")
        newLi.textContent = `Name: ${name_i} Email: ${email_i}`
        ul_id.append(newLi)

    }
    
}

displayList()

div_id.addEventListener("click", (event) =>{

    const ul_id = document.getElementById("ul_id")

    event.preventDefault()
    ul_id.textContent=""
    displayList()


})


//alternative displayList using forOf (from chatGPT)

// async function displayList() {
//   const data_obj = await getUsers();
//   const ul_id = document.getElementById("ul_id");

//   for (const { name, email } of data_obj) {
//     const newLi = document.createElement("li");
//     newLi.textContent = `Name: ${name} Email: ${email}`;
//     ul_id.append(newLi);
//   }
// }