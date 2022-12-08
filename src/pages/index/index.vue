<template>
  <view class="app-content">
    <!-- 页面 -->
    <view class="content-body">
      <Diary v-if="(activeIndex === 0)"></Diary>
      <Cloud v-if="(activeIndex === 1)"></Cloud>
      <My v-if="(activeIndex === 2)"></My>
    </view>
    <!-- 导航 -->
    <view class="tab-bar" :style="{ marginBottom: bottomLift + 'px' }">
      <view class="tab-bar-item" @tap="handleNavigation(0)">
        <view class="tab-bar-item-content" :class="{ 'tab-bar-item-acitive': activeIndex === 0 }">
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="book" size="50rpx" />
        </view>
      </view>
      <view class="tab-bar-item" @tap="handleNavigation(1)">
        <view class="tab-bar-item-content" :class="{ 'tab-bar-item-acitive': activeIndex === 1 }">
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="cloud" size="50rpx" />
        </view>
      </view>
      <view class="tab-bar-item" @tap="handleNavigation(2)">
        <view class="tab-bar-item-content" :class="{ 'tab-bar-item-acitive': activeIndex === 2 }">
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="person" size="50rpx" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Diary from "../../components/Diary.vue"
import Cloud from "../../components/Cloud.vue"
import My from "../../components/My.vue"
import { bottomLift } from "../../utils/system-Info";


// 导航栏处理逻辑
const activeIndex = ref<number>(0);
const handleNavigation = (index: number) => {
  activeIndex.value = index
}

</script>

<style lang="less">
@import '../../app.less';
.tab-bar {
  width: 80%;
  height: 140rpx;
  border-radius: 9999rpx;
  z-index: 2023;
  position: fixed;
  left: 0;
  background-color: #ffffff;
  margin: 0 auto;
  right: 0;
  bottom: 0;
  justify-content: space-around;
  text-align: center;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0px 6px 30px 5px rgb(0 0 0 / 5%), 0px 16px 24px 2px rgb(0 0 0 / 4%), 0px 8px 10px -5px rgb(0 0 0 / 8%);

  &-item {
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    padding: 20rpx 20rpx;

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 9999rpx;
      text-align: center;
      height: 100%;
      width: 100%;
      line-height: 140rpx;

      text {
        margin: 0 auto;
      }
    }
  }

  &-item-acitive {
    background-color: @navActBgColor;
    color: @navColor;
  }
}
</style>
