## node 是大厂有区分度的考点


- buffer 
    fs net process 进程

    进程是分配资源的最小单位
    内存的 cpu 外存 显示
    内存分配 起始 -> 结束
    CPU 轮循
    线程 执行程序的最小单位
    JS  单线程  JAVA 多线程
    简单 好用 早期就是执行一些交互
    同步任务快速执行，复杂任务交给event loop
    脆弱 容易挂 重启 pm2
    多核cpu 
    node 后端主流，异步(优点)无阻塞
    java/php  同步
    好多永固同时并发访问
    1万人 node 只需要java 一半的服务器 主要成本
    ngnix 负载均衡服务器  只负责调度 集群里哪些服务器忙 哪些闲 选择一台机器执行程序
    www.baidu.com  不是一台服务器
    dns 分布式ip地址数据库 解析  ngnix 服务器 代理 服务器集群

