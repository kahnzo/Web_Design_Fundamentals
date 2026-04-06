const fieldContainer = document.getElementById("fieldContainer");

const addButton = document.getElementById("addButton");


addButton.addEventListener("click", ()=>{
    //create a wrapper div
    const wrapper = document.createElement("div");
    wrapper.classlist.add("field-wrapper")

    //create a new input

    const newInput = document.createElement("input");
    newInput.type='text';
    newInput.placeholder = "Enter something ..."

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classlist.add("removeButton");


    wrapper.appendChild(newInput);
    wrapper.appendChild(removedButton);

    fieldContainer.appendChild(wrapper);

    removeButton.addEventListener("click",)


    })