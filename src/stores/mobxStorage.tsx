import { action, makeObservable, observable } from "mobx";

class Store {
    count: number = 0;
    tab: number = 0

    constructor() {
        makeObservable(this, {
            count: observable,
            tab: observable,
            increase: action,
            changeTab: action
        })
    }

    increase = () => {
        this.count += 1
    }

    changeTab = (index: number) => {
        this.tab = index
    }
}

export default new Store