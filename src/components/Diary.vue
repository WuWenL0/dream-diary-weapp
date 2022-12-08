<template>
  <Navigation title="日记">
    <template #left>
      <nut-icon name="date"></nut-icon>
    </template>
  </Navigation>
  <view class="diary-panel">
    <nut-row :gutter="10">
      <nut-col :span="12">
        <view class="welcome">
          <view class="welcome-text">
            {{ nowDate === "AM" ? '上午' : '下午' }}好呀！
          </view>
          <view class="hitokoto" v-if="hitokoto.hitokoto">
            <view class="hitokoto-content">
              {{hitokoto.hitokoto}}
            </view>
            <view class="hitokoto-from">
              ­­­­—{{hitokoto.fromWho}}「{{hitokoto.from}}」
            </view>
          </view>
        </view>
      </nut-col>
      <nut-col :span="12">
        <view class="statistical">
          <view class="statistical-diary">
            <view class="statistical-title">
              日记
            </view>
            <view class="statistical-num">
              9篇
            </view>
          </view>
          <view class="statistical-like">
            <view class="statistical-title">
              获赞
            </view>
            <view class="statistical-num">
              6个
            </view>
          </view>
        </view>
      </nut-col>
    </nut-row>
  </view>
  <view class="diary-body">
    <DiaryCard></DiaryCard>
    <DiaryCard :status="1"></DiaryCard>
  </view>
</template>

<script setup lang="ts">
import Navigation from './layout/Navigation.vue';
import DiaryCard from './card/DiaryCard.vue';
import { useDateFormat, useNow } from '@vueuse/core';
import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro';

const nowDate = ref(useDateFormat(useNow(), "A"))

// 一言
type hitokoto = {
  hitokoto?:string,
  from?:string,
  fromWho?:string,
}
const hitokoto = reactive<hitokoto>({})
const getHitokoto = () => {
  Taro.request({
    url: 'https://v1.hitokoto.cn/',
    method: 'GET',
    data: {
      c: 'd',
      max_length: 20
    },
    success: (res) => {
      if (res.statusCode === 200) {
        hitokoto.hitokoto = res.data.hitokoto
        hitokoto.from = res.data.from
        hitokoto.fromWho = res.data.from_who
      }
    }
  })
}
getHitokoto()


</script>

<style lang="less">
@import '../app.less';

.diary-panel {
  padding: @contentPadding;
  color: #ffffff;
  margin-top: 10rpx;

  .welcome {
    background-color: #1044a9;
    border-radius: @ContentRadius;
    padding: @contentPadding;
    display: flex;
    flex-direction: column;
    height: 250rpx;

    &-text {
      font-size: 50rpx;
    }

    .hitokoto{
      display: flex;
      flex-direction: column;
      font-size: 30rpx;
      margin-top: 10rpx;
      flex: 1;
      &-content{
        flex: 1;
      }
      &-from{
        display: flex;
        justify-content: flex-end;
        font-size: 25rpx;
      }
    }
  }

  .statistical {
    flex-direction: column;
    height: 250rpx;

    &-diary {
      height: calc(125rpx - 10px);
      background-color: #568bdd;
      border-radius: @ContentRadius;
      padding: @contentPadding;
      display: flex;
      justify-content: space-between;
      line-height: calc(125rpx - 10px);
    }

    &-like {
      height: calc(125rpx - 10px);
      line-height: calc(125rpx - 10px);
      margin-top: 10px;
      background-color: #bb192d;
      border-radius: @ContentRadius;
      padding: @contentPadding;
      display: flex;
      justify-content: space-between;
    }

    &-title {
      font-size: 35rpx;
    }

    &-num {
      font-size: 30rpx;
    }
  }
}

.diary-body {
  padding: @contentPadding;
}
</style>
