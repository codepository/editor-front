<template>
  <div id="app">
    <!-- 整个页面 -->
    <div class="editor-layout">
      <ToolBar
        @del="del"
        @copyText="copyText"
        @copyRichText="copyRichText"></ToolBar>
      <!-- 内容 -->
      <div class="editor-layout__main">
        <!-- 侧边栏 -->
        <div class="side-bar">
          <div class="side-bar-wrap">
            <div class="side-bar-menu-wrap">
              <div class="side-tab-menu material" :class="curTab == 0 ? 'active':''" @click="tab(0)">
                <i data-v-2bd43ee1="" class="side-tab-menu__icon editor-icon-material">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>
                <span class="side-tab-menu__label">素材</span>
              </div>
              <div  class="side-tab-menu template" :class="curTab == 1 ? 'active':''" @click="tab(1)">
                <i  class="side-tab-menu__icon editor-icon-template">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>
                <span class="side-tab-menu__label">组合</span>
              </div>
              <div  class="side-tab-menu background" :class="curTab == 2 ? 'active':''" @click="tab(2)">
                <i class="side-tab-menu__icon editor-icon-background">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>
                <span  class="side-tab-menu__label">样式</span>
              </div>
              <div  class="side-tab-menu work" :class="curTab == 3 ? 'active':''" @click="tab(3)">
                <i class="side-tab-menu__icon editor-icon-work">
                  <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                </i>
                <span class="side-tab-menu__label">作品</span>
              </div>
              <div  class="side-tab-menu upload" :class="curTab == 4 ? 'active':''" @click="tab(4)">
                  <i  class="side-tab-menu__icon editor-icon-upload">
                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                  </i>
                  <span class="side-tab-menu__label">上传</span>
             </div>
            </div>
          </div>
          <MaterialComponent v-show="curTab==0"></MaterialComponent>
          <StyleComponent v-show="curTab==2" @add="add"></StyleComponent>
          <UploadComponent v-show="curTab==4"></UploadComponent>
        </div>
        <!-- 编辑区 -->
        <div class="editor-layout__edit">
          <!-- 内容编辑区 -->
          <div class="editor-content">
            <div><Button style="float:right" type="success" @click="editSubmit">刷新样式</Button></div>
            <div><Button style="float:left" type="info" @click="editUpdate">保存更新</Button></div>
            <div class="content-canvas">
              
              <div class="content-wrap">
                
                  <div>
                    <div class="block" v-for="(item,i) in htmlDatas" v-bind:key="i" :id="framePrefix+i" @click="edit(framePrefix+i)">
                      <div v-html="item" :id="htmlPrefix+i"></div>
                    </div>
                  </div>

              </div>
              <div class="block-spacing" style="top: 10px; left: 0px; display: none;"></div>
            </div>
          </div>
          <!-- 编辑工具栏 -->
          <div class="editor-bar">
            <div class="content-background" style="background-color: rgb(243, 243, 243);">
              <div class="content-inner">
                <div class="editor-bar-inner">
                  <!-- 导航 -->
                  <ul class="editor-bar-nav"><li class="edit-bar-nav_opt active"> 编辑 </li><li class="edit-bar-nav_opt"> 教程 </li></ul>
                  <div class="editor-bar-title">全文背景</div>
                  <div class="editor-bar-body">
                      <div class="editor-template editor">
                        <section class="editor-preview__test"><section><section style="margin: 10px auto;text-align: center;"><section style="display: flex;justify-content: flex-start;align-items: center;"><section class="135brush" data-brushtype="text" style="font-size: 15px;letter-spacing: 1.5px;padding: 4px 1em;color: #4f585f;border: 1px solid #bad3ef;">判断题</section><section class="135brush" data-brushtype="text" style="font-size: 15px;letter-spacing: 1.5px;padding: 4px 1em;color: #4f585f; ">据观察，河马不会游泳。</section></section><section style="margin-top: 1.5em;"><section style="box-sizing:border-box;width:100%;height: 30px;background: #bed6f0;overflow: hidden;"><section class="135brush" data-brushtype="text" style="font-size: 15px;letter-spacing: 1.5px;color: #6d9ad8;line-height: 30px;overflow: hidden;text-align: left;padding-left: 12px;">回答正确</section><section style="margin-top:-30px;"><svg width="100%" height="40" style="box-sizing: border-box;" data-height="40"><rect width="100%" height="100%" fill="#f1f4fb" opacity="1"></rect><text x="10%" y="55%" fill="#a2c3e9" style="text-anchor: middle;font-size: 15px;">错</text><animate attributeName="opacity" begin="click+0.1s" data-svg-style="135-click-time" dur="1s" style="box-sizing: border-box;" from="1" to="0" fill="freeze" restart="never"></animate></svg></section></section><section style="box-sizing:border-box;width:100%;height: 30px;background: #ffefef;overflow: hidden;margin-top: 15px;"><section class="135brush" data-brushtype="text" style="font-size: 15px;letter-spacing: 1.5px;color: #f87070;line-height: 30px;overflow: hidden;text-align: left;padding-left: 12px;">回答错误</section><section style="margin-top:-30px;"><svg width="100%" height="40" style="box-sizing: border-box;" data-height="40"><rect width="100%" height="100%" fill="#f1f4fb" opacity="1"></rect><text x="10%" y="55%" fill="#a2c3e9" style="text-anchor: middle;font-size: 15px;">对</text><animate attributeName="opacity" begin="click+0.1s" data-svg-style="135-click-time" dur="1s" style="box-sizing: border-box;" from="1" to="0" fill="freeze" restart="never"></animate></svg></section></section></section></section></section></section>
                      </div>
                      <div class="edit-template-block">
                        <div class="edit-block"><div class="edit-block__title"><div data-v-1f5b12da="" class="edit-text work-title__editing"><i data-v-1f5b12da="" aria-label="icon: edit" tabindex="-1" class="edit-text__icon anticon anticon-edit"><svg viewBox="64 64 896 896" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></i><input data-v-1f5b12da="" placeholder="未命名" type="text" class="edit-text__input"></div></div><div class="edit-block__oprs"><span class=""></span><span class=""></span></div></div>
                        <div class="edit-template-element edit-block-element" v-for="(wc,i) in wordContent" v-bind:key="'words'+i">
                        <!-- 显示文字 -->
                        <Card>
                          <Row>
                            <Col span="4">文字</Col>
                            <Col span="20">
                              <Input type="textarea" v-model="wordContent[i]" :placeholder="wc" :value="wc"/>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                      <!-- 显示图片 -->
                        <div class="edit-template-element edit-block-element"  v-for="(ic,i) in imgContent" v-bind:key="'imgs'+i">
                          <div class="edit-element">
                            <div class="edit-element__title">背景图</div>
                          </div>
                          <div class="edit-element__image">
                            <div class="edit-image" style="border: 1px solid transparent;">
                              <div class="image__body">
                                <div  class="image__preview" :style="'background-image: url(\''+ic[2]+'\'); background-color: transparent;'">
                                  <div class="image__change">
                                    <button type="button" class="image__change-btn ant-btn"><span>替换图片</span></button>
                                    <button type="button" class="image__change-btn ant-btn"><span>编辑样式原图</span></button>
                                  </div>
                                </div>
                              </div>
                              <div class="image__size">尺寸:{{ic[0]}}*{{ic[1]}}</div>
                              <div class="edit-link image__link">
                                <div class="link__title">图片链接</div>
                                <Input class="link__input" v-model="imgContent[i][2]" placeholder="图片地址" :value="ic[2]"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                        <div class="edit-template-element edit-block-element"  v-for="(sf,i) in styleBackground" v-bind:key="i">
                          <div class="edit-element">
                            <div class="edit-element__title">背景图</div>
                          </div>
                          <div class="edit-element__image">
                            <div class="edit-image" style="border: 1px solid transparent;">
                              <div class="image__body">
                                <div  class="image__preview" :style="'background-image: url(\''+sf[2]+'\'); background-color: transparent;'">
                                  <div class="image__change">
                                    <button type="button" class="image__change-btn ant-btn"><span>替换图片</span></button>
                                    <button type="button" class="image__change-btn ant-btn"><span>编辑样式原图</span></button>
                                  </div>
                                </div>
                              </div>
                              <div class="image__size">尺寸:{{sf[0]}}*{{sf[1]}}</div>
                              <div class="edit-link image__link">
                                <div class="link__title">图片链接</div>
                                <Input class="link__input" v-model="styleBackground[i][2]" placeholder="图片地址" :value="sf[2]"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- SVG g标签设置 -->
                        <div v-show="g[0]!=null" class="edit-template-element edit-block-element" v-for="(g,i) in svgGTagContent" v-bind:key="'g_'+i">
                          <div class="edit-element"><div class="edit-element__title">动画设置</div><!----></div>
                          <!-- 显示文字 -->
                          <!-- [[text标签中的innerHtml,style属性],duration,rect[fill]] -->
                          <div  class="edit-element__text edit-element__opt">
                            <div class="opt__title">文字</div>
                            <div class="edit-text opt__value">
                              <Input type="textarea" class="text__input" v-model="svgGTagContent[i][0][0]" :value="g[0][0]"></Input>
                            </div>
                          </div>
                          <!-- 字体大小 -->
                          <div class="edit-element__fontSize edit-element__opt">
                            <div class="opt__title">字号</div>
                            <div class="input-number opt__value">
                              <div class="input-wrap">
                                <input  type="text" v-model="svgGTagContent[i][0][1]">
                              </div>
                           </div>
                          </div>
                          <!-- 是否加粗 -->
                          <div class="edit-element__fontWeight edit-element__opt">
                            <div class="opt__title">加粗</div>
                            <RadioGroup v-model="svgGTagContent[i][0][2]">
                              <Radio label="bold">加粗</Radio>
                              <Radio label="normal">不加粗</Radio>
                          </RadioGroup>
                          </div>
                          <!-- 填充色 -->
                          <div class="edit-element__fill edit-element__opt">
                            <div class="opt__title"> 颜色 </div>
                            <ColorPicker v-model="svgGTagContent[i][0][3]" />
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="block-spacing" style="top: 10px; left: 0px; display: none;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getEditorData,updateStyle } from '@/api/weixineditor'
import MaterialComponent from './material'
import StyleComponent from './style'
import ToolBar from './toolbar'
import UploadComponent from './upload'
import * as clipboard from "clipboard-polyfill"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
        MaterialComponent,
        StyleComponent,
        ToolBar,
        UploadComponent
  },
  data (){
    return {
      // tabs
      curTab: 0,
      // 数据
      htmlDatas: [],
      // 信息
      htmlInfo: [],
      htmlIDs:[],
      curIndex: -1,
      // wCounter 用于给 datatyp-brushtype 计算用
      wCounter:0,
      // srcCounter 图片记数器
      // 文字
      words:[],
      wordContent:[],
      // img对象
      imgs:[],
      imgContent:[],
      // style属性中background包含图片的对象
      styleBackgroundIDs:[],
      styleBackground:[],// 存储对象为数组,[宽,高,url]
      // svg g标签值解析
      svgGTagID:[],
      svgGTagContent: [],// 存储对象为数组,[[text标签中的innerHtml,font-size,font-weight,fill属性],duration,rect[fill]]
      isUpdating: false,
      framePrefix: "frames_",
      htmlPrefix: "htmldata_",
    }
  },
  mounted () {

  },
  methods:{
    importHtmlData () {
      getEditorData("visit/frames/findAllByPaged",{limit: 10}).then( res => {
        console.log(res)
      })
    },
    tab (index) {
          this.curTab = index
    },
    add (frames) {
      this.htmlDatas.push(frames.htmldata)
      this.htmlInfo.push({"id": frames.id})
    },
    edit (frames) {
      if (frames === this.framePrefix + this.curIndex) return
      var index = frames.split('_')[1]
      this.curIndex = index
      this.setActive()
      this.parse()
    },
    del () {
      this.htmlDatas.splice(this.curIndex,1)
      this.curIndex = -1
      this.clearCurrent()
    },
    copyText () {
      if (this.curIndex === -1) {
        this.$Message.error("未选择")
        return
      }
      clipboard.writeText(this.htmlDatas[this.curIndex]).then(()=>{
        this.$Message.success("复制成功")
      })
    },
    copyRichText () {
      if (this.curIndex === -1) {
        this.$Message.error("未选择")
        return
      }
      const item = new clipboard.ClipboardItem({
        "text/html": new Blob([this.htmlDatas[this.curIndex]],{type: "text/html"})
      })
      clipboard.write([item]).then(() => {
        this.$Message.success("复制成功")
      })
    },
    // 去除id 
    clearID (data) {
      if (data == null) return data
      return data.replace(new RegExp(/id=['"].+?['"]/g),"")
    },
    editSubmit () {
      if (this.curIndex != -1) {
        var f1 = window.document.getElementById(this.framePrefix + this.curIndex)
        if (f1.classList.contains("active")){
          f1.classList.remove("active")
        }
      }
      this.deparse()
    },
    editUpdate () {
      if (this.curIndex==-1) return
      if (this.isUpdating) {
        this.$Message.info("不要重复提交")
        return
      }
      this.isUpdating = true
      setTimeout(()=>{ this.isUpdating = false },3000)
      this.htmlDatas[this.curIndex] =this.clearID(this.htmlDatas[this.curIndex])
      updateStyle({"id": this.htmlInfo[this.curIndex]["id"], "htmldata":this.htmlDatas[this.curIndex]}).then(res=>{
        if (res.data.status !==200) {
          alert(res.data.message)
        } else {
          this.$Message.success("成功")
        }
      })
    },
    setActive () {
      var f1=window.document.getElementById(this.framePrefix + this.curIndex)
      if(!f1.classList.contains("active")){
        f1.classList.add("active")
      }
      for (var i=0;i<this.htmlDatas.length;i++){
          if (i == this.curIndex) continue
          var f2 = window.document.getElementById(this.framePrefix + i)
          if (f2.classList.contains("active")){
            f2.classList.remove("active")
          }
          
          
      }
    },
    clearCurrent () {
      this.words=[]
      this.imgs=[]
      this.wordContent=[]
      this.imgContent=[]
      this.styleBackgroundIDs=[]
      this.styleBackground=[]
      this.svgGTagID=[]
      this.svgGTagContent=[]
    },
    parseWord (frame) {
      var wordeles = frame.querySelectorAll("p")
      if (wordeles !=null && wordeles.length>0) {
        var counter = 0
        wordeles.forEach((e)=>{
          var x = e.getAttribute("id")
          if (x==null) {
            counter++;
            x = "p_"+counter
            e.setAttribute("id",x)
          }
          this.words.push(x)
          this.wordContent.push(e.innerHTML)
        })
      }
    },
    deparseWord () {
      this.words.forEach((id,i)=>{
        var f = window.document.getElementById(id)
        f.innerHTML = this.wordContent[i]
      })
    },
    parseImg (frame) {
      var imgeles = frame.querySelectorAll("img")
      if (imgeles!=null&&imgeles.length>0) {
        var counter=0
        imgeles.forEach((e)=>{
          var src = e.getAttribute("src")
          if (src!=null){
            var x = e.getAttribute("id")
            // 设置id
            if (x === null) {
              counter++;
              x = "content_img_"+ counter
              e.setAttribute("id",x)
            }
            this.imgs.push(x)
            // 获取值
            var eles = []
            // 获取宽高
            var width = e.getAttribute("data-w") || 0
            var height = e.getAttribute("data-ratio") * width
            eles.push(width)
            eles.push(height)
            eles.push(src)
            this.imgContent.push(eles)
          }
        })
      }
    },
    // frame为当前框架对象
    // (?<=url\([&quot;]*?)(http.+?)(?=[&quot;]*?\)) 捕获url值
    parseStyleBackground (frame) {
    
      // var svgs = frame.querySelectorAll("svg")
      var svgs = frame.querySelectorAll("[style]")
      svgs.forEach((s,i)=>{
        // 判断是否包含 url 地址
        var style = s.getAttribute("style")
        if (style!=null && style.indexOf("url(")!=-1){
          var url = style.match(/(?<=url\([&quot;]*?)(http.+?)(?=[&quot;]*?\))/g)[0]
          // 判断是否存在id
          var id = s.getAttribute("id")
          if (id===null) {
            s.setAttribute("id","background_"+i)
            this.styleBackgroundIDs.push("background_"+i)
          } else {
            this.styleBackgroundIDs.push(id)
          }
          
          var eles = []
          // 提取宽高
          var a = new Image()
          a.src=url
          eles.push(a.width)
          eles.push(a.height)
          eles.push(url)
          this.styleBackground.push(eles)
        }
      })
    },
    deparseImg () {
      this.imgs.forEach((id,i)=>{
        if (this.imgContent[i][2]!=="") {
          var  f = window.document.getElementById(id)
          f.setAttribute("src",this.imgContent[i][2])
        }
      })
    },
    deparseStyleBackground () {

      this.styleBackgroundIDs.forEach((id,i)=>{
        if (this.styleBackground[i][2]!=="") {
          var f = window.document.getElementById(id)
          var style = f.getAttribute("style")
          style=style.replace(/(?<=url\([&quot;]*?)(http.+?)(?=[&quot;]*?\))/g,this.styleBackground[i][2])
          f.setAttribute("style",style)
        }
      })
    },
    // 设置框架为不可解析
    deparse () {
      if (this.curIndex==-1)return
      this.deparseWord()
      this.deparseImg()
      // 修改 svg 背景图
      this.deparseStyleBackground()
      // 修改SVG g标签中的值
      this.deparseSVGGtag()
      //修改htmlData中的值
      this.htmlDatas[this.curIndex] = this.clearID(window.document.getElementById('htmldata_'+this.curIndex).innerHTML)
      this.clearCurrent()
      this.curIndex = -1
    },
    deparseSVGGtag () {
      this.svgGTagID.forEach((id,i)=>{
        var g = window.document.getElementById(id)
        if (this.svgGTagContent[i][0][0]!=null) { //text标签文字内容不为空
          var textele = g.querySelector("text")
          textele.innerHTML = this.svgGTagContent[i][0][0]
          // text 字体大小
          textele.style.fontSize = this.svgGTagContent[i][0][1]
          textele.style.fontWeight = this.svgGTagContent[i][0][2]
          if (this.svgGTagContent[i][0][3]!==null) {
            textele.setAttribute("fill",this.svgGTagContent[i][0][3])
          }
          if (this.svgGTagContent[i][1]!=="0") { // animate标签中的dur属性不为空
            g.querySelector("animate").setAttribute("dur",this.svgGTagContent[i][1])
          }
        }
      })
    },
    parseSVGTag2 (frame) {
      var texteles = frame.querySelectorAll("text")
      if (texteles==null||texteles.length==0) return
      var count=0
      texteles.forEach((textele)=>{
        count++
        var x = textele.getAttribute("id")
        if (x==null){
          x="svg_tag_"+count
          textele.setAttribute("id",x)
        }
        this.svgGTagID.push(x)
         var vals = []
        var textvals = []

        // 获取文本值
        textvals.push(textele.innerHTML)
          // 字体大小                            
        textvals.push(textele.style.fontSize)
        // font-weight
        if (textele.style.fontWeight==="") {
          textvals.push("normal")
        } else {
          textvals.push(textele.style.fontWeight)
        }
        // 获取 fill 属性
        var fillval = textele.getAttribute("fill")
        textvals.push(fillval)
        vals.push(textvals)
        this.svgGTagContent.push(vals)
      })
    },
    parseSVGGtag (frame) {
      // 解析出所有svg标签,并设置id
      var geles = frame.querySelectorAll("g")
      // 然后获取值
      if (geles==null||geles.length==0) return
      var count=0
      geles.forEach((g)=>{
        // 设置id
        count++
        var x = g.getAttribute("id")
        if (x==null) {
          x="g_"+count
          g.setAttribute("id",x)
        }
        this.svgGTagID.push(x)
        // 获取值
        var vals = []
        var textele = g.querySelector("text")
        // 获取text标签中的值
        var textvals = []
        if (textele!=null) {
          // 获取文本值
          textvals.push(textele.innerHTML)
          // 字体大小                            
          textvals.push(textele.style.fontSize)
          // font-weight
          if (textele.style.fontWeight==="") {
            textvals.push("normal")
          } else {
            textvals.push(textele.style.fontWeight)
          }
          // 获取 fill 属性
          var fillval = textele.getAttribute("fill")
          textvals.push(fillval)
          
        } else {
          return
        }
        vals.push(textvals)
        // 获取animation持续时长
        var animate = g.querySelector("animate")
        var dur = "0"
        if (animate!==null) {
          var d = animate.getAttribute("dur")
          if (d!==null){
            dur = d
          }
        }
        vals.push(dur)
        this.svgGTagContent.push(vals)
      })
    },
    // 解析 htmldata, 获取内容和样式
    parse () {
      // console.log("解析:"+this.framePrefix + this.curIndex)
      // 获取指定框架
      var f1 = window.document.getElementById(this.framePrefix + this.curIndex)
  
      this.clearCurrent()
      
      // 解析带为p标签包裹的文字
      this.parseWord(f1)
      // 解析img对象
      this.parseImg(f1)
      // 解析svg g标签，g标签可嵌套
      this.parseSVGGtag(f1)
      // 解析style中background为图片的对象
      this.parseStyleBackground(f1)

    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/svgeditor.css";


</style>
