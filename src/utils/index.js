export const verifyPhone = value=>{//value手机号
    let reg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0135678]|18[0-9]|19[0-3,5-9])\d{8}$/;
    return reg.test(value);//验证手机号码返回的是true，不是手机号码返回false
}