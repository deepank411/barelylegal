function postContactToGoogle() {
      var email = $('#Email').val();

         $.ajax({
            url: "https://docs.google.com/forms/d/1XMPzfV04BCfiTTWmOho42fjTwh1mM__SufAcDp9UHmE/formResponse",
            data: { "entry_1338143645": email},
            type: "POST",
            dataType: "xml",
            statusCode: {
                  0: function () {
                     // window.location.replace("index.html");
                     window.alert("Successfully Subscribed");
                     return false;
                  },
                  200: function () {
                     // window.location.replace("index.html");
                     window.alert("Successfully Subscribed");
                     return false;
                  }
            }
         });
}
