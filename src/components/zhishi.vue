<template>
  <div class="zhishi">
    <Card style="width:100%">
      <Dropdown style="margin-left: 20px;margin-bottom: 15px;text-align: center;">
        <Button type="primary">
          下拉菜单
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem><a href="#a">Vue.js 介绍</a></DropdownItem>
          <DropdownItem><a href="#b">黑客破坏攻击的常用入侵方法</a></DropdownItem>
          <DropdownItem><a href="#c"> Linux入门的一些基本知识整理</a></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div id="a" style="text-align:center;border: solid 2px gray;width: auto;overflow: hidden;">
        <router-link to="wenzhang1"><img src="../assets/t1.jpg" width="auto" style="margin: 15px 20px;"></router-link>
        <div style="height: 20px;margin-bottom: 10px;">
          <router-link to="wenzhang1">Vue.js 介绍</router-link>
        </div>
      </div>
      <div id="b" style="text-align:center;border: solid 2px gray;margin-top: 10px;width: auto;overflow: hidden;">
        <router-link to="wenzhang2"><img src="../assets/t2.jpg" width="auto" style="margin: 15px 20px;"></router-link>
        <div style="height: 20px;margin-bottom: 10px;">
          <router-link to="wenzhang2">黑客破坏攻击的常用入侵方法</router-link>
        </div>
      </div>
      <div id="c" style="text-align:center;border: solid 2px gray;margin-top: 10px;width: auto;overflow: hidden;">
        <router-link to="wenzhang3"><img src="../assets/t3.jpg" width="auto" style="margin: 15px 20px;"></router-link>
        <div style="height: 20px;margin-bottom: 10px;">
          <router-link to="wenzhang3">Linux入门的一些基本知识整理</router-link>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .ivu-btn-primary {
    background: #42B983;
    border-color: #42B983;
  }

  .zhishi {
    width: 100%;
    margin: 0 auto;
  }
</style>
