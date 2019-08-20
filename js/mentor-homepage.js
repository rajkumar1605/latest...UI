// Old way of adding table rows: 

// document.getElementById("add-new-course-by-mentor").addEventListener("click", function() {
//     // let tbody = document.getElementsByTagName('tbody');
//     // console.log(tbody);

//     let tbody = document.getElementsByTagName('tbody')[5];
//     let row = tbody.getElementsByTagName('tr')[0];

//     let nextRow = row.cloneNode(true);
//     // console.log(nextRow);4

//     nextRow.getElementsByTagName('input')[0].value = '';
//     nextRow.getElementsByTagName('input')[0].placeholder = 'Course name';

//     nextRow.getElementsByTagName('input')[1].value = '';
//     nextRow.getElementsByTagName('input')[1].placeholder = 'Facilities provided';

//     nextRow.getElementsByTagName('input')[2].value = '';
//     nextRow.getElementsByTagName('input')[2].placeholder = 'Duration of the course';

//     nextRow.getElementsByTagName('input')[3].value = '';
//     nextRow.getElementsByTagName('input')[3].placeholder = 'Preferred time';

//     nextRow.getElementsByTagName('input')[4].value = '';
//     nextRow.getElementsByTagName('input')[4].placeholder = 'Expected payment';

//     // let edit_link = document.createElement("a");
//     // edit_link.setAttribute("mentor-add-course", "new-edit-link");
//     // edit_link.href = "#";
//     // edit_link.textContent = "Edit";

//     // nextRow.appendChild(edit_link);

//     tbody.appendChild(nextRow);
//     nextRow.getElementsByTagName('input')[0].focus();

// });

$(document).ready(function() {
    $('.toast').toast('show');
});
$(document).ready(function() {
    $("#mentor-notify-button").click(function() {
        $('.toast').toast('show');
    });
});

let placearray = ['Course name', 'Facilities provided', 'Duration of the course', 'Preferred time', 'Expected payment'];
document.getElementById("add-new-course-by-mentor").addEventListener("click", function() {

    // console.log(null)

    let table = document.getElementById("mentor-deliver-table");
    // console.log(rowcount)

    let NewRow = table.insertRow(-1);

    for (let i = 0; i < 8; i++) {

        let td = document.createElement('td');
        td = NewRow.insertCell(i);

        if (i === 5) {
            let edit = document.createElement('a');
            edit.textContent = "Edit";
            edit.setAttribute('class', 'btn btn-outline-info');
            edit.setAttribute('id', 'mentor-deliver-edit');
            // edit.setAttribute('onclick','editthsRow(this)');
            // edit.href="../"
            td.appendChild(edit);
        } else if (i === 6) {
            let subt = document.createElement('a');
            subt.textContent = "Submit";
            subt.setAttribute('class', 'btn btn-outline-success');
            subt.setAttribute('id', 'mentor-deliver-submit');
            // subt.href="../"
            td.appendChild(subt);
        } else if (i === 7) {
            let remov = document.createElement('input');
            remov.setAttribute('type', 'button');
            remov.setAttribute('value', 'Remove');
            remov.setAttribute('class', 'btn btn-outline-danger text-white');
            remov.setAttribute('id', 'mentor-deliver-remove');
            remov.setAttribute('onclick', 'removeRow(this)');
            td.appendChild(remov);
        } else {
            let ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('class', 'text-center col-7');
            ele.setAttribute('value', '');
            ele.setAttribute('placeholder', placearray[i]);
            td.appendChild(ele);
        }

    }

});

function removeRow(thsbutt) {
    if (confirm("You are attempting to permanently delete a deliverable. Are you sure?")) {
        let tabl = document.getElementById("mentor-deliver-table");
        // console.log(thsbutt.parentNode.parentNode.rowIndex);
        tabl.deleteRow(thsbutt.parentNode.parentNode.rowIndex);
    } else {
        return false;
    }
}

document.getElementById("submit-mentor-deliver").addEventListener("click", function() {
    let tbl = document.getElementById("mentor-deliver-table");

    if (tbl.rows.length <= 2) {
        alert("Sorry,we cannot submit empty deliverables.");
    } else {

        let tblvalues = new Array();
        // console.log(tbl.rows.length);

        for (row = 0; row < (tbl.rows.length) - 2; row++) {
            // console.log(tbl.rows[row+2].cells.length-3);
            for (c = 0; c < (tbl.rows[row + 2].cells.length - 3); c++) {
                // console.log(tbl.rows[row+2].cells[c]);
                let element = tbl.rows[row + 2].cells[c];
                if (element.childNodes[0].getAttribute('type') === 'text') {
                    // console.log(element.childNodes[0].value);
                    if (element.childNodes[0].value === "") {
                        alert("Row Number:" + (row + 1) + " Column Number:" + (c + 1) + " is empty. So we cannot submit your deliverables.");
                        break;
                    } else {
                        tblvalues.push(element.childNodes[0].value);
                    }
                }
            }
        }
        console.log(tblvalues);
    }

});