function submitForm(event) {}
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var support = document.getElementById("support").value;
    var effectiveness = document.getElementById("effectiveness").value;
    var behavior = document.getElementById("behavior").value;
    var understanding = document.getElementById("understanding").value;

    // You can perform additional validation if needed

    // Prepare data to be sent (you can use AJAX or other techniques to send the data)
    var feedbackData = {
      name: name,
      email: email,
      support: support,
      effectiveness}


      function submitForm(event) {
        event.preventDefault(); // Prevent form submission
    
        // Retrieve form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var support = document.getElementById("support").value;
        var effectiveness = document.getElementById("effectiveness").value;
        var behavior = document.getElementById("behavior").value;
        var understanding = document.getElementById("understanding").value;
    
        // Prepare data to be sent
        var feedbackData = {
          name: name,
          email: email,
          support: support,
          effectiveness: effectiveness,
          behavior: behavior,
          understanding: understanding
        };
    
        // Send data to server-side for email sending
        sendEmail(feedbackData);
      }
    
      function sendEmail(feedbackData) {
        // Import required modules
        const nodemailer = require("nodemailer");
    
        // Create a transporter object using your email service provider's SMTP settings
        let transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "joysultan45@gmail.com", // Replace with your Gmail email address
            pass: "december31august" // Replace with your Gmail password or app password
          }
        });
    
        // Compose the email message
        let mailOptions = {
          from: "your-email@gmail.com", // Replace with your Gmail email address
          to: "joysultan0@gmail.com", // Replace with your Gmail email address to receive the feedback
          subject: "Student Feedback",
          text: JSON.stringify(feedbackData, null, 2) // Convert feedbackData to a readable string
        };
    
        // Send the email
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            // Optionally, you can display a success message to the user or redirect them to a thank you page.
          }
        });
      }