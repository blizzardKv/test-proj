<template>
  <div class="test">
    <div>
      <div @click="toggleButton"></div>
    </div>
    {{ count }}
  </div>

  <button @click="onSwitchContentTypeButtonClick"></button>

  <div class="page-content">
    <WelcomeItem
      v-if="contentType === 'welcome'"
      :item-data="itemData"
    />

    <GreetingItem
      v-if="contentType === 'greeting'"
      :item-data="itemData"
    />

    <EncourageItem
      v-if="contentType === 'encourage'"
      :item-data="itemData"
    />
  </div>

  <div class="gooDS-list">
    <button @click="onGoodsListButtonClick"></button>

    <div v-if="goodsList.length > 2" v-for="item in goodsList">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WelcomeItem from './components/WelcomeItem.vue';
import GreetingItem from './components/GreetingItem.vue';
import EncourageItem from './components/EncourageItem.vue';
import { dataMixin } from '@/mixins';

export default {
  name: 'World',
  mixins: [dataMixin],
  props: {
    itemData: { type: Object, required: true },
    count: { type: Number, required: true },
  },
  components: {
    EncourageItem,
    WelcomeItem,
    GreetingItem,
  },
  data() {
    return {
      showButton: false,
      contentType: 'default',
      itemTypes: ['default', 'welcome', 'greeting', 'encourage'],
    };
  },
  computed: {
    ...mapState(['goodsList']),
  },
  mounted() {
    setInterval(() => this.increaseCount, 200);
  },
  methods: {
    increaseCount() {
      this.count += 1;
    },

    toggleButton() {
      this.showButton = !this.showButton;
    },

    onButtonClick() {
      this.isContentShow = !this.isContentShow;
    },

    onSwitchContentTypeButtonClick() {
      this.contentType = this.itemTypes[2];
    },

    onGoodsListButtonClick() {
      this.goodsList.push({ item: 'NewGood', id: 4 });
    }
  }
}
</script>

<style>
.test {
  display: flex
}

button {
  display: flex
}

.goods-list {
  background-color: red;
}
</style>
