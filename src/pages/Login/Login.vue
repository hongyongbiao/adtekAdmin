<template>
    <!-- 登录 -->
    <div class="login">
        <div class="login-wrap">
            <div class="avatar">
                <img src="./../../../static/imgs/logo.png" alt="">
            </div>
            <form class="col-md-offset-1 col-md-10 input">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="glyphicon glyphicon-envelope"></i>
                    </span>
                    <input type="text" class="form-control"  placeholder="邮箱">
                </div>
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="glyphicon glyphicon-lock"></i>
                    </span>
                    <input type="password" class="form-control"  placeholder="密码">
                </div>
                <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'Login'
}
</script>

<style lang="stylus" scoped>
.login
   background-color #2f4050
   position fixed
   width 100%
   height 100%
   .login-wrap
      width 500px
      height 380px
      padding 30px 0 50px 0
      margin 180px auto
      background #ffffff
      .avatar
         width 150px
         margin 20px auto
         img 
           width 100%
      form
         .input-group 
            margin 20px 0
         
         
</style>