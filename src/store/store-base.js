export class StoreBase {
    constructor({state, mutations, actions, getters}) {
        this.refMutations = mutations;
        this.refActions = actions;
        this.refGetters = getters;
        this.refState = state;
    }

    get mutations() {
        if (!this.refMutations) {
            throw new Error('No mutations registered');
        }

        return this.refMutations;
    }

    get actions() {
        if (!this.refActions) {
            throw new Error('No actions registered');
        }

        return this.refActions;
    }

    get getters() {
        if (!this.refGetters) {
            throw new Error('No getters registered');
        }

        return this.refGetters;
    }

    get state() {
        if (!this.refState) {
            throw new Error('No state registered');
        }

        return this.refState;
    }
}