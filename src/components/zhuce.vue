<template>
  <div class="zhuce">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="用户名:" style="color: #FFFFFF;" prop="input">
        <Input v-model="formValidate.input" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="账号:" prop="uid">
        <Input v-model="formValidate.uid" placeholder="请输入账号"></Input>
      </FormItem>
      <FormItem label="密码:" prop="psd">
        <Input v-model="formValidate.psd" placeholder="请输入密码" type="password"></Input>
      </FormItem>
      <FormItem label="性别:" prop="radio">
        <RadioGroup v-model="formValidate.radio" style="margin-right: 70px;">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <Button type="primary" @click="submit('formValidate')">注册</Button>
      <Button style="margin-left: 8px" @click="reset('formValidate')">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formValidate: {
          input: '',
          uid: '',
          psd: '',
          radio: '',
          user: '',
        },
        ruleValidate: {
          input: [{
            required: true,
            message: '名字太简单了',
            trigger: 'blur'
          }],
          uid: [{
            required: true,
            message: '账号太简单了',
            trigger: 'blur'
          }],
          psd: [{
              required: true,
              message: '密码长度至少六位',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: '密码长度至少六位',
              trigger: 'blur'
            }
          ],
          radio: [{
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }],
        }
      }
    },
    methods: {
      submit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('http://localhost/1.php', this.formValidate, {
              emulateJSON: true
            }).then((res) => {
              console.log(res)
            })

              this.$Message.success("注册成功");
              this.$router.push("/login");

          } else {
            this.$Message.error('请正确填写表格');
            return
          }
        }, 5000)
      },
      reset(name) {
        this.$refs[name].resetFields();
        this.$router.push("/denglu")
      }
    }
  }
</script>

<style>
  .zhuce {
    width: 80%;
    margin: 0 auto;
    border: solid 2px #000000;
    margin-top: 50px;
    padding: 25px 25px;
    background: #42B983;
    border-radius: 25px;
    box-shadow: 20px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .ivu-form .ivu-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: black;
    line-height: 1;
    padding: 10px 12px 10px 0;
    box-sizing: border-box;
  }

  .ivu-input {
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 14px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
    border-radius: 25px;
  }
</style>
