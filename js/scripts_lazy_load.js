/*
  This script loads the actual images into the img tags. First all img tags
  are loaded with a loading .gif that is very tiny. The actual image is not in 'src'
  but 'data-src' which this script swaps out one at a time.

  This allows the page to fully load its structure before images are loaded.
*/
window.addEventListener('load', function(){
    var allimages = document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)
