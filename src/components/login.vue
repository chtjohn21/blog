<template>
  <div class="login">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem label="账号:" prop="uid">
        <Input v-model="formInline.uid" placeholder="请输入账号"></Input>
      </FormItem>
      <FormItem label="密码:" prop="psd">
        <Input v-model="formInline.psd" placeholder="请输入密码" type="password"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" style="margin-top: 35px;">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          uid: '',
          psd: ''
        },
        ruleInline: {
          uid: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          psd: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: '密码至少要6位数',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('http://localhost/2.php', this.formInline, {
              emulateJSON: true
            }).then((res) => {
              console.log(res)
              if (res.data) {
                this.$Message.success('成功了!');
                this.$router.push("/");
              }
            })

          } else {
            this.$Message.error('失败了!');
          }
        })
      }
    }
  }
</script>
<style scoped="scoped">
  .login {
    width: 80%;
    margin: 0 auto;
    border: solid 2px #000000;
    margin-top: 50px;
    padding: 25px 25px;
    background: #42B983;
    border-radius: 25px;
    box-shadow: 20px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
</style>
