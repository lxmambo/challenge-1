//alert('hello')
//console.log('hello');

function ageInDays(){

    var birthYear = prompt("what year were you born?");
    var ageInDayss = (2020 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' day old.');
    //giving a name to the 'id' attribute(?)
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}