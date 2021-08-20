// globle Variables & Constants 
let billAmount = document.querySelector('#bill-input');
let cashGiven = document.querySelector('#cash-input');
let checkbtn = document.querySelector('#check-btn');
let notesCount = document.querySelectorAll('.note-Count')
let notesArray = [2000, 500, 200, 100, 50, 20, 10, 5, 1]

// controller Funcions
function showMessage(msg) { alert(msg); }
function updateNotes(i, notes) {
    // console.log('from updateNotes', notesArray[i], '-----', notes, 'index', i)//debug
    notesCount[i].innerText = notes
}

// Main Loop
checkbtn.addEventListener('click',checkHandler)
function checkHandler() {
    if (parseInt(billAmount.value) > 0) {
        if (parseInt(cashGiven.value) > 0) {
            if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
                let RemainingAmount = parseInt(cashGiven.value) - parseInt(billAmount.value);
                // console.log(RemainingAmount, 'initial Remaining Value!')//Debug
                for (let i = 0; i < notesArray.length; i++) {
                    if (RemainingAmount !== 0) {
                        let notes = Math.trunc(RemainingAmount / notesArray[i])//returns integer value after divide
                        updateNotes(i, notes)
                        RemainingAmount = RemainingAmount % notesArray[i]
                        console.log('new remaining amount', RemainingAmount)
                    } else { updateNotes(i, 0) }
                }
            } else { showMessage(`Given Amount is less than Bill Amount! No change to be return.Instead you need to take ${parseInt(billAmount.value) - parseInt(cashGiven.value)} RS from Customer`) }
        } else { showMessage('Given Amount Should be Greater than 0') }
    } else { showMessage('Bill Amount should be Greater that 0') }
}

