var nodemailer = require("nodemailer");
//var smtpTransport = require('nodemailer-smtp-transport');
// 建立一个SMTP传输连接
var smtpTransport = nodemailer.createTransport({
    host: "smtp.163.com",
    secureConnection: true,
    port: 25, // port for secure SMTP
    auth: {
        user: "****@163.com",
        pass: "****"
    }
});
// 邮件选项
var mailOptions = {
	from: "****@163.com", // 发件人邮件地址
	to: "****@qq.com", // 收件人邮件地址列表
	subject: "Hello 小鲜肉", // 标题
	text: "what are you doing now", // 纯文本内容
	html: "<b>cool boy, let go to eat lunch</b>" // HTML内容
}
// 发送邮件
smtpTransport.sendMail(mailOptions, function (err, response) {
	if (err) {
	console.log(err);
	} else {
	console.log("Message sent: " + response.message);
	}
});