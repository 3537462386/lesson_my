# 三列布局

- PC端布局方案
    如何判断哪种设备？ window   BOM
    www.taobao.com-> 301/302 200(HTTP 状态码)-> http://main.m.taobao.com/?sprefer=sypc00

- userAgent
    用户代理  包含了游览器的信息
    www.taobao.com
        iPhone 301 m.taobao.com
    window.navigator BOM Browser Object Model
        - 定位功能
        - userAgent


- 三栏式布局  flex(PC 兼容性)，float
    (HTML5新增)语义化标签 
   1. <header></header>----头部
   2. <nav></nav>----导航
   3. <article></article>----内容
   4. <section></section>----定义文档某个区域
   5. <aside></aside>----侧边栏标签
   6. <footer></footer>----尾部标签
    中间部分优先加载并渲染(代码中放在上面)

- 经典的圣杯布局
    1. main 内容自适应且优先
        padding 左右留白
    2. aside margin-left 负值 ， 偏移  -100% -100px