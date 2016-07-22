$(document).keydown(function(e){
  if (e.keyCode == 37){
     player.velx = -5;
     player.dir = "left";
   }
  if (e.keyCode == 38) player.vely = -5;
  if (e.keyCode == 39){
     player.velx = 5;
     player.dir = "right";
   }
  if (e.keyCode == 40) player.vely = 5;
});
$(document).keyup(function(e){
  if (e.keyCode == 37) player.velx = 0;
  if (e.keyCode == 38) player.vely = 0;
  if (e.keyCode == 39) player.velx = 0;
  if (e.keyCode == 40) player.vely = 0;
});

$(document).on('touchmove', function(e){
  e.preventDefaul();
  var touchx = e.touches[0].clientx;
  var touchy = e.touches[0].clienty;
  if (touchx < player.x) player.velx = -5;
  if (touchx > player.x) player.velx = 5;
  if (touchy < player.y) player.vely = -5;
  if (touchy > player.y) player.vely = 5;
});
$(document).on('touchend', function(e){
  player.velx = 0;
  player.vely= 0;
});
