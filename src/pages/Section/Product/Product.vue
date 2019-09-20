<template>
    <div class="product">
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
                      <td>链接</td>
                      <td>时间</td>
                      <td>操作</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td width="200px"><img src="./../../../../static/imgs/data_center.jpg" width="100%"></td>
                      <td>www.baidu.com</td>
                      <td>2016/10/01</td>
                      <td>
                        <a href="javascript:;" class="btn btn-info btn-xs">编辑</a>
                        <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
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
export default {
    name:'Product'
}
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