class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            //player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+name);
            this.greeting.position(130,160);
        })
    }
}