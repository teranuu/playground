const form = document.getElementById("form_id")
const output = document.getElementById("output")



form.addEventListener("submit", (event) => {


    event.preventDefault();

    const name = document.getElementById("name_id").value.trim()
    const email = document.getElementById("email_id").value.trim()
    const gender = document.getElementById("select_id").value.trim()

    if(name === "" || email === ""){
        alert("Input empty fields!")
        return
    }

    const p_msg = document.createElement("p")
    p_msg.textContent = `Hello ${name}, your email is ${email}, gender : ${gender}`
    
    output.append(p_msg)
    
   document.querySelectorAll("#form_id input, #form_id select").forEach(elem => elem.value ="")
})