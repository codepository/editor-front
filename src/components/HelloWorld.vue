<template>
  <div id="app">
    <!-- 整个页面 -->
    <div class="editor-layout">
      <!-- 工具栏 -->
      <div class="editor-toolbar">
        <!-- logo -->
        <div class="header__logo"></div>
        <!-- 工具条 -->
        <div class="toolbar-tool editor-toolbar__tool"></div>
        <!-- 用户 -->
        <div class="header-user"></div>
        <!-- 工具按钮 -->
        <div class="work-tool"></div>
      </div>
      <!-- 内容 -->
      <div class="editor-layout__main">
        <!-- 侧边栏 -->
        <div class="side-bar">
          <div class="side-bar-wrap">
            <div class="side-bar-menu-wrap">
              <div class="side-tab-menu active material">
                <i data-v-2bd43ee1="" class="side-tab-menu__icon editor-icon-material">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>
                <span class="side-tab-menu__label">素材</span>
              </div>
              <div  class="side-tab-menu template">
                <i data-v-2bd43ee1="" class="side-tab-menu__icon editor-icon-template">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>
                <span class="side-tab-menu__label">组合</span>
              </div>
              <div  class="side-tab-menu background">
                <i data-v-2bd43ee1="" class="side-tab-menu__icon editor-icon-background">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </i>
                <span  class="side-tab-menu__label">样式</span>
              </div>
              <div  class="side-tab-menu work">
                <i class="side-tab-menu__icon editor-icon-work">
                  <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                </i>
                <span class="side-tab-menu__label">作品</span></div>
                <div  class="side-tab-menu upload">
                  <i data-v-2bd43ee1="" class="side-tab-menu__icon editor-icon-upload">
                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                  </i>
                  <span class="side-tab-menu__label">上传</span>
                </div>
              </div>
          </div>
          <div class="side-tab-content side-bar-content-wrap">
            <div class="tab-element">
              <!-- 搜索框 -->
              <div class="search-container tab-element__searchbar">
                <div  class="search">
                  <div class="search__input">

                    <input type="text" placeholder="请输入关键词搜索">
                  </div>
                  <button type="button" class="ant-btn ant-btn-icon-only">
                    <i aria-label="icon: search" class="anticon anticon-search">
                      <svg viewBox="64 64 896 896" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                    </i>
                  </button>
                </div>
              </div>
              <!-- tab -->
              <ul class="tab-element__segs">
                <li class="tab-element__seg" :class="!showMyMaterial?'active':''" @click="showMyMaterial=false"> 素材中心 </li>
                <li class="tab-element__seg" :class="showMyMaterial?'active':''" @click="showMyMaterial=true"> 我的素材 </li>
              </ul>
              <!-- 选择按钮 -->
              <div v-show="!showMyMaterial" class="tab-element__tap">素材库</div>
              <!-- 内容列表 -->
              <div v-show="showMyMaterial" class="tab-element__tap">
                <div class="tab-element__list">
                  <div class="list-loader">
                    <div class="list-loader__inner">
                      <div class="list-item">
                        <div class="list-item">
                          <div class="item-element">
                            <div class="item-element__help">
                              <i  aria-label="icon: question-circle" class="anticon anticon-question-circle"><svg viewBox="64 64 896 896" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg></i>
                            </div>
                            <div data-tag="素材单独付费使用" class="item-content__tag">免费</div>
                            <div title="ID:2，无缝图-图片可弹出" class="item-element__title"> 无缝图-图片可弹出</div>
                            <div class="item-element__summary"> 点击图片可弹出，可以长按图片识别图片中二维码 </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 编辑区 -->
        <div class="editor-layout__edit">
          <!-- 内容编辑区 -->
          <div class="editor-content">
            <div class="content-canvas">
              <div class="content-wrap">
                
                  <div>
                    <div class="block" v-for="(item,i) in htmlDatas" v-bind:key="i" :id="'frames_'+i" @click="edit('frames_'+i)">
                      <div v-html="item" :id="'htmldata_'+i"></div>
                    </div>
                    <button @click="add">添加</button>
                    <button @click="editSubmit">确认</button>
                    <button @click="exportHtmlData">导出</button>
                    <button @click="del">删除</button>
                    <button @click="importHtmlData">导入</button>
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
                          <Row v-for="(ws,j) in wordStyles[i]" v-bind:key="j">
                            <Input v-model="wordStyles[i][j]" :placeholder="ws" :value="ws"/>
                          </Row>
                        </Card>
                      </div>
                      <!-- 显示SVG背景和持续时间 -->
                      <div class="edit-template-element edit-block-element" v-for="(s,i) in svgIDs" v-bind:key="'svgs'+i">
                        <Card>
                          文字: {{svgContents[i]}}
                          <Row>
                            <Col span="10">动画时长:</Col>
                            <Col span="14"><Input v-model="svgDurContent[i]" placeholder="动画时长: 1s" :value="svgDurContent[i]"/></Col>
                          </Row>
                          <Row v-for="(fill,j) in svgFillContents[i]" v-bind:key="j">
                            <Col span="10">颜色:</Col>
                            <Col span="14"><Input v-model="svgFillContents[i][j]" :value="fill"/></Col>
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
                      
                        <div class="edit-template-element edit-block-element"  v-for="(sf,i) in svgBackground" v-bind:key="i">
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
                                <Input class="link__input" v-model="svgBackground[i][2]" placeholder="图片地址" :value="sf[2]"/>
                              </div>
                            </div>
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
import { getEditorData } from '@/api/weixineditor'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data (){
    return {
      showMyMaterial: false,
      htmlDatas: [],
      htmlIDs:[],
      curIndex: -1,
      // wCounter 用于给 datatyp-brushtype 计算用
      wCounter:0,
      // srcCounter 图片记数器
      svgCounter:0,
      words:[],
      imgs:[],
      wordContent:[],
      wordStyles:[],
      imgContent:[],
      svgIDs: [],
      svgContents: [],
      svgFillIDs:[],
      svgFillContents:[],
      svgDurIDs:[],
      svgDurContent:[],
      svgStyles:[],
      svgBackgroundIDs:[],
      svgBackground:[],
      framePrefix: "frames_",
      h1: `<section style="height:0;opacity:0;">·</section><section style="background-repeat: repeat; background-position: left top; background-size: 100% auto; "><section class="block"data-copyright="135编辑器"data-id="103307"data-plugin="template"data-template=""style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; transform: scale(1);"><section class="block-inner"><section><section style="margin: 10px auto;text-align: center;"><section style="display: flex;justify-content: flex-start;align-items: center;"><section class="135brush"data-brushtype="text"style="font-size: 15px;letter-spacing: 1.5px;padding: 4px 1em;color: #4f585f;border: 1px solid #bad3ef;"id="c_w_1">判断题</section><section class="135brush"data-brushtype="text"style="font-size: 15px;letter-spacing: 1.5px;padding: 4px 1em;color: #4f585f; "id="c_w_2">"河马"</section></section><section style="margin-top: 1.5em;"><section style="box-sizing:border-box;width:100%;height: 30px;background: #bed6f0;overflow: hidden;"><section class="135brush"data-brushtype="text"style="font-size: 15px;letter-spacing: 1.5px;color: #6d9ad8;line-height: 30px;overflow: hidden;text-align: left;padding-left: 12px;"id="c_w_3">回答正确</section><section style="margin-top:-30px;"><svg width="100%"height="40"style="box-sizing: border-box;"data-height="40"><rect width="100%"height="100%"fill="#f1f4fb"opacity="1"></rect><text x="10%"y="55%"fill="#a2c3e9"style="text-anchor: middle;font-size: 15px;"id="c_w_4">错</text><animate attributeName="opacity"begin="click+0.1s"data-svg-style="135-click-time"dur="1s"style="box-sizing: border-box;"from="1"to="0"fill="freeze"restart="never"></animate></svg></section></section><section style="box-sizing:border-box;width:100%;height: 30px;background: #ffefef;overflow: hidden;margin-top: 15px;"><section class="135brush"data-brushtype="text"style="font-size: 15px;letter-spacing: 1.5px;color: #f87070;line-height: 30px;overflow: hidden;text-align: left;padding-left: 12px;"id="c_w_5">回答错误</section><section style="margin-top:-30px;"><svg width="100%"height="40"style="box-sizing: border-box;"data-height="40"><rect width="100%"height="100%"fill="#f1f4fb"opacity="1"></rect><text x="10%"y="55%"fill="#a2c3e9"style="text-anchor: middle; font-size: 15px; font-weight: bold;"id="c_w_6">对</text><animate attributeName="opacity"begin="click+0.1s"data-svg-style="135-click-time"dur="1s"style="box-sizing: border-box;"from="1"to="0"fill="freeze"restart="never"></animate></svg></section></section></section></section></section></section></section></section>`,
      h2: `<section style="height:0;opacity:0;">·</section><section style="background-repeat: repeat; background-position: left top; background-size: 100% auto; "><section class="block"  data-id="103299" data-plugin="template"  style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; transform: scale(1);"><section class="block-inner"><section style="margin: 10px auto;text-align: left;"><section style="display: flex;align-items: center;justify-content: center;"><section class="assistant" style="box-sizing:border-box;width: 100%;border-bottom: 1px dotted #aeaeae;"></section><section class="135brush" data-brushtype="text" style="color: #807f86;line-height: 1.75em; font-size: 14px; letter-spacing: 1.5px;padding: 2px 10px;flex-shrink: 0;" hm_fix="357:252" id="c_w_1">喜欢此内容的人还喜欢</section><section class="assistant" style="box-sizing:border-box;width: 100%;border-bottom: 1px dotted #aeaeae;"></section></section><section style="box-sizing:border-box;white-space: nowrap; width:100%; overflow-x: scroll;overflow-y: hidden;margin-top: 1.5em;"><section style="box-sizing:border-box;display: inline-block;word-wrap: break-word;white-space: normal;vertical-align: top;width:100%"><section style="display: flex;justify-content: space-between;align-items: center;"><section style="border-bottom: 1px dashed #aeaeae;flex: 1;padding-bottom: 10px;"><section class="135brush" data-brushtype="text" style="font-size: 14px;letter-spacing: 1.5px;color: #333; " id="c_w_2">猫咪是人民最熟悉的动物之一</section><section class="135brush" data-brushtype="text" style="font-size: 13px;letter-spacing: 1.5px;color: #8e8e8e;margin-top: 4px;">135平台</section></section><section style="box-sizing:border-box;width: 80px;margin-left: 15px;"><img id="c_i_1" style="box-sizing:border-box;width: 100%;display: block;" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvRklCWmVjN3VjQ2lhSmdlSHFBeVk5SmFrV0NDRG1EYVl5bXQybUQ0aWMxZ3NNMFZGUEtVVUFPM3ExZGliYWhucUhmc09aMTgyWk9TWWVJZ3lFdzBpYk1GaWJWdy8wP3d4X2ZtdD1wbmc=" data-ratio="1.0119047619047619" data-w="84"></section></section></section><section class="box-edit" style="box-sizing:border-box;display: inline-block;word-wrap: break-word;white-space: normal;vertical-align: top;width:100%"><section style="display: flex;justify-content: space-between;align-items: center;"><section style="border-bottom: 1px dashed #aeaeae;flex: 1;padding-bottom: 10px;"><section class="135brush" data-brushtype="text" style="font-size: 14px;letter-spacing: 1.5px;color: #333; " id="c_w_3">猫咪是人民最熟悉的动物之一</section><section class="135brush" data-brushtype="text" style="font-size: 13px;letter-spacing: 1.5px;color: #8e8e8e;margin-top: 4px;">135平台</section></section><section style="box-sizing:border-box;width: 80px;margin-left: 15px;"><img style="box-sizing:border-box;width: 100%;display: block;" id="c_i_2" src="https://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpel9wbmcvRklCWmVjN3VjQ2lhSmdlSHFBeVk5SmFrV0NDRG1EYVl5bXQybUQ0aWMxZ3NNMFZGUEtVVUFPM3ExZGliYWhucUhmc09aMTgyWk9TWWVJZ3lFdzBpYk1GaWJWdy8wP3d4X2ZtdD1wbmc=" data-ratio="1.0119047619047619" data-w="84"></section></section></section></section><section class="135brush" data-brushtype="text" style="font-size: 13px;letter-spacing: 1.5px;color: #adabab;text-align: center;margin-top: 1em;" id="c_w_4">左右滑动查看下一篇</section></section></section></section></section>`,
      h3: `<section style="height:0;opacity:0;">·</section><section data-copyright="135编辑器"style="background-repeat: repeat; background-position: left top; background-size: 100% auto; "><section class="block"data-copyright="135编辑器"data-id="102444"data-plugin="template"style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; transform: scale(1);"><section class="block-inner"><section style="box-sizing:border-box;width: 100%;font-size: 0;text-align: center;line-height: 0;"><svg class="135svg"data-bige="7213"version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 640 1138"enable-background="new 0 0 640 1138"xml:space="preserve"style="box-sizing:border-box;width: 100%;vertical-align: top;background-position: 0% 0%;background-repeat: no-repeat;background-size: 100%;background-attachment: scroll;background-image: url(https://135editor.cdn.bcebos.com/files/images/editor_styles/8029726150c74a3e0c3b04107241dc7b.png);-webkit-tap-highlight-color: transparent;user-select: none;visibility: visible;"><g><svg height="53"width="289"x="289"y="38.75%"opacity="0"data-height="53"><g><foreignObject width="289"height="53"x="0"y="0"><svg class="135svg"data-bige="7214"space="default"style="box-sizing:border-box;width: 100%;vertical-align: top;background-position: 0% 0%;background-repeat: no-repeat;background-size: 100%;background-attachment: scroll;background-image: url(https://135editor.cdn.bcebos.com/files/images/editor_styles/dbdd88d68c3778d2ab6f8c2048810f66.png);-webkit-tap-highlight-color: transparent;user-select: none;visibility: visible;"version="1.1"viewBox="0 0 289 53"x="0"xlink="http://www.w3.org/1999/xlink"xml=""xmlns="http://www.w3.org/2000/svg"y="0"xml:space="default"></svg></foreignObject></g><animate attributeName="y"from="39.5%"to="38.75%"dur="0.5"fill="freeze"begin="0.8s"repeatCount="1"></animate><animate attributeName="opacity"from="0"to="1"dur="0.7"fill="freeze"begin="0.8s"repeatCount="1"></animate></svg></g><g><svg height="53"width="289"x="289"y="46.3%"opacity="0"data-height="53"><g><foreignObject width="289"height="53"x="0"y="0"><svg class="135svg"data-bige="7215"space="default"style="box-sizing:border-box;width: 100%;vertical-align: top;background-position: 0% 0%;background-repeat: no-repeat;background-size: 100%;background-attachment: scroll;background-image: url(https://135editor.cdn.bcebos.com/files/images/editor_styles/f1379ab1655ffb9db3c046835b6f4eab.png);-webkit-tap-highlight-color: transparent;user-select: none;visibility: visible;"version="1.1"viewBox="0 0 289 53"x="0"xlink="http://www.w3.org/1999/xlink"xml=""xmlns="http://www.w3.org/2000/svg"y="0"xml:space="default"></svg></foreignObject></g><animate attributeName="y"from="47.2%"to="46.30%"dur="0.5"fill="freeze"begin="1.7s"repeatCount="1"></animate><animate attributeName="opacity"from="0"to="1"dur="0.7"fill="freeze"begin="1.7s"repeatCount="1"></animate></svg></g><g><svg height="53"width="352"x="225"y="54.13%"opacity="0"data-height="53"><g><foreignObject width="352"height="53"x="0"y="0"><svg class="135svg"data-bige="7216"space="default"style="box-sizing:border-box;width: 100%;vertical-align: top;background-position: 0% 0%;background-repeat: no-repeat;background-size: 100%;background-attachment: scroll;background-image: url(https://135editor.cdn.bcebos.com/files/images/editor_styles/b68e707338a988a886920246e8ad3ec4.png);-webkit-tap-highlight-color: transparent;user-select: none;visibility: visible;"version="1.1"viewBox="0 0 352 53"x="0"xlink="http://www.w3.org/1999/xlink"xml=""xmlns="http://www.w3.org/2000/svg"y="0"xml:space="default"></svg></foreignObject></g><animate attributeName="y"from="55%"to="54.13%"dur="0.5"fill="freeze"begin="2.6s"repeatCount="1"></animate><animate attributeName="opacity"from="0"to="1"dur="0.7"fill="freeze"begin="2.6s"repeatCount="1"></animate></svg></g></svg></section></section></section></section>`
    }
  },

  methods:{
    importHtmlData () {
      getEditorData("visit/frames/findAllByPaged",{limit: 10}).then( res => {
        console.log(res)
      })
    },
    add () {
      if (this.htmlDatas.length==0){
        this.htmlDatas.push(this.h3)
      } if (this.htmlDatas.length==1) {
        this.htmlDatas.push(this.h2)
      } else {
        this.htmlDatas.push(this.h1)
      }

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
    // 设置框架为不可解析
    deparse () {
      // 修改文字内容和样式
      this.words.forEach((val,i)=>{
        // 修改文字
        var x = window.document.getElementById(val)
        x.innerHTML = this.wordContent[i]
        // 修改样式
        if (this.wordStyles[i].length>0){
          x.setAttribute("style",this.wordStyles[i].join(";"))
        }
      })
      // 修改SVG背景填充色
      this.svgIDs.forEach((_,i)=>{
        // 修改fill
        this.svgFillIDs[i].forEach((fid,j)=>{
          var f = window.document.getElementById(fid)
          f.setAttribute("fill",this.svgFillContents[i][j])
        })
      })
      this.deparseImg()
      // 修改 svg 背景图
      this.deparseSVGBackground()
      // 修改htmlData中的值
      this.htmlDatas[this.curIndex] = window.document.getElementById('htmldata_'+this.curIndex).innerHTML
      this.clearCurrent()
      this.curIndex = -1
    },
    exportHtmlData () {
      console.log(this.htmlDatas[0])
      console.log(this.htmlDatas[1])
    },
    clearCurrent () {
      this.words=[]
      this.imgs=[]
      this.wordContent=[]
      this.wordStyles=[]
      this.imgContent=[]
      this.svgIDs=[]
      this.svgContents=[]
      this.svgFillIDs=[]
      this.svgFillContents=[]
      this.svgDurContent=[]
      this.svgDurIDs=[]
      this.svgBackgroundIDs=[]
      this.svgBackground=[]
    },
    consoleCurrent() {
      console.log("wordContent:"+this.wordContent)
      console.log("wordStyles:"+this.wordStyles)
      console.log("imgContent:"+this.imgContent)
    },
    parseImg (frame) {
      var imgeles = frame.querySelectorAll("img")
      if (imgeles!=null&&imgeles.length>0) {
        var counter=0;
        imgeles.forEach((e)=>{
          var src = e.getAttribute("src")
          if (src!=null){
            var x = e.getAttribute("id")
            // 设置id
            if (x === null || x.indexOf("content_img_") === -1  ) {
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
    parseSVGBackground (frame) {
      var svgs = frame.querySelectorAll("svg")
      svgs.forEach((s,i)=>{
        // 判断是否包含 url 地址
        var style = s.getAttribute("style")
        if (style!=null && style.indexOf("url(")!=-1){
          var url = style.match(/(?<=url\([&quot;]*?)(http.+?)(?=[&quot;]*?\))/g)[0]
          // 判断是否存在id
          var id = s.getAttribute("id")
          if (id===null) {
            s.setAttribute("svg_background_"+i)
            this.svgBackgroundIDs.push("svg_background_"+i)
          } else {
            this.svgBackgroundIDs.push(id)
          }
          
          var eles = []
          // 提取宽高
          var x = s.getAttribute("viewBox").split(" ")
          eles.push(x[2])
          eles.push(x[3])
          eles.push(url)
          this.svgBackground.push(eles)
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
    deparseSVGBackground () {

      this.svgBackgroundIDs.forEach((id,i)=>{
        if (this.svgBackground[i][2]!=="") {
          var f = window.document.getElementById(id)
          var style = f.getAttribute("style")
          style=style.replace(/(?<=url\([&quot;]*?)(http.+?)(?=[&quot;]*?\))/g,this.svgBackground[i][2])
          f.setAttribute("style",style)
        }
      })
    },

    // 解析 htmldata, 获取内容和样式
    parse () {
      // console.log("解析:"+this.framePrefix + this.curIndex)
      // 获取指定框架
      var f1 = window.document.getElementById(this.framePrefix + this.curIndex)
      // 为文本内容设置id
      var eles = f1.querySelectorAll("[data-brushtype]")
      this.clearCurrent()
      if (eles!=null&&eles.length>0) {
        eles.forEach((e)=>{
          var x = e.getAttribute("id")
          if (x === null || x.indexOf("content_word_") === -1 ) {
            if (e.getAttribute("data-brushtype") === "text") {
              this.wCounter++;
              e.setAttribute("id","content_word_"+ this.wCounter)
              this.words.push("content_word_"+ this.wCounter)
              // 提取当前内容和样式
              this.wordContent.push(e.innerHTML)
              if (e.getAttribute("style")!=null) {
                this.wordStyles.push(e.getAttribute("style").split(";"))
              } else {
                this.wordStyles.push([])
              }
              
            } 
          } else {
            this.words.push(x)
            this.wordContent.push(e.innerHTML)
            if (e.getAttribute("style")!=null) {
                this.wordStyles.push(e.getAttribute("style").split(";"))
              } else {
                this.wordStyles.push([])
              }
          }
        })
      }
      // 为图片内容设置id
      this.parseImg(f1)
      // 为svg内容设置id
      var svgeles = f1.querySelectorAll("svg")
      if (svgeles!=null && svgeles.length>0) {
        svgeles.forEach((e)=>{
          var x = e.getAttribute("id")
          var text = e.querySelector("text")
          if (text !== null) {
            this.svgContents.push(text.innerHTML)
          }
          if (x === null || x.indexOf("content_svg_") === -1) {
            this.svgCounter++;
            var svgid = "content_svg_"+this.svgCounter
            e.setAttribute("id",svgid)
            this.svgIDs.push(svgid)
            this.setSvgFill(e,svgid)
          } else {
            this.svgIDs.push(x)
            this.setSvgFill(e,x)
          }
        })
      }
      // 解析svg 背景图
      this.parseSVGBackground(f1)

    },
    setSvgFill (e,svgid) {
      // 获取所有背景色
      var fillids = []
      var fillcontents = []
      var counter=0
      e.querySelectorAll("[fill]").forEach(f=>{
        counter++
        var x = f.getAttribute("id")
        if (x==null){
          f.setAttribute("id",svgid+"_fill_"+counter)
          fillids.push(svgid+"_fill_"+counter)
        }else{
          fillids.push(x)
        }
        fillcontents.push(f.getAttribute("fill"))
      })
      this.svgFillIDs.push(fillids)
      this.svgFillContents.push(fillcontents)
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/svgeditor.css";


</style>
