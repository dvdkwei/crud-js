let buttonAdd = document.getElementById("button");
let inputText = document.getElementById("enter");
let ul = document.querySelector("ul");

/** functions */
function addElement(){
    if(inputText.value !== "") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputText.value));

        li.setAttribute("id", Number(ul.getElementsByTagName("li").length)+1);
        li.addEventListener("click", function (){
            li.classList.toggle("done");
        });

        let but = document.createElement("button");
        but.appendChild(document.createTextNode("delete"));

        but.addEventListener("click", function (){
            removeElementAndButton(li.getAttribute("id"), but);
        });

        ul.appendChild(li);
        ul.appendChild(but);
        inputText.value = "";
    }
}

function removeElementAndButton(id, but){
    document.getElementById(id).remove();
    but.remove();
}

function addElementEnter(event){
    if(event.keyCode === 13) addElement();
}

/** add events */
buttonAdd.addEventListener("click", addElement);

inputText.addEventListener("keypress", addElementEnter);

