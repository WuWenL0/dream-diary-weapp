<template>
  <view class="diary-card">
    <view class="diary-card-top">
      <view class="diary-card-date">
        <view class="diary-card-date-left">
          <view class="diary-card-date-left-top">
            {{ useDateFormat(date, 'YY-MM').value }}
          </view>
          <view class="diary-card-date-left-bottom">
            {{ useDateFormat(date, 'DD').value }}
          </view>
        </view>
        <view class="diary-card-date-right">
          <view class="diary-card-date-right-top">
            {{ useDateFormat(date, 'dddd').value }}
          </view>
          <view class="diary-card-date-right-bottom">
            {{ useDateFormat(date, 'HH:mm').value }}
          </view>
        </view>
      </view>
      <view class="diary-card-create-date">
        <nut-tag v-if="(status === 0)" type="primary">公开</nut-tag>
        <nut-tag v-else type="danger">私密</nut-tag>
      </view>
    </view>
    <view class="diary-card-content">
      {{ content }}
    </view>
    <view class="diary-card-bottom">
      <view class="diary-card-bottom-item">
        <nut-icon size="28rpx" name="del"></nut-icon>
      </view>
      <view class="diary-card-bottom-item">
        <nut-icon size="28rpx" name="edit"></nut-icon>
      </view>
      <view class="diary-card-bottom-item">
        <nut-icon size="28rpx" name="top"></nut-icon>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// import { ref,reactive } from "vue"
import { useDateFormat } from '@vueuse/core'
console.log(useDateFormat('2022/12/08 09:52:59', 'YYYY-MM-DD HH:mm:ss dddd').value);

withDefaults(defineProps<{
  date?: string,
  createDate?: string,
  content?: string,
  status?: number,
}>(), {
  date: '2022/12/08 09:52:59',
  createDate: '2022/12/09 12:21:00',
  content: '测试文字',
  status: 0
})
</script>

<style lang="less">
@import '../../app.less';
.diary-card{
  display: flex;
  flex-direction: column;
  border: 1px solid @borderColor;
  border-radius: @ContentRadius;
  background-color: @contentBgColor;
  margin-bottom: 20rpx;
  padding: @infoPadding;

  &-top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10rpx;
    border-bottom: 1px solid @borderColor;
  }

  &-date{
    display: flex;

    &-left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #f5f5f5;
      padding: 5rpx 20rpx;
      border-radius: 10rpx;
      &-top{
        font-size: 20rpx;
      }
      &-bottom{
        font-size: 40rpx;
      }
    }

    &-right{
      font-size: 30rpx;
      margin-left: 10rpx;

      &-top{
        font-size: 30rpx;
      }
      &-bottom{
      font-size: 30rpx;
      }
    }
  }

  &-create-date{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-content{
    min-height: 80rpx;
    padding: @infoPadding;
    font-size: @fontContentSize;
  }

  &-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &-item{
      padding: 10rpx 0;
      display: flex;
      flex: 1;
      justify-content: center;
    }
  }
}
</style>