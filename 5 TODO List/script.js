let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnSort = $('#btnSort')
let btnCleanUp = $('#btnCleanUp')

let listItem;
addItem = () => {

    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })

    ulTasks.append(listItem)
    inpNewTask.val("")
    ulTasks.append(listItem)
    inpNewTask.val("")

    listItem.click((event) => {
        console.log('item clicked to strikethrough ', $(event.target))
        listItem.toggleClass('strikeThrough')
    })
}


inpNewTask.keypress((e) => {
    if (e.which == 13) {
        addItem()
    }
})
function toggleInputBtn() {
    let inputValue = inpNewTask.val() == '';
    btnAdd.prop('disabled', inputValue);
    btnReset.prop('disabled', inputValue);

    let outputValue = ulTasks.children().length < 1;
    btnSort.prop('disabled', outputValue);
    btnCleanUp.prop('disabled', outputValue);

}
inpNewTask.on('input', () => {
    toggleInputBtn()
})

btnAdd.click(() => {
    addItem()
    toggleInputBtn()

})

btnReset.click(() => {
    inpNewTask.val("")
    toggleInputBtn()

})

ulTasks.on()
function clearDone() {
    console.log($('#ulTasks .strikeThrough'));
    $('#ulTasks .strikeThrough').remove();

}
btnCleanUp.click(() => {
    clearDone();
    toggleInputBtn()

})

function sort() {
    $('#ulTasks .strikeThrough').appendTo(ulTasks)

}


btnSort.click(() => {
    console.log('sort pressed')
    sort();
})

