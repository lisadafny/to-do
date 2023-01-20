let color = 'bg-white';

$(document).ready(function(){
    $('.to-drag').draggable();
    $('#btnAddNewCard').on('click', openModalNewCard);
    $('.close-modal-nc').on('click', closeModalNewCard);
    $('#btnCreateTask').on('click', addNewCard);
    $('.color-option').on('click', chooseColor);
    $('.btn-close-card').on('click', closeTask);
    $('input, textarea').on('focus', function () {
        labelTopPosition(this);
    });
    $('input, textarea').on('focusout', function () {
        changeLabelPosition(this);
    });
});

function dontWork (){
    alert('Sorry. I do not work, yet :(')
};

function labelTopPosition({ id }){
    $(`label[for='${id}'`).addClass('label-on-top');
};
function changeLabelPosition({ id }){
    let content = $(`#${id}`).val();
    if(!content){
        $(`label[for='${id}'`).removeClass('label-on-top');
    }
};
function openModalNewCard(){
 $('#modalNewCard').removeClass('d-none')
};
function closeModalNewCard(){
$('#modalNewCard').addClass('d-none');
};
function addNewCard(){
    const title = $('#newCardTitle').val();
    const description = $('#newCardDescription').val();
    const bootstrap = `${color} position-absolute px-3 py-1`;
    const header = `<div class="row"><div class="col-10"><h2>${title}</h2></div><div class="col-2 btn-close-card">&#x2715</div></div>`
    let taskBody = `<div class='to-drag ${bootstrap}' draggable="true">${header}<p>${description}</p></div>`;
    $(taskBody).appendTo($("#newTask"));
    $('.to-drag').draggable();
    $('.btn-close-card').on('click', closeTask);
    $('input, textarea').val('');
    $('.color-option').removeClass('border border-dark');
    color = 'bg-white';
};
function closeTask(){
    let card = $(this).parent().parent();
    card.addClass('d-none');
};
function chooseColor(){
    $('.color-option').removeClass('border border-dark');
    $(this).addClass('border border-dark');
    const element = $(this).attr('id');
    switch (element){
        case 'blueOption':
            color = 'bg-info';
            break;
        case 'yellowOption':
            color = 'bg-warning';
            break;
        case 'greenOption':
            color = 'bg-success';
            break;
        case 'redOption':
            color = 'bg-danger';
            break;
        default:
            color = 'bg-white';
    };
};
