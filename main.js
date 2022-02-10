/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    return Math.floor(Math.random() * 11);
}

document.getElementById('random_num').value = button1Clicked();

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    button1Clicked();
});