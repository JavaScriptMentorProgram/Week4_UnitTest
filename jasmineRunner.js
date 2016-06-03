var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var report = require('./report/customReport');

var nodemailer = require("nodemailer");

jasmine.loadConfigFile('spec/support/jasmine.json');

var transporter = nodemailer.createTransport('smtps://wenjing.liu09%40gmail.com:************@smtp.gmail.com');

jasmine.onComplete(function(passed){
  if (passed) {
    console.log('all specs have passed');
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Claire" <wenjing.liu09@gmail.com>', // sender address
        to: 'wenjing.liu09@foxmail.com, wenjing.liu09@gmail.com', // list of receivers
        subject: 'Unit test', // Subject line
        // text: report.reportMap, // plaintext body
        html: '<p>Hi, everyone,</p>'+
              '<p>The following is the result of Unit test</p>'+
              '<b>jsamineStarted</b>'+
              '<p>'+report.reportMap.jsamineStarted+'</p>'+
              '<b>suiteStarted</b>'+
              '<p>'+report.reportMap.suiteStarted+'</p>'+
              '<b>specStarted</b>'+
              '<p>'+report.reportMap.specStarted+'</p>'+
              '<b>specDone</b>'+
              '<p>'+report.reportMap.specDone+'</p>'+
              '<b>suiteDone</b>'+
              '<p>'+report.reportMap.suiteDone+'</p>'+
              '<b>jasmineDone</b>'+
              '<p>'+report.reportMap.jasmineDone+'</p>'+
              '<p>Best,</p>'+
              '<p>Claire Liu</p>'// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
  } else {
    console.log('at least one spec has failed');
  }
});



jasmine.addReporter(report);
jasmine.execute();