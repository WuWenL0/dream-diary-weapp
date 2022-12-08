<template>
  <view class="message-card">
    <view class="card-top">
      <view class="avatar">
        <nut-avatar size="normal" :icon="avatar"></nut-avatar>
      </view>
      <view class="info">
        <view class="name">
          {{ nickName }}
        </view>
        <view class="time">
          {{ createTime }}
        </view>
      </view>
    </view>
    <view class="card-content">
      {{ content }}
    </view>
    <view class="card-bottom">
      <view class="comment">
        <nut-icon name="comment"></nut-icon>
        <view class="number">
          {{ commentNum }}
        </view>
      </view>
      <view class="like">
        <nut-icon name="fabulous"></nut-icon>
        <view class="number">
          {{ likeNum }}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// import { ref,reactive } from "vue"
withDefaults(defineProps<{
  avatar?: string,
  nickName?: string,
  content?: string,
  createTime?: string,
  commentNum?: number,
  likeNum?: number
}>(), {
  avatar: 'my',
  nickName: '默认名称',
  content: '无内容',
  createTime: '2022/12/07 12:33:22',
  commentNum: 0,
  likeNum: 0
})
</script>

<style lang="less">
@import '../../app.less';

.message-card {
  display: flex;
  flex-direction: column;
  border: 1px solid @borderColor;
  border-radius: @ContentRadius;
  background-color: @contentBgColor;
  margin-bottom: 20rpx;

  .card-top {
    display: flex;
    padding: @infoPadding;

    .avatar {
      width: 100rpx;
      display: flex;
      justify-content: center;
    }

    .info {
      flex: 1;

      .name {
        font-weight: bolder;
        font-size: @fontTitleSize;
      }

      .time {
        font-size: @fontSubTitleSize;
        color: @fontSubTitleColor;
      }
    }
  }

  .card-content {
    min-height: 80rpx;
    padding: @infoPadding;
    font-size: @fontContentSize;
  }

  .card-bottom {
    display: flex;
    justify-content: space-around;
    line-height: 70rpx;
    height: 70rpx;
    border-top: 1px solid @borderColor;

    .comment {
      flex: 1;
      text-align: center;
    }

    .like {
      flex: 1;
      border-left: 1px solid @borderColor;
      text-align: center;
    }

    .number {
      display: inline-block;
      vertical-align: middle;
    }

    .nut-icon {
      vertical-align: middle;
    }
  }
}
</style>
