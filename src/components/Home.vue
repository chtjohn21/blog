<template>
  <div class="home">
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1" to="/jieshao">
                            <Icon type="md-contact" />
                            介绍
                        </MenuItem>
                        <MenuItem name="2" to="/zhishi">
                            <Icon type="ios-keypad"></Icon>
                            知识分享
                        </MenuItem>
                        <MenuItem name="3" to="/zhuce">
                            <Icon type="ios-people-outline" />
                            注册
                        </MenuItem>
                        <MenuItem name="4" to="/login">
                            <Icon type="md-send" />
                            登录
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem></BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                      <img src="../assets/logo.png" />
                        <router-view />
                    </div>

                </Card>
            </Content>
            <Footer class="layout-footer-center">2021 &copy; TalkingData</Footer>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0px;
}
a {
  color: #42b983;
}
.layout{
    border: 1px solid #fff;
    background: #42B983;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #42B983;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.ivu-layout-header {
    background: #42B983;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
}
.ivu-menu-dark {
    background: #42B983;
}
</style>
