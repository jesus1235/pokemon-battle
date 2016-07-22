var player = {
  x : 0,
  y : 100,
  velx : 0,
  vely : 0,
  sprite: [document.getElementById("playerf1"),
           document.getElementById("playerf2"),
           document.getElementById("playerf3"),
           document.getElementById("playerf4"),
        ],
  ticks: 0,
  spriteNum: 0,
  dir: "left",
  update: function(){
    this.ticks++;
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;
    if (this.velx != 0 || this.vely != 0)
    if(this.ticks % 10 === 0)
      this.spriteNum = this.spriteNum +1;
    if (this.spriteNum > 2) this.spriteNum = 0;


  },
  render: function(){
    if (this.dir == "right"){
      flipctx(ctx, this);
    }
    ctx.drawImage(this.sprite[this.spriteNum], this.x, this.y);
    if (this.dir == "right"){
      ctx.restore(ctx);
    }
  }
};
function flipctx(ctx, player){
    ctx.save();
    ctx.translate(player.x + 50, 0);
    ctx.scale(-1,1);
    ctx.translate(-player.x-50, 0);
}

function restorectx(){
      ctx.restore();
}
