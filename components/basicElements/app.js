$(document).ready(function() {
    let allPTags = $('p');
    allPTags.text('P What???? P Tag!!!');

    let myDiv = $('.myDiv');
    myDiv.css('background-color', 'yellow');

    let myChildDiv = $('.myChildDiv');
    myChildDiv.text('These are all children of my div');
    myChildDiv.css('margin-left', '10px');
    myChildDiv.css('background-color', 'green'); 

    let yourDiv = $('.yourDiv');
    yourDiv.text('this is your div, it has a border');
    yourDiv.css('border-style', 'solid');

    let newDiv = $('<div></div>');
    newDiv.addClass('invisibleDiv');
    newDiv.text('this is a new div, you cannot see it in the HTML file but it exists on the DOM');
    newDiv.css('color', 'purple');
    yourDiv.after(newDiv);
    
    let buttonCounter = 0;
    
    let myId = $('#my-id');
        myId.text(buttonCounter);
    
    
    $('#plus-one').on('click', () => {
        buttonCounter += 1;
        myId.text(buttonCounter);    
    });

    $('#minus-one').on('click', () => {
        buttonCounter -= 1;
        myId.text(buttonCounter);
    });

});