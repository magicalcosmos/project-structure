var nodemailer = require("nodemailer");
//var smtpTransport = require('nodemailer-smtp-transport');
// ����һ��SMTP��������
var smtpTransport = nodemailer.createTransport({
    host: "smtp.163.com",
    secureConnection: true,
    port: 25, // port for secure SMTP
    auth: {
        user: "****@163.com",
        pass: "****"
    }
});
// �ʼ�ѡ��
var mailOptions = {
	from: "****@163.com", // �������ʼ���ַ
	to: "****@qq.com", // �ռ����ʼ���ַ�б�
	subject: "Hello С����", // ����
	text: "what are you doing now", // ���ı�����
	html: "<b>cool boy, let go to eat lunch</b>" // HTML����
}
// �����ʼ�
smtpTransport.sendMail(mailOptions, function (err, response) {
	if (err) {
	console.log(err);
	} else {
	console.log("Message sent: " + response.message);
	}
});