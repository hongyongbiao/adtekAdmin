<template>
    <div class="index">
        <div class="container">
           <div class="index-top">
               <div class="logo col-md-1">
                   <img src="./../../../static/imgs/logo-w.png" alt="">
               </div>
               <div class="login">登 录</div>
           </div>
           <div class="index-bottom">
               <aside class="index-nav col-md-3">
                   <div class="list-group">
                      <a href="javascript:;" class="list-group-item active">
                        ADTEK后台管理
                      </a>
                      <a href="javascript:;" class="list-group-item" :class="{bcActive:$route.path.includes('banner')}" @click="witchTo('/banner')">轮播图</a>
                      <a href="javascript:;" class="list-group-item active" :class="{bcActive:$route.path.includes('product')}">产品管理</a>
                      <a href="javascript:;" class="list-group-item" @click="witchTo('/product')">添加产品</a>
                      <a href="javascript:;" class="list-group-item" @click="witchTo('/productlist')">产品列表</a>
                      <a href="javascript:;" class="list-group-item active" :class="{bcActive:$route.path.includes('new')}" @click="witchTo('/new')">新闻中心</a>
                      <a href="javascript:;" class="list-group-item">创建文章</a>
                      <a href="javascript:;" class="list-group-item">文章列表</a>
                      <a href="javascript:;" class="list-group-item active" :class="{bcActive:$route.path.includes('personal')}" @click="witchTo('/personal')">个人信息</a>
                      <a href="javascript:;" class="list-group-item active" :class="{bcActive:$route.path.includes('syssetup')}" @click="witchTo('/syssetup')">系统设置</a>
                   </div>
               </aside>
               <router-view/>
               <!-- <banner/> -->
           </div>
        </div>
        
    </div>
</template>

<script>
import  Banner from './../Section/Banner/Banner'

export default {
    name:'Index',
    components:{
        Banner
    },
    methods:{
        witchTo(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus" scoped>
.index
   width 100%
   height 50px
   background-color #1c6ab1
   .index-top 
      height 50px
      .logo
        width 10%
        img 
          width 100%
          margin-top 10px 
      .login
         color #ffffff
         font-size 12px
         line-height 50px
         text-align right
         margin-right 20px
   .index-bottom
      margin-top 20px
      .index-nav
         .list-group
            .list-group-item.active
               background-color #1c6ab1
            .bcActive
               background-color #f5f5f5
               
</style>