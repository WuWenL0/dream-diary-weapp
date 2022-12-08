<template>
  <view class="nav-body">
    <!-- 占位符 -->
    <view class="nav-ph">
    </view>
    <view class="nav-bar">
      <view class="nav-bar-left">
        <slot name="left"></slot>
      </view>
      <view class="nav-bar-center">
        <template v-if="!!useSlots().content">
          <slot name="content"></slot>
        </template>
        <template v-else>
          <view class="nav-title">
            {{ title }}
          </view>
        </template>

      </view>
      <view class="nav-bar-right">

      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { systemInfo } from '../../utils/system-Info';

defineProps<{
  title?: string
}>()

const statusBarHeight:string = systemInfo.statusBarHeight + 'px';

</script>

<style lang="less">
@import '../../app.less';

.nav-body {
  height: calc(v-bind(statusBarHeight) + 46px);
  display: block;
  background-color: @navHeaderBgColor;
  z-index: 2023;

  .nav-ph {
    position: fixed;
    top: 0;
    left: 0;
    height: v-bind(statusBarHeight);
    right: 0;
    background-color: @navHeaderBgColor;
    z-index: 2023;
  }

  .nav-bar {
    height: 46px;
    display: flex;
    position: fixed;
    top: v-bind(statusBarHeight);
    left: 0;
    right: 0;
    background-color: @navHeaderBgColor;
    z-index: 2023;

    &-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20rpx;
    }

    &-center {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      .nav-title {
        min-width: 100px;
        font-size: 18px;
        font-weight: 600;
        overflow: hidden;
      }
    }

    &-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>