<template>
<div class="tabs-content" v-if='flag'>
 <div class="top">
 <!-- <div class="title">{{$route.query.title}}</div> -->
 <ul class="nav nav-tabs">
    <li v-for='(nav,navindex) in navdata' class="nav-li" v-bind:class='{active:nav.showFlag>=0}' @click='keyShowFun(navindex)'>
        <a href="#">{{nav.key}}</a>
    </li>
 </ul>
 </div>
 <div class="v-tabs-item">
 <slot></slot>
 </div>
</div>
</template>
<script>
export default {
 props: {
 flag: {
 type: Boolean,
 required: true,
 twoWay: true
 },
 navtitle: {
 type: String,
 default: ''
 },
 navdata: {
 type: Array,
 required: true,
 },
 },
 components: {
 
 },
 ready: function() {
 
 },
 methods: {
 keyShowFun:function(index){
 let _this=this;
 _this.navdata.forEach(function(item){
 item.showFlag=-1;
 });
 _this.navdata[index].showFlag=1;
 }
 },
 data() {
 return {
 }
 },
}
</script>
<style scoped>
    .title{
    height: 40px;
    width: 100%;
    display: flex;
    /* overflow: hidden; */
    justify-content: center;
    align-items: center;
    background-color: green;
    }
    ul {
    list-style-type: none;
    padding: 0;
    width:100%;
    height: 30px;
    display:flex;
    background-color: goldenrod;
    /* justify-content:center; */
    align-items:center;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    flex-grow:1;
    }
    a {
    color:black;
    }
</style>