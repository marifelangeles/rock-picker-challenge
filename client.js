$(document).ready(docReady);

function addRockPicker(){
    console.log('in addRockPicker');
    
    // on add new picker, get name
    let name = $('#nameInput').val();
    console.log('input:', name);

    // append on rockPickerTable
    $('#rockPickerTable').append(`
            <tr class="playerRow">
                <td class="name">${name}</td>
                <td class="score"><span class="numberOfRocks">0</span></td>
                <td><button class="addButton">Add 1</button></td>
                <td><button class="minusButton">Minus 1</button></td>
                <td><button class="resetButton">Reset to 0</button></td>
                <td><button class="deleteRockPickerButton">Delete</button></td>
            </tr>
    `);
} // end addRockPicker


function deleteRockPicker(){
    console.log('in deleteRockPicker');
    
    // get closest table row and remove
    $(this).closest('tr').remove();

} // end deleteRockPicker

function docReady() {
    // add new picker
    $('#addRockPickerButton').on('click', addRockPicker);
    
    // delete picker from DOM
    // get table with delete button, on click
    $('#rockPickerTable').on('click', '.deleteRockPickerButton', deleteRockPicker);
} // end docReady