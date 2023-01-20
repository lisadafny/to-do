$(document).ready(function(){
    $('.to-drag').draggable();
    $('#btnAddNewCard').on('click', openModalNewCard);
    $('.close-modal-nc').on('click', closeModalNewCard);
    $('#btnCreateTask').on('click', addNewCard)
    $('input, textarea').on('focus', function () {
        labelTopPosition(this);
    });
    $('input, textarea').on('focusout', function () {
        changeLabelPosition(this);
    });
})

function dontWork (){
    alert('Sorry. I do not work, yet :(')
}

function labelTopPosition({ id }){
    $(`label[for='${id}'`).addClass('label-on-top');
}
function changeLabelPosition({ id }){
    let content = $(`#${id}`).val();
    if(!content){
        $(`label[for='${id}'`).removeClass('label-on-top');
    }
}
function openModalNewCard(){
 $('#modalNewCard').removeClass('d-none')
}
function closeModalNewCard(){
$('#modalNewCard').addClass('d-none');
}
function addNewCard(){
    const title = $('#newCardTitle').val();
    const description = $('#newCardDescription').val();
    const bootstrap = 'bg-info position-absolute text-white p-3';
    let taskBody = `<div class='to-drag ${bootstrap}' draggable="true"><h2>${title}</h2><p>${description}</p></div>`;
    $(taskBody).appendTo($("#newTask"));
    $('.to-drag').draggable();
    $('input, textarea').val('');
}
