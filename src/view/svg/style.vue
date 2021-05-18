<template>
      <div class="side-tab-content side-bar-content-wrap">
            <div class="tab-template">
                  <div class="search-container tab-template__searchbar">
                        <div  class="search">
                              <div class="menu">
                                    <Dropdown>
                                          <i aria-label="icon: menu" class="menu__icon anticon anticon-menu">
                                                <svg viewBox="64 64 896 896" data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
                                          </i>
                                          <DropdownMenu slot="list">
                                                <DropdownItem>驴打滚</DropdownItem>
                                                <DropdownItem>炸酱面</DropdownItem>
                                                <DropdownItem>豆汁儿</DropdownItem>
                                                <DropdownItem>冰糖葫芦</DropdownItem>
                                                <DropdownItem>北京烤鸭</DropdownItem>
                                          </DropdownMenu>
                                    </Dropdown>
                                    <div class="menu__text">分类</div>
                              </div>
                              
                              <div class="search__input">
                                    <input type="text" placeholder="请输入关键词搜索"><!----></div>
                                    <button type="button" class="ant-btn ant-btn-icon-only">
                                          
                                          <i aria-label="icon: search" class="anticon anticon-search">
                                                <svg viewBox="64 64 896 896" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                                          </i>
                                          
                                    </button>
                                    <div @click="refresh" style="font-size: 24px;background-color: beige;height: 41px;line-height: 41px;"><Icon type="ios-refresh" size="24"/></div>
                              </div>
                              
                  </div>
                  <div class="tab-template__list">
                        <div class="list-loader">
                              <div class="list-loader__inner">
                                    <div class="list-item"  v-for="(item,i) in datas" v-bind:key="i" @click="click(item)">
                                          <div :title="item.title" class="item-template">
                                                <div class="item-content"><div class="item-content__tag">免费</div>
                                                      <div class="item-content__card">
                                                            <div v-html="item.htmldata" class="item-content__wrap">
                                                                  
                                                            </div>
                                                      </div>
                                                      <div class="item-content__title">{{item.abstract || '无摘要'}}</div>
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
import { findAllStyle } from '@/api/weixineditor'
export default {
      name: 'style_component',
      data () {
            return {
                  datas:[],
                  refreshing: false,
                  params: {
                        limit: 10,
                        offset: 0,
                        type: '',
                        title: ''
                  }
            }
      },
      mounted () {
       this.getData()
      },
     methods: {
       click (item) {
             this.$emit('add',item)
       },
       refresh () {
             if (this.refreshing) return
             this.refreshing = true
             setTimeout(()=>{ this.refreshing = false },3000)
             this.getData()
       },
       getData () {
         findAllStyle(this.params).then(res => {
           var data = this.getResponseData(res)
           this.datas = data
         })
       }
     }
}
</script>