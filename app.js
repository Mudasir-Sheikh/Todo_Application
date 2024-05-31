function addtodo(){
    var ol = document.getElementById("ol")
    var inputfield = document.getElementById("inputfield")

    if(inputfield.value.length > 3){

    var div_li = document.createElement("div")
    div_li.setAttribute("id" , "new_div")


    var li = document.createElement("li")
    li.setAttribute("id" , "li")
    li.innerHTML = inputfield.value
    console.log(li)
    inputfield.value = ""

    //Creating Buttons in Li
    var EditBtn = document.createElement("button")
    var DeleteBtn = document.createElement("button")
    var complete = document.createElement('button')

    EditBtn.setAttribute("id" , "EditBtn")
    EditBtn.setAttribute("onClick", "edit_todo(this)")
    EditBtn.innerHTML = '<img src="icons/pen.png" alt="Edit">'

    DeleteBtn.setAttribute("id",  "DeleteBtn")
    DeleteBtn.innerHTML = '<img src="icons/remove.png" alt="Edit">'
    DeleteBtn.setAttribute("onClick" , "delete_todo(this)")
    
    
    complete.setAttribute("id" , "complete")
    complete.setAttribute("onClick" , "Completed(this)")
    complete.innerHTML = '<img src="icons/check.png" alt="Edit">'

    //Apending All Childs 
    div_li.appendChild(EditBtn)
    div_li.appendChild(DeleteBtn)
    div_li.appendChild(complete)
    
    li.appendChild(div_li)
    ol.appendChild(li)
}else{
    alert("Input Length is not Valid ");
    return
}
}


function deleteAll() {
    var ol = document.getElementById("ol")
    console.log(ol.innerHTML)
    ol.innerHTML = ""
}


function delete_todo(element){
    element.parentNode.parentNode.remove()

}


function edit_todo(element){
    var li = element.parentNode.parentNode
    var nodevalue = element.parentNode.parentNode.firstChild.nodeValue
    element.parentNode.parentNode.firstChild.nodeValue = ""

    //creating div block so i can put input field and button in single container
    var editInputDiv = document.createElement("div")
    editInputDiv.setAttribute("id" , "editInputDiv");

     
    //creating input field for input
    var edit_input = document.createElement("input")
    edit_input.setAttribute("id" , "edit_input")
    edit_input.setAttribute("value" , nodevalue)   //assigning previous value to new inputfield
    li.prepend(edit_input)  //prepend add element in the start
 
    //creating done Btn 
    var done = document.createElement('button')
    done.setAttribute("id" , "done")
    done.setAttribute("onClick" , "done(this)")
    done.innerHTML = '<img src="icons/check.png" alt="Edit">'

    editInputDiv.append(edit_input , done)
    li.prepend(editInputDiv);

 
}
function done(element){
    var edit_input = document.getElementById("edit_input")
    var newValue = edit_input.value
    element.parentNode.parentNode.firstChild.nextSibling.nodeValue = newValue
    element.parentNode.parentNode.firstChild.remove()
    
}



function Completed(element){
    element.parentNode.parentNode.style.textDecoration = "line-through";
}
