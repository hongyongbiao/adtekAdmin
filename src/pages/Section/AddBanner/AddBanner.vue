<template>
  <div class="add-banner">
    <div class="index-content col-md-9">
      <div class="panel panel-default">
        <div class="panel-heading">轮播图</div>
        <div class="panel-body">
             <div class="advert-add">
                 <form id="myForm" enctype="multipart/form-data" name="fileinfo" action="" target="uploadFrame" class="form-horizontal">
                     <div class="form-group">
                         <label for="" class="col-md-3 control-label">图片</label>
                         <div class="col-md-7">
                             <input type="file" required class="form-control input-sm"  id="imgFile" placeholder="填写广告图片">
                             <!-- <img-inputer v-model="image" theme="light" /> -->
                         </div>
                     </div>
                     <div class="form-group">
                         <label for="" class="col-md-3 control-label">链接</label>
                         <div class="col-md-7">
                             <input type="text" required class="form-control input-sm" v-model="link"  placeholder="填写广告链接" >
                         </div>
                     </div>
                     <!-- <div class="form-group">
                         <label for="" class="col-md-3 control-label">开始时间</label>
                         <div class="col-md-7">
                             <input type="text" required class="form-control input-sm" v-model="start_time" placeholder="填写开始时间">
                         </div>
                     </div>
                     <div class="form-group">
                         <label for="" class="col-md-3 control-label">结束时间</label>
                         <div class="col-md-7">
                             <input type="text" required class="form-control input-sm" v-model="end_time" placeholder="填写结束时间" >
                         </div>
                     </div> -->
                     <div class="form-group">
                         <div class="col-md-10">
                             <!-- <input type="submit" class="btn btn-success btn-sm pull-right"  value="保存"> -->
                             <button class="btn btn-success btn-sm pull-right" @click.prevent="changeImg">保 存</button>
                         </div>                          
                     </div>
                 </form>
                 <iframe id="uploadFrame" name="uploadFrame" style="display:none;"></iframe> 
             </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { url } from '../../../Config/config'
import Cookies from 'js-cookie'
import {Toast} from 'mint-ui';
import axios from 'axios'



export default {
  name: "AddBanner",
  data(){
      return{
          url:url,
          link:'',
        //   start_time:'',
        //   end_time:'',
          file:null
      }
  },
  mounted(){
      
  },
  methods:{
      changeImg(){

          const that=this

          const file=document.getElementById("imgFile").files[0]
          that.file=file
          console.log(that.file)
          if(!that.file){
              Toast("请输入图片!")
              return
          }else if(!that.link){
              Toast("请输入链接!")
              return
          }
          const isIMAGE = ( that.file.type === 'image/jpeg' || that.file.type === 'image/png' )
          const isLt1M = that.file.size / 1024 / 1024 < 1;
          if (!isIMAGE) {
              Toast("上传文件只能是图片格式!")
              return
          }
          if (!isLt1M) {
              Toast("上传文件大小不能超过 1MB!")
              return
          }
          const formData=new FormData()

          if(file){
              formData.append("access_token",Cookies.get('Admin-Token'))
              formData.append("image",file)
              formData.append("forward_url",that.link)
            //   formData.append("create_time",that.start_time)
            //   formData.append("modify_time",that.end_time)
          }

          

          let potss=formData
          let urls=that.url+'/store/addbanner'
          axios.post(urls,potss)
          .then(function(reh){
              console.log('成功！')
          })
          .catch(function(err){
              //console.log(err)
          })
          
      }
  }
};
</script>

<style lang="stylus" scoped>
.index-content
    .panel-default>.panel-heading
          background-color #1c6ab1
          color #ffffff
      
            
</style>