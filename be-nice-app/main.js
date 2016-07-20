var insultArray = ['Your mother smells of rotten cabbage','You SUCK','You are responsible for Ebola', 'SHAME!','You dishonor your family!', 'Your face looks like a sack of cottage cheese left in the sun'];

var bgiArray = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];

function generate() {
  return Math.floor(Math.random() * (insultArray.length))
}
function bgiClass() {
  return Math.floor(Math.random() * (bgiArray.length))
}

console.log(generate());

$("button").on('click', function(){
  $('#result h1').html(insultArray[generate()]);
/////// what you are trying to do is to nest a function for .removeClass .addClass()
  $("body").removeClass().addClass(bgiArray[bgiClass()]);
//console.log($('#gifid'));
})
