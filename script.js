/* Task 1 */
var heading =document.getElementById('heading')
console.log(heading.innerText)


/* Task 2 using plain JavaScript */
function addText2(){
    var Task2div =document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText ="Hello word"
    Task2div.appendChild(paragraph)
}
var textBtn =document.getElementById('textBtn2a')
textBtn.addEventListener('click',addText2)



/* Task 4 using jQuery */
