import { observable, action, computed, makeAutoObservable } from "mobx";
import { createContext } from "react";

export default class CounterStore {
    
    @observable count=0;

    constructor() {
        makeAutoObservable(this)
    }

    @action addCount=()=>{
        this.count++;
        console.log(`Added => ${this.count}`)
        console.log("=============================================")
    }

    @action subtractCount=()=>{
        this.count--;
        console.log(`Subtracted => ${this.count}`)
        console.log("=============================================")
    }

    @computed get getCountValue(){
        return this.count;
    }


}

export const CounterStoreContext = createContext(new CounterStore())