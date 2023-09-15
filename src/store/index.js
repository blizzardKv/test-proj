import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      goodsList: [
        { item: 'Grapes', id: 1 },
        { item: 'Apple', id: 2 },
        { item: 'Banana', id: 3 },
      ]
    }
  },
});
