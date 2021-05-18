<template>
      <div class="side-tab-content side-bar-content-wrap">
            <div class="tab-upload">
                  <div class="tab-upload__btns">
                        <Button type="info" @click="modal=true">上传样式</Button>
                  </div>
            </div>
            <Modal
                  title="导入样式"
                  v-model="modal"
                  class-name="vertical-center-modal"
                  @on-ok="upload">
                  <Form :model="data" :label-width="80">
                        <FormItem label="标题">
                             <Input v-model="data.title" placeholder="标题不能为空"></Input> 
                        </FormItem>
                        <FormItem label="类型">
                              <Select v-model="data.type">
                                    <Option value="答题选择">答题选择</Option>
                                    <Option value="滑动">滑动</Option>
                                    <Option value="隐藏">隐藏</Option>
                                    <Option value="弹幕">弹幕</Option>
                                    <Option value="点击">点击</Option>
                                    <Option value="渐隐渐显">渐隐渐显</Option>
                                    <Option value="文字特效">文字特效</Option>
                              </Select>
                        </FormItem>
                        <FormItem label="摘要">
                             <Input v-model="data.abstract" placeholder="功能描述"></Input> 
                        </FormItem>
                        <FormItem label="html数据">
                              <Input v-model="data.htmldata" type="textarea" :rows="10" placeholder="<section>导入html代码</section>" />
                        </FormItem>
                  </Form>
            </Modal>
      </div>
</template>
<script>
import { uploadStyle } from '@/api/weixineditor'
export default {
      name: 'upload_component',
      data () {
            return {
                  modal: false,
                  value: '',
                  data: {
                        title: '',
                        type: '',
                        htmldata: '',
                        uid: this.$store.state.user.uid,
                        username: this.$store.state.user.userName
                  }
            }
      },
      methods: {
            upload () {
                  if (this.data.htmldata.length>0) {
                        uploadStyle(this.data).then(res => {
                             if (res.data.status !=200) {
                                    alert(res.data.message)
                                    return null
                              } else {
                                    this.$Message.success("成功")
                              }
                        })
                  }
            }
      }
}
</script>
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>