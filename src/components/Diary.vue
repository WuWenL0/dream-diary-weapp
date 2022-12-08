<template>
  <Navigation title="日记">
    <template #left>
      <nut-icon name="date"></nut-icon>
    </template>
  </Navigation>
  <view class="diary">
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
    <DiaryCard></DiaryCard>
  </view>
</template>

<script setup lang="ts">
import Navigation from './layout/Navigation.vue';
import DiaryCard from './card/DiaryCard.vue';

// import { ref,reactive } from "vue"
</script>

<style lang="less">
@import '../app.less';
.diary {
  padding: @contentPadding;
}
</style>
