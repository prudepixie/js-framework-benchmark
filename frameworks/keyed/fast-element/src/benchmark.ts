import { observable } from "@microsoft/fast-element";

function _random(max: number) {
    return Math.round(Math.random()*1000) % max;
}

const adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
const colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
const nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];

export class RandomItem {
    @observable label: string;

    constructor(public readonly id: number) {
        this.label = adjectives[_random(adjectives.length)] + " " + colours[_random(colours.length)] + " " + nouns[_random(nouns.length)];
    }
}

export class Benchmark {
    @observable data: RandomItem[] = [];
    @observable selected: RandomItem | undefined = undefined;
    id = 0;

    buildData(count = 1000) {
        const data = [];
        
        for (let i = 0; i < count; i++) {
            data.push(new RandomItem(++this.id));
        }

        return data;
    }

    remove(item: RandomItem) {
        const idx = this.data.indexOf(item);
        this.data.splice(idx, 1);
    }

    run() {
        this.data = this.buildData();
    }

    add() {
        this.data = this.data.concat(this.buildData());
        this.selected = undefined;
    }

    update() {
        const data = this.data;

        for (let i = 0, ii = data.length; i < ii; i += 10) {
            data[i].label += ' !!!';
        }
    }

    select(item: RandomItem) {
        this.selected = item;
    }

    runLots() {
        this.data = this.buildData(10000);
        this.selected = undefined;
    }

    clear() {
        this.data = [];
        this.selected = undefined;
    }

    swapRows() {
        if (this.data.length > 998) {
            const temp = this.data[1];            
            const temp2 = this.data[998];  
            this.data.splice(1, 1, temp2);
            this.data.splice(998, 1, temp);
        }
    }
}