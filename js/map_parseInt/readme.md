# map + parseInt 经典题

- 我在解决这道题的时候去看了MDN文档
    map   callback    返回值是由callback的每一项组成的一个新数组  callback 会接受到item当前项 index下标 array数组本身   
    parseInt  就是当前的callback item, 可选的参数radix?进制表达
    默认 10进制
    0 无效 使用10      1
    1 进制 item 为2   NaN
    2 进制 item 为3   NaN