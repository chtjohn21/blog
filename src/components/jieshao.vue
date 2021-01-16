<template>
  <div class="jieshao">
  <Form :model="formItem" :label-width="80">
        <FormItem label="姓名:">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="学校:">
            <Input v-model="formItem.school" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="班级:">
            <Input v-model="formItem.class" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="性别:">
            <Input v-model="formItem.xingbie" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="自我介绍:">
            <Input v-model="formItem.jieshao" type="textarea" :autosize="{minRows:4,maxRows:7,mincol:4,maxcol:7}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="联系方式:">
            <Input v-model="formItem.tel" placeholder="Enter something..."></Input>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
data () {
            return {
                formItem: {
                    input: '陈海涛',
                    school: '江门职业技术学院',
                    class:'18计算机应用班',
                    xingbie: '男',
                    jieshao: '站长',
                    tel:'15697652383'
                }
            }
        }
}
</script>

<style>

</style>
