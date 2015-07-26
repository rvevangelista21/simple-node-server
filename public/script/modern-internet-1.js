var name = "Email";
document.getElementById("demo1").innerHTML = name;


var name = "Email systems consist of computer servers that process and store messages on behalf of users who connect to the email infrastructure via an email client or web interface. When someone sends an email, the message is transferred from his or her computer to the server associated with the recipient’s address, usually via a number of other servers."
document.getElementById("demo2").innerHTML = name;

var name= "A user sends an email message and connects to an SMTP (Simple Mail Transfer Protocol) server as configured in her email client or Mail User Agent (MUA). On the SMTP server, a Mail Transfer Agent (MTA) looks at the recipient address and looks up the domain part of the address to determine its destination. After querying a Domain Name System (DNS) server for the name of the Mail eXchanger (MX) for the recipient’s domain name the SMTP server will send the message to that server via the SMTPprotocol. The receiving server will store the message and make it available to the recipient (Bob), who can access it via web, POP, or IMAP."
document.getElementById("demo3").innerHTML = name;
