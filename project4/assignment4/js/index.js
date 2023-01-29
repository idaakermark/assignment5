$(function() {
    const API_ADDRESS = "https://finalspaceapi.com/api/v0/character/";

    function getRandomCharacter() {
        let id = Math.floor(Math.random() * 47);

        fetch(API_ADDRESS + id)
        .then((response) => {
            if (!response.ok) {
                throw new Error (response.status)
            } else {
                return response.json()
            }  
        })

        .then((data) => {
            $(".character").text(data.name);
            $(".species").text(data.species);
            $(".gender").text(data.gender);
            $(".image").attr("src", data.img_url)
        })  

        .catch(error => {
            $("main").append("<div class='error'>").text("something went wrong: " + error);
        })  
  
    }
    $(".get-character").on("click", getRandomCharacter);
})

