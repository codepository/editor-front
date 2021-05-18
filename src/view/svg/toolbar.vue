<template>
<!-- 工具栏 -->
<div class="editor-toolbar">
      <!-- logo -->
      <div class="header__logo">
            <a  href="/svgeditor/" target="_blank" class="header__link">
                  <img  src="img/logo.f3969841.png" alt="svg编辑器" class="logo">
            </a>
      </div>
      <!-- 工具条 -->
      <div class="toolbar-tool editor-toolbar__tool">
            <div class="work-title">
                  <div class="edit-text work-title__editing">
                        <i  aria-label="icon: edit" tabindex="-1" class="edit-text__icon anticon anticon-edit"><svg viewBox="64 64 896 896" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
                        </i>
                        <input placeholder="未命名" type="text" class="edit-text__input">
                  </div>
            </div>
            <div class="tool-elment tool__element">
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: up" class="anticon anticon-up">
                                    <svg viewBox="64 64 896 896" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg>
                              </i>
                              <span class="bar-item__label">上移</span>
                        </div>
                  </div>
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: down" class="anticon anticon-down">
                                    <svg viewBox="64 64 896 896" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                              </i>
                              <span class="bar-item__label">下移</span>
                        </div>
                  </div>
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: border-inner" class="anticon anticon-border-inner">
                                    <svg viewBox="64 64 896 896" data-icon="border-inner" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M872 476H548V144h-72v332H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h324v332h72V548h324c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM650 216h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-592h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-166 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-426h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 260h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                              </i>
                              <span class="bar-item__label">间距</span>
                        </div>
                  </div>
                  <div class="bar-item" @click="del">
                        <div class="bar-item-inner">
                              <i aria-label="icon: delete" class="anticon anticon-delete">
                                    <svg viewBox="64 64 896 896" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                              </i>
                              <span class="bar-item__label">删除</span>
                        </div>
                  </div>
            </div>
      </div>
      <!-- 用户 -->
      <div class="header-user">
            <div  class="user-info " style="">
                  <img :src="userAvator" class="user-info__head">
                  <div class="user-info__nickname">
                        <span> {{userName}} </span>
                  </div>
            </div>
      </div>
      <!-- 工具按钮 -->
      <div class="work-tool">
            <div class="work-tool-new">
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: file" class="anticon anticon-file">
                                    <svg viewBox="64 64 896 896" data-icon="file" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"></path></svg>
                              </i>
                              <span class="bar-item__label">新建</span>
                        </div>
                  </div>
            </div>
            <div  class="work-tool-save">
                  <div  class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: save" class="anticon anticon-save">
                                    <svg viewBox="64 64 896 896" data-icon="save" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path></svg>
                              </i>
                              <span class="bar-item__label">保存</span>
                        </div>
                  </div>
            </div>
            <div class="work-tool-sync">
                  <div class="bar-item">
                        <img src="img/mpa.d08af790.svg">
                        <span class="bar-item__label">同步</span>
                  </div>
                  <div  class="work-sync"></div>
            </div>
            <div class="work-tool-export" @click="exportModal=true">
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: export" class="anticon anticon-export">
                                    <svg viewBox="64 64 896 896" data-icon="export" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                              </i>
                              <span class="bar-item__label">导出</span>
                        </div>
                  </div>
                  <div class="work-export"><!----></div>
            </div>
            <div class="work-tool-preview">
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: eye" class="anticon anticon-eye">
                                    <svg viewBox="64 64 896 896" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                              </i>
                              <span class="bar-item__label">预览</span>
                        </div>
                  </div>
            </div>
            <!-- <div class="work-tool-finish">
                  <div class="bar-item">
                        <div class="bar-item-inner">
                              <i aria-label="icon: check" class="anticon anticon-check">
                                    <svg viewBox="64 64 896 896" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                              </i>
                              <span class="bar-item__label">完成</span>
                        </div>
                  </div>
            </div> -->
      </div>
      <Modal v-model="exportModal" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>导出代码</span>
        </p>
        <div style="text-align:center">
            <p>导出代码到微信后台操作时，尽量不要直接粘贴</p>
        </div>
        <div slot="footer">
            <Button type="info" @click="copyText">复制代码到编辑器</Button>
            <Button type="success" @click="copyRichText">复制代码到微信后台</Button>
        </div>
    </Modal>
</div>
</template>
<script>
export default {
      name: 'svg_toolbar',
      data () {
            return {
                  exportModal: false
            }
      },
      computed: {
            userAvator () {
                  return this.$store.state.user.avatar
            },
            userName () {
                  return this.$store.state.user.userName
            }
      },
      mounted () {
            // console.log(this.$store.state)
      },
      methods: {
            del () {
                  this.$emit('del')
            },
            copyText () {
                  this.$emit('copyText')
                  this.exportModal = false
            },
            copyRichText () {
                  this.$emit('copyRichText')
                  this.exportModal = false
            },
      }

}
</script>