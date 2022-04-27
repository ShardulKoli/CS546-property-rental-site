var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: 'studyroomproj@gmail.com',
        pass: 'studyroom@123!'
    }
});


function sendAccoutConfirmationEmail(user) {

    var mailOptions = {
        from: 'studyroomproj@gmail.com',
        subject: 'Welcome to Studyroom!',
        to: user.email
    };

    if (user.userType === 1) {
        mailOptions.text = `Hello ${user.firstName}, we are pleased to have you on board!\n Your password is: ${user.password}.\n Please keep this information for your further reference in a secured place. \nThousands of students are using Studyroom for their property rentals and are having a smooth sailing experience.\n You are all set to find your rental home!`;

        mailOptions.html = `<div style="text-align: center;">Hello <b>${user.firstName}</b>, we are pleased to have you on board! <br/>Your password is: <b>${user.password}</b>. <br/>Please keep this information for your further reference in a secured place. <br/>Thousands of students are using <b><span style="color: blue;">Studyroom</span></b> for their property rentals and are having a smooth sailing experience.<br/>You are all set to find your rental home!</div>`;
    } else if (user.userType === 2) {
        mailOptions.text = `Hello ${user.firstName}, we are pleased to have you on board!\n Your password is: ${user.password}. \nPlease keep this information for your further reference in a secured place.\n Thousands of brokers are using Studyroom for uploading rental properties and are having a smooth sailing experience.\n You are all set to showcase your rentals!`;

        mailOptions.html = `<div style="text-align: center;">Hello <b>${user.firstName}</b>, we are pleased to have you on board! <br/>Your password is: <b>${user.password}</b>. <br/>Please keep this information for your further reference in a secured place. <br/>Thousands of students are using <b><span style="color: blue;">Studyroom</span></b> for uploading rental properties and are having a smooth sailing experience.<br/>You are all set to showcase your rentals!</div>`;
    }

    var emailResponse = sendEmail(mailOptions);

    return true;

}

function sendPropertyInterestedEmail(student, broker, property) {

    var mailOptions = {
        from: 'studyroomproj@gmail.com',
        subject: 'Property Enquiry Alert!',
        to: broker.email
    };

    mailOptions.text = `Hello ${user.firstName}, a student has shown interest in a property that you have uploaded.\n Property Details \n Name : ${property.name} \n Address : ${property.address}\n Pin : ${property.pincode} \n City : ${property.city} \n State : ${property.state} \n Student Details \n Name : ${student.firstName} ${student.lastName} \n Contact : ${student.contact} \n Email: ${student.email}`;

    mailOptions.html = `<div style="text-align: center;">Hello ${user.firstName}, a student has shown interest in a property that you have uploaded.<br/><br/><strong>Property Details <strong><br/> 
    Name : ${property.name} <br/> Address : ${property.address} <br/> Pin : ${property.pincode} <br/>
    City : ${property.city} <br/> State : ${property.state} <br/><br/> <strong>Student Details </strong><br/> Name : ${student.firstName} ${student.lastName} <br/> Contact : ${student.contact} <br/> Email: ${student.email}</div>`;

    var emailResponse = sendEmail(mailOptions);

    return true;
}

function sendEmail(mailOptions) {

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {

        } else {
            throw error;
        }
    });

}

module.exports = {
    sendAccoutConfirmationEmail,
    sendPropertyInterestedEmail
}