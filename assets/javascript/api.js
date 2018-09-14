// INITIAL ARRAY
var topics = ["Super Mario", "The Legend of Zelda", "Metroid", "Pokemon", "Starfox", "Pikmin", "Animal Crossing", "Super Smash Bros."]

// DISPLAY GIFs
function displayGIF(btn) {
  var gif = $(btn).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=zkgXuP9qgxho9KA9w4TGyn3i3xVvBIBS&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function (response) {
    $("#gifDiv").text(JSON.stringify(response.data));
    
    // var gifURL = response.data.image_original_url;
    // var gifPrint = $("<img>");
    // gifPrint.attr("src", gifURL);
    // gifPrint.attr("alt", "gif print");
    // $("#gifDiv").prepend(gifPrint);
    console.log(this);
  });
  
}

// RENDER/ADD BUTTONS
  function renderButtons() {
      $("#buttonDiv").empty();
      for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("gif");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttonDiv").append(newButton);
      }
    };
// DISPLAY GIFs
$(document).on("click", ".gif", function(){
  displayGIF(this)
});


$(document).ready( function(){

      // BUTTON CLICK EVENT
      $("#gifAdd").on("click", function (event) {
        event.preventDefault();
        var gif = $("#gifInput").val().trim();
        topics.push(gif);
        renderButtons();  
      });

  renderButtons()
});