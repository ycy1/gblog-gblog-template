// import {sendEmail} from "@message/email.ts"


  const from = document.getElementById('myForm')
  if(from){
    from.addEventListener('submit', function(event) {
      // 阻止表单提交
      event.preventDefault();
      // 执行验证逻辑
      var formData = new FormData(this); // 'this' refers to the form element

      const mailOptions = {
        from: "jxj1014@qq.com",
        to: "2039916844@qq.com",
        subject: '意见反馈',
        html: "内容"
      }
      for (var pair of formData.entries()) {
        if(pair[0] === 'about'){
          mailOptions.html = pair[1].toString()
        }else if(pair[0] === 'email'){
          mailOptions.to = pair[1].toString()
        }
        console.log(pair[0] + ': ' + pair[1]);
      }
      console.log("mailOptions", mailOptions);
      
      
    fetch("http://111.67.201.26:3000/send", {
        'method': 'POST',
        'body': JSON.stringify(mailOptions),
        'headers': {
            'content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => {return res.text()}).then(data => {
      console.log(data);
      if(data === 'success'){
        alert('发送成功')
      }else{
        alert(data)
      }
    });

      // sendEmail(mailOptions);

    });
  }