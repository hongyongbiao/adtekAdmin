<template>
  <div class="product-list">
    <div class="index-content col-md-9">
      <div class="panel panel-default">
        <div class="panel-heading">轮播图</div>
        <div class="panel-body">
          <div class="container-fluid">
            <div class="body advert">
              <!-- 面包屑 -->
              <div class="panel panel-default">
                <div class="panel-body">
                  <form action class="form-inline">
                    <select name class="form-control input-sm">
                      <option value>按日期</option>
                    </select>
                    <button class="btn btn-success btn-sm">筛选</button>
                  </form>
                </div>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <td>序号</td>
                      <td>图片</td>
                      <td>名称</td>
                      <td>时间</td>
                      <td>操作</td>
                    </tr>
                  </thead>
                  <tbody v-if="getproduct.length>0">
                    <tr v-for="(list,index) in getproduct" :key="index">
                      <td>{{index}}</td>
                      <td width="100px">
                        <img :src="url+list.image" width="100%" />
                      </td>
                      <td>{{list.goods_name}}</td>
                      <td>{{list.create_time}}</td>
                      <td>
                        <a href="javascript:;" class="btn btn-info btn-xs">编辑</a>
                        <a href="javascript:;" @click.prevent="removeproduct(list._id)" class="btn btn-danger btn-xs">删除</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 分页 -->
              <ul class="pagination pull-right">
                <li>
                  <a href="#">上一页</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">下一页</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { url } from '../../../Config/config'

export default {
  name: "ProductList",
  data(){
      return{
          url:url
      }
  },
  computed:{
      ...mapState(['getproduct'])

  },
  mounted(){
      this.$store.dispatch('reqProduct')
  },
  methods:{
      removeproduct(params){
         this.$store.dispatch('removeProduct',{id:params})
         //window.location.href='/productlist'
         location.reload()

      }
  }
};
</script>

<style lang="stylus" scoped>
.index-content
    .panel-default>.panel-heading
          background-color #1c6ab1
          color #ffffff
         .panel-body
            .container-fluid
               .body
                 .page-title
                    .pull-right
                       margin 15px 15px 0 0
    .table-bordered
        text-align center
        td
          vertical-align middle 
</style>