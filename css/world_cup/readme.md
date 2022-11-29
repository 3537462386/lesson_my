# 营销h5页面特效开发
- 招商银行

1. ！DOCTYPE html
    html5 版本的声明                            Y

2. rotateX（90deg）  推到 顺时针               |
    rotateY     钢管舞              X——————————————————
    rotateZ     轮胎                          |
    perspctive   视点 眼睛离屏幕的距离 远近  大小  往里translateZ：负值     往外translateZ：正值
    transform-style：perseve-3d

3. html 怎么看到静态页面？（用户体验，越快也好）
    html(结构) + css（样式） js（交互，DOM，style）  晚一点
    - 下载html 文档
    - link script image......
        启动下载 css href   不会阻塞html下载 放在头部
        script  src     放在最后  阻塞
        image  src

4. Chrome 游览器的内核 webkit
    ie  游览器  edge
    Mozilla  
    360  如果本地装了Chrome  webkit
    否则  ms
    实验中的新属性  可能需要 添加 支持
    -webkit-backface

- 如何隐藏一个元素， 区别？
    dispaly:none; 隐藏      让元素离开文档流
    visibility:hidden;
    opacity: 0;
    文档流  一个html文件就叫一个文档
    盒子， html元素 像水流一样 从上到下（块级block），从左到右（inline inline-block）
    htm元素就在占有位置 = 盒子模型决定的 = 内容+padding+border+margin
     文档流 + 盒子模型 决定看到的页面
     脱离正常文档流， 定位


- 3D 世界杯反转特效
    1. 正面 立方体的最里面 translateZ(330px)
    2. 下面 本来  也是layer1 在一起的，
        transform-style：preserve-3d；
        rotateX(-90deg)
    3. screen   screen_x90 类 顺时针旋转90
        正面就看不到了
        底面变成了新的正面

- 添加了触屏事件系统
    PC click  dbclick  submit  keydown  。。。
    mobile  手势  tap  pinch(down|up)  
    hammer.js(手势库)  
