module.exports = class Team {
    constructor(id,avengers) {
        this.id = id;
        this.avengers = avengers;
    }

    battle(damage) {
        for(let i = 0; i < this.avengers.length; i++) {
            this.avengers[i].hp -= damage;
        }
    }

    calculateLoses(clonedTeam) {
        let count = 0;
        for(let i = 0; i < this.avengers.length; i++) {
            if(this.avengers[i].hp <= 0) count++;
        }

        if(count == 0) console.log("We haven't lost anyone in this battle!");
        else console.log(`In this battle we lost ${count} Avengers.`);
    }

}

