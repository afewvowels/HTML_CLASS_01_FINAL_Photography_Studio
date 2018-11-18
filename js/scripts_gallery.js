window.addEventListener('load', function() {
  if(location.href == "http://kbsmith01.people.ysu.edu/CSIS_1570/final_project/gallery.html?#drone") {
    displayDrone();
    console.log('drone');
  } else if(location.href == "http://kbsmith01.people.ysu.edu/CSIS_1570/final_project/gallery.html?#environmental") {
    displayEnvironmental();
    console.log('environmental');
  } else if(location.href == "http://kbsmith01.people.ysu.edu/CSIS_1570/final_project/gallery.html?#portraits") {
    displayPortraits();
    console.log('portraits');
  } else if(location.href == "http://kbsmith01.people.ysu.edu/CSIS_1570/final_project/gallery.html?#travel") {
    displayTravel();
    console.log('travel');
  } else if(location.href == "http://kbsmith01.people.ysu.edu/CSIS_1570/final_project/gallery.html?#wildlife") {
    displayWildlife();
    console.log('wildlife');
  } else if(location.href == "http://kbsmith01.people.ysu.edu/CSIS_1570/final_project/gallery.html?#video") {
    displayVideo();
    console.log('video');
  }
});

drone = document.getElementById('drone_url');
drone.addEventListener('click', displayDrone);

environmental = document.getElementById('environmental_url');
environmental.addEventListener('click', displayEnvironmental);

portraits = document.getElementById('portraits_url');
portraits.addEventListener('click', displayPortraits);

travel = document.getElementById('travel_url');
travel.addEventListener('click', displayTravel);

wildlife = document.getElementById('wildlife_url');
wildlife.addEventListener('click', displayWildlife);

video = document.getElementById('video_url');
video.addEventListener('click', displayVideo);

function displayDrone() {
  var drone = document.getElementsByClassName('drone');
  drone[0].classList.remove('hidden');
  drone[1].classList.remove('hidden');

  var environmental = document.getElementsByClassName('environmental');
  environmental[0].classList.add('hidden');
  environmental[1].classList.add('hidden');

  var portraits = document.getElementsByClassName('portraits');
  portraits[0].classList.add('hidden');
  portraits[1].classList.add('hidden');

  var travel = document.getElementsByClassName('travel');
  travel[0].classList.add('hidden');
  travel[1].classList.add('hidden');

  var wildlife = document.getElementsByClassName('wildlife');
  wildlife[0].classList.add('hidden');
  wildlife[1].classList.add('hidden');

  var video = document.getElementsByClassName('video');
  video[0].classList.add('hidden');
  video[1].classList.add('hidden');
  video[2].classList.add('hidden');
  video[3].classList.add('hidden');
}

function displayEnvironmental() {
  var drone = document.getElementsByClassName('drone');
  drone[0].classList.add('hidden');
  drone[1].classList.add('hidden');

  var environmental = document.getElementsByClassName('environmental');
  environmental[0].classList.remove('hidden');
  environmental[1].classList.remove('hidden');

  var portraits = document.getElementsByClassName('portraits');
  portraits[0].classList.add('hidden');
  portraits[1].classList.add('hidden');

  var travel = document.getElementsByClassName('travel');
  travel[0].classList.add('hidden');
  travel[1].classList.add('hidden');

  var wildlife = document.getElementsByClassName('wildlife');
  wildlife[0].classList.add('hidden');
  wildlife[1].classList.add('hidden');

  var video = document.getElementsByClassName('video');
  video[0].classList.add('hidden');
  video[1].classList.add('hidden');
  video[2].classList.add('hidden');
  video[3].classList.add('hidden');
}

function displayPortraits() {
  var drone = document.getElementsByClassName('drone');
  drone[0].classList.add('hidden');
  drone[1].classList.add('hidden');

  var environmental = document.getElementsByClassName('environmental');
  environmental[0].classList.add('hidden');
  environmental[1].classList.add('hidden');

  var portraits = document.getElementsByClassName('portraits');
  portraits[0].classList.remove('hidden');
  portraits[1].classList.remove('hidden');

  var travel = document.getElementsByClassName('travel');
  travel[0].classList.add('hidden');
  travel[1].classList.add('hidden');

  var wildlife = document.getElementsByClassName('wildlife');
  wildlife[0].classList.add('hidden');
  wildlife[1].classList.add('hidden');

  var video = document.getElementsByClassName('video');
  video[0].classList.add('hidden');
  video[1].classList.add('hidden');
  video[2].classList.add('hidden');
  video[3].classList.add('hidden');
}

function displayTravel() {
  var drone = document.getElementsByClassName('drone');
  drone[0].classList.add('hidden');
  drone[1].classList.add('hidden');

  var environmental = document.getElementsByClassName('environmental');
  environmental[0].classList.add('hidden');
  environmental[1].classList.add('hidden');

  var portraits = document.getElementsByClassName('portraits');
  portraits[0].classList.add('hidden');
  portraits[1].classList.add('hidden');

  var travel = document.getElementsByClassName('travel');
  travel[0].classList.remove('hidden');
  travel[1].classList.remove('hidden');

  var wildlife = document.getElementsByClassName('wildlife');
  wildlife[0].classList.add('hidden');
  wildlife[1].classList.add('hidden');

  var video = document.getElementsByClassName('video');
  video[0].classList.add('hidden');
  video[1].classList.add('hidden');
  video[2].classList.add('hidden');
  video[3].classList.add('hidden');
}

function displayWildlife() {
  var drone = document.getElementsByClassName('drone');
  drone[0].classList.add('hidden');
  drone[1].classList.add('hidden');

  var environmental = document.getElementsByClassName('environmental');
  environmental[0].classList.add('hidden');
  environmental[1].classList.add('hidden');

  var portraits = document.getElementsByClassName('portraits');
  portraits[0].classList.add('hidden');
  portraits[1].classList.add('hidden');

  var travel = document.getElementsByClassName('travel');
  travel[0].classList.add('hidden');
  travel[1].classList.add('hidden');

  var wildlife = document.getElementsByClassName('wildlife');
  wildlife[0].classList.remove('hidden');
  wildlife[1].classList.remove('hidden');

  var video = document.getElementsByClassName('video');
  video[0].classList.add('hidden');
  video[1].classList.add('hidden');
  video[2].classList.add('hidden');
  video[3].classList.add('hidden');
}

function displayVideo() {
  var drone = document.getElementsByClassName('drone');
  drone[0].classList.add('hidden');
  drone[1].classList.add('hidden');

  var environmental = document.getElementsByClassName('environmental');
  environmental[0].classList.add('hidden');
  environmental[1].classList.add('hidden');

  var portraits = document.getElementsByClassName('portraits');
  portraits[0].classList.add('hidden');
  portraits[1].classList.add('hidden');

  var travel = document.getElementsByClassName('travel');
  travel[0].classList.add('hidden');
  travel[1].classList.add('hidden');

  var wildlife = document.getElementsByClassName('wildlife');
  wildlife[0].classList.add('hidden');
  wildlife[1].classList.add('hidden');

  var video = document.getElementsByClassName('video');
  video[0].classList.remove('hidden');
  video[1].classList.remove('hidden');
  video[2].classList.remove('hidden');
  video[3].classList.remove('hidden');
}

// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var images = document.getElementsByClassName('gallery_image');
// Get the image and insert it inside the modal - use its "alt" text as a caption
for(var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
