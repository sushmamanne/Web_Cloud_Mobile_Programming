// an array of colors and assign it to a variable colors
var colors = [ "22ac5e", "d68236", "71b5c2", "af2655", "b34de7", "e6bd01", "104393", "ca4d94", "4a772d", "c180a7", "958112", "8d2f8d" ]
var randId = 1;
// Creating new Favorites List
var favoriteColors = []

// sets the preview color to the one entered in the input and display its color code using setPreviewColor function
function setPreviewColor(color) {
    $('.preview').css('background-color', color);
    $('.color-code').text($('.preview').css('background-color'));

}
//adds color boxes to the favorite colors
function addBox(color) {
    $('#colors').prepend("<div class='item' id="+randId+" onclick='getselectColor(this)' style='background-color: " + color + ";'><div>");
}

function getselectColor(val){
    color =    document.getElementById(val.id).style.backgroundColor;
    setPreviewColor(color)
}
$(document).ready(function(){

    //1.As the page loads add each color in the colors array to the div '#colors'

    // Iterating the Array and adding it to the Box.
    colors.forEach(function(color) {
        addBox(color)
        randId+=1
    });

//set the preview color to one of the colors in the colors array randomly
    setPreviewColor(colors[Math.floor(Math.random()*colors.length)]);
    // an event handler for the key up event i.e. when the user types the color in the input and releases the key on the keyboard
//The event should set the preview color to the color typed in the input
    $(document).on('keydown keyup keypress', '#colortext', function(){
        color = $(this).val();
        console.log(color)
        setPreviewColor(color);
    })
//2.Write an event handler to handle the click the event on the add to favorite button so that the color gets added to the list of favorite colors,
// the content of the input gets cleared and the focus gets back on the input

    $(document).on("click","#add-to-favorite",function() {
        var inputColor = $("#colortext").val();

        if(favoriteColors.indexOf(inputColor) <= -1){
            favoriteColors.push(inputColor);
        }else{
            alert("Color "+inputColor+ " is already added to your favorites.")
        }

        // Empty html first before iterating the list
        $('#favorites').html("");

        $('#favoritesText').show();

        favoriteColors.forEach(function (color) {
            $('#favorites').prepend("class='item' id='"+ color +"' style='background-color: " + color);
        });

        $("#colortext").val('');
        $("#colortext").focus();
    });


//3.Write events handlers such that whenever any item in the favorite colors is clicked or hovered, the color gets displayed in the preview div
    $("#colortext").on("click mouseover","#favorites .item",function() {
        var color = $(this).attr('id');
        setPreviewColor(color);
    });

});