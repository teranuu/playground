const btn_add = document.getElementById("btn_add")
const btn_clear = document.getElementById("btn_clear")

btn_add.addEventListener("click", addName)
btn_clear.addEventListener("click", clearList)

        function addName(){
            let name_input = document.getElementById("id_name").value.trim()
            const demo_li = document.getElementById("demo_li")
            if(name_input === ""){
                alert("fill out all fields!")
                return
            }
            
            const newLi = document.createElement("li")
            newLi.textContent = name_input
            
            demo_li.append(newLi)

            name_input.value = ""
        }
            
        function clearList(){
            
            const demo_li = document.getElementById("demo_li")
            demo_li.textContent = "";
            
        }