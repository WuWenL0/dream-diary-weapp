import Taro from '@tarojs/taro'

const systemInfo = Taro.getSystemInfoSync()
console.log(systemInfo);


const bottomLift = systemInfo.screenHeight - systemInfo.safeArea!.bottom


export {
  systemInfo,
  bottomLift
}