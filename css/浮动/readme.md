# 块级 
1. 默认占据一整行
2. 可以设置宽高
   设置水平方向居中  margin 0 auto
# 行内块
1. 可以同行显示 代码有空格 盒子之间有空隙
2. 可以设置宽高
   设置水平方向居中 text-align = center

# 行内
1. 可以同行显示
2. 不可以设置宽高 由内容撑开


# 浮动
1. 脱离文档流
2. 文字环绕
3. 让块级元素同行显示
4. 让行内元素可以设置宽高
5. 可以使用margin 但是不能使用 margin 0 auto;


# 清除浮动
1. 给父容器设置高度
2. 在最后一个浮动元素后面添加新的元素，在新元素上做清除浮动
3. 在父容器伪元素after上做清除浮动
4. 在下方被浮动影响的容器上做 清除浮动
5. BFC 

# BFC 容器 (Block Formatting Content) 块级格式化上下文
- 哪些属性可以创建BFC:
   1.float:left || right;
   2.position:absolute || fixed;
   3.display:inline-block;
   4.display:table-cell ....;
   5.overflow:hidden || auto || overly || scroll 
   6.弹性盒子（display:flex || inline-flex）
- BFC的特点:
   1.BFC容器在计算高度时会将浮动元素的高度也计算在内
   2.解决内外margin重叠问题