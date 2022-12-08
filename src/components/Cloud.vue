<template>
  <Navigation>
    <template #content>
      <nut-tabs v-model="activeIndex" @click="changeTabList">
        <nut-tabpane title="最新"> </nut-tabpane>
        <nut-tabpane title="推荐"> </nut-tabpane>
        <nut-tabpane title="我的"> </nut-tabpane>
      </nut-tabs>
    </template>
  </Navigation>
  <view class="cloud">
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MessageCard from "./card/MessageCard.vue";
import Navigation from "./layout/Navigation.vue";

const activeIndex = ref<number>(1);
const changeTabList = (tab: any) => {
  activeIndex.value = tab.paneKey as number;
}

</script>

<style lang="less">
@import '../app.less';
.cloud {
  padding: @contentPadding;
}
</style>
