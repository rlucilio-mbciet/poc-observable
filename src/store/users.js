import { StoreBase } from "./store-base";

class UserStore extends StoreBase {
    constructor() {
        super({
            state: {
                //Em caso de array
                names: {...['Init', 'teste', '123']},
                age: 123
            },
            actions: {
                fetchName: () => {
                    const mockFetch = () => 'Fetch name';

                    this.mutations.setName(mockFetch());
                }
            },
            getters: {
                upperName: () => this.state.names[0].toUpperCase()
            },
            mutations: {
                setName: (value ) => {
                    this.state.names[0] = value;
                }
            }
        });
    }
}

export default new UserStore();