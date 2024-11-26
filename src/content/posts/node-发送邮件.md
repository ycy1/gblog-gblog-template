---
title: "node使用nodemailer发送邮件"
description: "nodemailer是一个简单易用的Node.js邮件发送组件。"
pubDate: "2024-08-23 15:00:00"
category: "develop"
cardImage: "@images/banners/node-发送邮件.png"
cardImage2: "@images/banners/node-发送邮件.png"
tags: ["Node"]
selected: true
---

#### 目录

#### ‌Nodemailer简介
电子邮件是—种用电子手段提供信息交换的通信方式，是互联网应用最广的服务。通过网络的电子邮件系统，用户可以以非常低廉的价格（不管发送到哪里，都只需负担网费）、非常快速的方式（几秒钟之内可以发送到世界上任何指定的目的地），与世界上任何一个角落的网络用户联系。

在很多项目中，我们都会遇到邮件注册，邮件反馈等需求。在node中收发电子邮件也非常简单，因为强大的社区有各种各样的包可以供我么直接使用。

‌Nodemailer‌ 是一个用于发送电子邮件的Node.js模块，它提供了一个简单的方式来发送电子邮件。Nodemailer支持多种SMTP服务器，包括Gmail、QQ邮箱等，并且支持发送纯文本和HTML格式的邮件。使用Nodemailer，开发者可以轻松地封装发送邮件的方法，通过配置SMTP服务器信息、发件人邮箱地址、授权码等参数，以及定义邮件的收件人、主题、内容等，实现邮件的发送。

- [‌Nodemailer‌官网](https://www.nodemailer.com/)

-- -
#### 安装Nodemailer
1. 安装nodemailer
```bash
npm install nodemailer
```
2. 引入nodemailer
```javascript
const nodemailer = require('nodemailer');
```

#### 使用Nodemailer发送邮件
1. 创建一个transporter对象，用于发送邮件
```javascript
/**
 * 邮件配置
 */
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com', //邮箱服务器
    port: 465,
    secure: true, //使用SSL加密
    auth: {
      user: 'jxj1014@qq.com', //邮箱
      pass: 'xxxxxxxxx' //授权码
    }
});
```
2. 创建一个mailOptions对象，用于定义邮件内容
```javascript
const mailOptions = {
    from: "jxj1014@qq.com",
    to: "2039916844@qq.com",
    subject: '主题',
    html: "内容",
    attachments: [
      {
          filename: 'attachment.txt', // 附件文件名
          path: 'src/file/test.txt' // 附件文件路径
      }
  ]
}
```
3. 使用transporter对象发送邮件
```javascript
const sendEmail = async (options) => {
    try {
        options.html = getTpl(options);
        const info = await transporter.sendMail(options);
        console.log('Email sent: ' + info.response);
        return 'success';
    } catch (error) {
        console.log(error);
        return error.response;
    }
}

```
发送成功！🎉
![alt](@images/postsimg/nodemail.png)

#### 附加模板渲染函数
```javascript
// 引入模板引擎
const Handlebars = require('handlebars');
/**
 * 渲染模板内容
 * @param {*} options 
 * @returns 
 */
function getTpl(options){
  // 读取模板文件
  const source = fs.readFileSync('./tpl/template.hbs', 'utf8');
  // 编译模板
  const template = Handlebars.compile(source);
  // 渲染模板
  const output = template(options.data);
  return output; // 返回渲染后的模板内容
}
```

#### 完整代码
- [MyNode](https://github.com/ycy1/myNode)


End

