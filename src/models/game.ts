export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public avatarUrls: string[] = [
        'src/assets/img/profile-img/1.png',
        'src/assets/img/profile-img/2.png',
        'src/assets/img/profile-img/3.png',
        'src/assets/img/profile-img/4.png',
        'src/assets/img/profile-img/5.png',
        'src/assets/img/profile-img/6.png',
        'src/assets/img/profile-img/7.png',
        'src/assets/img/profile-img/8.png',
        'src/assets/img/profile-img/9.png',
        'src/assets/img/profile-img/10.png'
    ];

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('heart_' + i);
            this.stack.push('club_' + i);
            this.stack.push('diamond_' + i);
        }
        shuffle(this.stack);
    }
}

    function shuffle(array: string[]) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }