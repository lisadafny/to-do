let color = 'bg-white';

$(document).ready(function(){
    taskCardDrag();
    $('#btnAddNewCard').on('click', openModalNewCard);
    $('.close-modal-nc').on('click', closeModalNewCard);
    $('#btnCreateTask').on('click', addNewCard);
    $('.color-option').on('click', chooseColor);
    sectionToDropCards();
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
 $('#modalNewCard').removeClass('d-none');
};
function closeModalNewCard(){
$('#modalNewCard').addClass('fade-out');
setTimeout(function() {
    $('#modalNewCard').addClass('d-none');
    $('#modalNewCard').removeClass('fade-out');
}, 900);
};
function addNewCard(){
    const title = $('#newCardTitle').val();
    const description = $('#newCardDescription').val();
    const bootstrap = `${color} px-3 py-1 my-2`;
    const header = `<div class="row"><div class="col-10"><h2>${title}</h2></div><div class="col-2 btn-close-card">&#x2715</div></div>`
    let taskBody = `<div class='to-drag ${bootstrap}' draggable="true">${header}<p>${description}</p></div>`;
    $(taskBody).appendTo($("#newTask"));
    resetModalAddNewCard();
    taskCardDrag();
};
function resetModalAddNewCard(){
    $('input, textarea').val('');
    $('.color-option').removeClass('border border-dark');
    color = 'bg-white';
}
function closeTask(){
    let card = $(this).parent().parent();
    card.remove();
};
function taskCardDrag(){
    $('.to-drag').draggable({
        opacity: 0.35,
        drag: function(event, ui){
            $(event.target).addClass('position-absolute')
        }
    });
    $('.btn-close-card').on('click', closeTask);
}
function sectionToDropCards(){
    $("#finishedTask").droppable({ 
        drop: function(event, ui) {
        let taskCard = ui.helper;
        let section = event.target
        $(taskCard).addClass('completed');
        $(taskCard).removeClass('position-absolute');
        $(taskCard).appendTo($(section));
        $(taskCard).css('position', '');
    },
        out: function(event, ui){
            let taskCard = ui.helper;
            $(taskCard).removeClass('completed');
        }
     });
     $("#doingTask").droppable({ 
        drop: function(event, ui) {
        let taskCard = ui.helper;
        let section = event.target
        $(taskCard).removeClass('position-absolute');
        $(taskCard).appendTo($(section));
        $(taskCard).css('position', '');
    }
     });
     $("#newTask").droppable({ 
        drop: function(event, ui) {
        let taskCard = ui.helper;
        let section = event.target
        $(taskCard).removeClass('position-absolute');
        $(taskCard).appendTo($(section));
        $(taskCard).css('position', '');
    }
     });
}
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