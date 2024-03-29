import { FormGroup, FormControl } from "@angular/forms";

//下面写一个自定义的验证器
export function validatePhone(control: FormControl) {
    //验证手机号是否合法的正则表达式
    let phoneReg = /^1[3456789]\d{9}$/;
    if (control) {

      let valid = phoneReg.test(control.value);
      console.log(valid);
      //如果合法返回空，如果不合法返回一个json对象
      return valid ? null : {mobileValid: {msg: '请输入正确的手机号'}};
    }
  }

  //下面是一个验证controlGroup的例子
  export function validatePasswordGroup(group: FormGroup) {
    let password = group.get('password') as FormControl;
    let confirmPassword = group.get('confirmPassword') as FormControl;
    if (password && confirmPassword){
      let valid = (password.value === confirmPassword.value);
      console.log('两个密码相同：' + valid);
      return valid ? null : {passwordGroup: {msg: '两次输入的手机号需要一致'}};
    }
  }
