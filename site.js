$(document).ready(function(){
    $('#toDrag').draggable();
    $('#btnAddNewCard').on('click', dontWork)
})

function dontWork (){
    alert('I do not work, yet :(')
}