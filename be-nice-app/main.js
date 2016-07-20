var insultArray = ['Your mother smells of rotten cabbage','You SUCK','You are responsible for Ebola', 'SHAME!','You dishonor your family!', 'Your face looks like a sack of cottage cheese left in the sun'];

function generate() {
  return Math.floor(Math.random() * insultArray.length)
}


console.log(generate());

$("button").on('click', function(){
  $('#result h1').html(insultArray[generate()]);
})
