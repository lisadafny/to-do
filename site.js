$(document).ready(function(){
    $('#toDrag').draggable();
    $('#btnAddNewCard').on('click', openModalNewCard);
    $('.close-modal-nc').on('click', closeModalNewCard);
    $('#btnCreateTask').on('click', dontWork)
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