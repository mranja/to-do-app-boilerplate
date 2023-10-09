var input_data = document.getElementById("input")
var add_button = document.getElementById("button")
var list_item = document.getElementById("todolist")

var list_data=[]
var i=0
add_button.addEventListener('click',additem)

function additem(){
    list_data.push(input_data.value)
    console.log(list_data)


    input_data.value = ' '
    toshow()
}

function toshow(){
    list_item.innerHTML = ' '
    list_data.forEach(function(item,index){
        list_item.innerHTML += `<li>${item} <a onclick="edititem(${index})">   Edit</a> <a onclick="deleteitem(${index})">x   |</a> </li>`


    })


}

function deleteitem(i){
    list_data.splice(i,1)
    toshow()

}

function edititem(n){
    var new_item = prompt("enter the new value")
    list_data.splice(n,1,new_item)
    toshow()


}