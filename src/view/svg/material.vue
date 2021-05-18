<template>
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
</template>
<script>
export default {
     name: 'material_component',
     data () {
           return {
                 showMyMaterial: false,
           }
     },
}
</script>