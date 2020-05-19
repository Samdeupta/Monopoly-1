class Player {

  constructor(){
    this.index = null;
    this.name = null;
    this.block = 0;

    this.cash = 1500;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = 'players/player' + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      cash: this.cash,
      block: this.block
    });

    PlayerIndex = playerIndex;
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });
  }

  index = this.index; 
  Cash = this.cash;
}


