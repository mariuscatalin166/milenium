// do request
var url = "../img.json",
    myData,
    count = 0; //array

fetch(url)
.then(function(res) {
  return res.json();
})
.then(function(res) {
  myData = res;
  addPhotos();
});

// make the photo
function appnedPhotos(src) {
  var imgBox = document.createElement("div");
  imgBox.classList.add("main-box");
  imgBox.innerHTML = `<img class="main-img" src=${src} alt="Hale Metalice o fotogorafie din galerie">`;
  document.getElementsByClassName("main-grid")[0].appendChild(imgBox);
}

lastI = 0;
//add the photos
function addPhotos() {
  count += 5;
  for (var i = lastI; i < count; i++) {
    if(myData.images.length > i && myData.images[i] != "") {
      appnedPhotos(myData.images[i]);
    }
    lastI = i;
  }
}

// show more
document.getElementById("more").addEventListener("click", function(){
  count += 5;
  addPhotos();
});