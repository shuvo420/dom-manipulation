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
//Task 2 b
function changBGcolor(event){
    var body =document.getElementsByTagName('body')[0]
    if(event.target.innerText =="Red"){
        body.style.backgroundColor='red'
    }
    if(event.target.innerText =="Green"){
        body.style.backgroundColor='green'
    }
}
//TEXK2C
function redirectToGoogle(){
    window.location.assign("https://google.com")
}



/* Task 4a using jQuery */
$('#addText4').click(function(event){
    var paragraph =$('<p>').text("hello word");
    $('#task4a').append(paragraph);
});
/* Task 4b using jQuery */
function changBG(event){
    var color = event.target.innerText.toLowerCase();
    $('body').css('background-Color',color);
}