var angle = 50;     // starting position (degrees)
var speeds = 100;    // revolution speed in degrees per second
/*750000/240.9
750000/66
50000/1000
100000/1900
750000/12000
500000/29500
10000000/84000
10000000/165000*/
var rate  = 1;// refresh rate in ms
var mercuryAngle = 40;
var venusAngle = 50;
var earthAngle = 70;
var marsAngle = 20;
var jupiterAngle = 10;
var saturnAngle = 30;
var uranusAngle = 25;
var neptuneAngle = 40;
var rocketAngle = 35;
function sunGravity(planet, speed, angle) {


  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)*2;
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)/2;
  var distance = Math.max(Math.pow((Math.pow(w,2) + Math.pow(h,2)),.5))/1.0; // distance of b from a

  var o = $('#sun_container').offset();

  var t = h/2 + 175;
  var l = o.left+ (distance * Math.sin((angle) * Math.PI/180.0));

  $(planet).css({
    top: t,
    left: l
  });

  angle = ((angle + speed/5000) % 90);
  return angle;
}

function gravity(){
  mercuryAngle = sunGravity("#mercury_container", 161, mercuryAngle);
  venusAngle = sunGravity("#venus_container",117, venusAngle);
  earthAngle = sunGravity("#earth_container",100, earthAngle);
  marsAngle = sunGravity("#mars_container",080, marsAngle);
  jupiterAngle = sunGravity("#jupiter_container",043, jupiterAngle);
  saturnAngle = sunGravity("#saturn_container",032, saturnAngle);
  uranusAngle = sunGravity("#uranus_container",023, uranusAngle);
  neptuneAngle = sunGravity("#neptune_container",018 ,neptuneAngle);
  rocketAngle = sunGravity("#rocket_container",100 ,rocketAngle);
}

$(function() {
  setInterval(gravity, rate);
});
