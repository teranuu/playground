 const btn_add = document.getElementById("btn_add").addEventListener("click", addName)
        const btn_clear = document.getElementById("btn_clear").addEventListener("click", clearList)


        function addName(){
            let name_input = document.getElementById("id_name").value

            if(name_input === ""){
                alert("fill out all fields!")
                return
            }
            
            const newLi = document.createElement("li")
            newLi.textContent = name_input
            
            demo_li.append(newLi)

            id_name.value = ""
        }
            
        function clearList(){

            demo_li.textContent = "";
            
        }