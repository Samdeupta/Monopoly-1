class Bank{
    constructor(){
        this.cash1;
        this.cash2;
        this.cash3;
        this.cash4;
    }

    cashLink(){
        this.cash1 = database.ref('players/player1/cash');
        this.cash1.value();

        this.cash2 = database.ref('players/player2/cash');
        this.cash2.value();
        
        this.cash3 = database.ref('players/player3/cash');
        this.cash3.value();
        
        this.cash4 = database.ref('players/player4/cash');
        this.cash4.value();

        Cash1 = this.cash1;
        Cash2 = this.cash2;
        Cash3 = this.cash3;
        Cash4 = this.cash4;
    }
}