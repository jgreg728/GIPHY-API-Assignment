// INITIAL ARRAY
var topics = ["Super Mario", "The Legend of Zelda", "Metroid", "Pokemon", "Starfox", "Pikmin", "Animal Crossing", "Super Smash Bros."]

// DISPLAY GIFs
function displayGIF() {
  var gifs = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=zkgXuP9qgxho9KA9w4TGyn3i3xVvBIBS&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data;
    console.log(response);

    

    // BUTTON CLICK EVENT
    $("#gifAdd").on("click", function (event) {
      event.preventDefault();
      var gif = $("#gifInput").val().trim();
      gifs.push(gif);
      console.log(gifs)
      renderButtons();

    });
    
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
$(document).on("click", ".gif", displayGIF);

$(document).ready(renderButtons());