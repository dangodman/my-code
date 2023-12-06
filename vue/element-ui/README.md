# 路由传参
1. this.$router.push(`/home/${this.username}`)  需要在路由配置中声明该路径可以携带参数 '/home/user'
2. this.$router.push({path:'/home',query:{user:this.username})  它会把参数以？的形式拼接在url中
3. this.$router.push({path:'/home',params:{user:this.username})  需要在路由配置中声明该路径可以携带参数  '/home/user'
4. this.$router.push({path:'/home',hash:`#${this.username}`})   参数前面会多一个#