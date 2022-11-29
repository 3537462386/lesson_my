# 塔斯汀小程序模仿项目
- 本项目归塔斯汀所有， 只做学习所用， 请尊重原厂版权
- 可以去监听访问数据  fiddler 抓包工具抓取图片
- 界面模仿采用markman做标记
  1. 我们没有设计搞， 如何1:1 还原小程序？
  2. 拍屏得到小程序截图
  3. 使用在线大小[转换工具](https://www.gaitubao.com/)，讲图片改成750
    以后在写wxss的时候，直接量像素就可以写进去， 因为小程序以750rpx作为
    设计稿标准大小帮我们自动适配，很好用。
  4. 使用[markman](http://www.getmarkman.com/) 先标注，在写样式
    以后呢，上了班就不用了， 有设计师给你标好
    现在， 还是自己来LOL 吧
    
- 项目配置在根目录app.json
    - 隐藏并定制navigationBar
    "navigationStyle" : "custom"
    - 启动定位功能

- 使用了BEM 国际命名规范
    tst_banners 广告位
    tst_banners__img  Element

- css 技巧
    1. 能不用定位就不要用定位
    会脱离文档流
    2. 移动端多用弹性布局

- git 提交
  1. 第一次命令行提交
     全局配置 git config --global user.name "hannos1"
      git config --global user.email "1972105453@qq.com"
      git init
      git add .
      git commit -m 'first commit'
      git remote add origin https://github.com/hannos1/tastien.git

      git config --global http.sslVerify false
      git push -u origin master

      ssh-keygen -t rsa -C '1972105453@qq.com'
      cd .\.ssh\
      cat .\id_rsa.pub

- 滴滴swiper 多页活动菜单功能
    用户体验 less is more 摆在第一位
    菜单太多了， 用户的密集恐惧症， 把重要的放在首页
    其他的可以多放一些
    技术难度
    1. swiper >  2  swiper-item
    2. swiper 高等  变化的   等高的
        2 行
        4 行的高度
        swiper height 响应式的数据
    3. class = "didi_menus {{'higher_menus'}}"
        {{}} 站位符 返回值是替换的值
        js运行区域
    4. swiper bindchange 事件
        event.detail.current 当前是第几个swiper-item?
        mebu_type
        this.setData()
- 数据响应式编程
    他是一个思想， 有别于DOM 编程API
    设置一些页面效果， 操作的不是DOM，
    操作的是数据， 因为数据一旦发生改变， 页面会自动刷新。
    1. 滴滴可变高度的首页菜单

- css的技巧
    1. 选择器优先级
        p.md2  11
        p.md2 + div.md3  11 + 11  22
        标签1 < 类名10 < id100 < 计算表达式
        行内样式， 优先级更高  少用
        ！important 最高 慎用
    2. 弹性布局 
        移动端 flex 可以解决大部分问题
        div 块级元素
        布局的一种  跟外部不一样的布局，  桃花源记
        flex 内部  块级能力丢失  BFC
        Block formating context     