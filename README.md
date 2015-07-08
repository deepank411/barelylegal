### Step by step instructions to set up subscribe form backend ###

* Go to docs.google.com and create a new form with field "email". Set data validation to email.
* Select option to store values in spreadsheet.
* Click 'View Live Form' button and check the source of the form that is shown. Search for '<form action'
* Find the unique name of the email input field, for eg: entry_1402836733.
* In assets/js/googleform.js, replace field "url" with your own obtained from "<form action", also change value of email in "data" array.

### OR ###

* Setup google form using "http://www.codeproject.com/Tips/721795/Store-your-form-data-in-Google-Spreadsheet".