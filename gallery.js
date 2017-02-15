var pics = ["https://pbs.twimg.com/media/B1JIgY2CEAEqxDK.jpg",
           "http://vignette3.wikia.nocookie.net/thesabrinatheteenagewitch/images/e/e2/Salem.png/revision/latest?cb=20120425121943",
           "http://www.cinemacats.com/wp-content/uploads/television/witchesofeastend02.jpg",
           "http://bluebuddies.com/Smurf_Picture_and_Files/00002416/azrael_1.jpg",
           "https://pbs.twimg.com/profile_images/378800000435699420/4ea94d1c28edc6367e71691a73081eb8.jpeg",
           "http://www.blastr.com/sites/blastr/files/styles/width_1280/public/images/pet-sematary.JPG?itok=lljldXn3&timestamp=1355779476",
           "https://s-media-cache-ak0.pinimg.com/originals/91/b4/0b/91b40bcb61f19aa85df5e44388802ab8.jpg"
           ];
var location = 0;

function goLeft(){
  location = location + 1;
  document.getElementById("pic").src=pics[location];
}

function goRight(){
  location = location - 1;
  document.getElementById("pic").src=pics[location];
}