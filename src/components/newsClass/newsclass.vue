<template>
<div class="tabs-contents">
<!-- 调用tabs组件 -->
 <tabs :flag.sync='tabsShowFlag' :navtitle='navTitle' :navdata='navData'>
 <div class="tabs-body">
 <div v-if='navData[0].showFlag>0'>
 <div class="one-content">
 <p>二十国集团领导人第十一次峰会将于9月4日至5日在浙江杭州举行。峰会主题为“构建创新、活力、联动、包容的世界经济”。二 十国集团成员和嘉宾国领导人及有关国际组织负责人将应邀与会。中国国家主席将出席并主持会议，并出席金砖国家领导人非正式会晤等有关活动。二十国集团工商峰会将于9月3日至4日在浙江杭州举行。中国国家主席将出席开幕式并发表主旨演讲。部分二十国集团成员和嘉宾国领导人及有关国际组织负责人将应邀与会。 </p>
 </div>
 </div>
 <div v-if='navData[1].showFlag>0'>
 <div class="two-content">
 <p>党员领导干部</p>
 <div>
 盘点历届奥运会中国乒乓球队精彩比赛瞬间。2016里约奥运会乒乓球男团半决赛，中国3-0韩国晋级，张继科遭遇韩国小将郑荣植的顽强阻击，在两度落后的情况下，苦战五局才得以3：2涉险过关。图为张继科精彩比赛瞬间。
 </div>
 </div>
 </div>
 <div v-if='navData[2].showFlag>0'>
 <label class="glyphicon glyphicon-asterisk"></label>
 <span class="glyphicon glyphicon-remove"></span>
 <div class="two-content">
 <p>都说程序员有三宝：人傻，钱多，死得早。博主身边的程序“猿”一大半应了这三宝，这从侧面说明了一个问题，只有理性是过不好日子的。朋友们应该把工作与生活分开，让生活变得感性，让工作变得理性，两者相提并行，岂不快哉。咳，话题扯得有点远，今天博主给大家写一篇关于css如何设置select、radio 、 checkbox 、file样式的问题，这里不涉及模拟框，仅介绍原生情况下如何做到自定义样式，废话不多说，赖次够！</p>
 <div>
 北京时间8月16日早上，中国游泳队抵达北京，队员们一走出到达出口就被热情的粉丝们蜂拥围堵，尤其是宁泽涛、傅园慧等高人气运动员，更是寸步难行。供图：视觉中国
 </div>
 </div>
 </div>
 <div v-if='navData[3].showFlag>0'>
 <div class="form-horizontal">
 <div class="form-group">
 <label class="col-sm-3 control-label"><span class='add-people-sign'>*</span>姓名:</label>
 <div class="col-sm-2"><input type="text" class="form-control"></div>
 </div>
 </div>
 </div>
 </div>
 </tabs>
 
</div>
</template>
<script>
import tabs from './tabs-contents.vue' //引入组件
export default {
 components: {
 tabs,
 },
 ready: function() {
 },
 methods: {
 },
 data() {
 return {
 tabsShowFlag:true,
 navTitle:'新闻',
 navData: [{
 key: 'biubiu',
 showFlag: 1,
 }, {
 key: '豆豆打豆豆',
 showFlag: -1,
 }, {
 key: '单身汪',
 showFlag: -1
 },{
 key: '喵嘞个咪',
 showFlag: -1
 }],
 }
 },
}
</script>
<style scoped>
</style>