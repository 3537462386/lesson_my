# 阿里巴巴双11界面开发
- 设计稿件
    750px 像素 一种尺寸 移动页面
    iphone 的小尺寸375pt（750px） Retina 屏幕 设计的标准
- 前端使命
    html+css+js 一像素不差的还原设计稿
    - 交互
    - css 带来视觉效果 css动画
    - 设计稿静态的——>动态
    - 兼容性 Alley 兼容性达到恐怖的99.99%

- css resert
    1. 抹平不同游览器的预设样式， 从0出发 ，在所有游览器上表现一致
    2. 利用css inherit 继承属性 body font-size font-family。。。
        游览器默认字体像素 16px

- rem 单位
    1. 在移动端， 为了兼容设备 少用甚至不用px
    2. 先给html 标签设置font-size 
        37.5px 固定？
        等比例缩放 1/10 方便去做栅格系统 布局
        如何在不同的设备上， 让1rem=设备宽度/10
    3. html 的font-size 要动态设置
        window.innerWidth 获得设备宽度
        document.documentElement.style.fontSize =  + "px"