


    function downloadPDF() {
debugger;
        console.log("hit this function");
      // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
      var pdfPath = '../resume/resume/resume.pdf'
      // Create a link elementurl(../resume/resume.jpg)
      const link = document.createElement('a');

      // Set the href attribute to the path of the PDF file
      link.href = pdfPath;

      // Set the download attribute with the desired file name (optional)
      link.download = 'venkatresume.pdf';

      // Append the link to the document
      document.body.appendChild(link);

      // Programmatically trigger a click event on the link
      link.click();
         
      // Remove the link from the document (optional, but recommended for cleaner code)
      document.body.removeChild(link);
    }

function emailsent(){
  debugger;
  
    var nameElement = document.getElementById("name");
    var name = nameElement.value; 
    var emailElement = document.getElementById("email");
    var email = emailElement.value 
    var numberElement = document.getElementById("number");
    var number = numberElement.value 
    var companyElement = document.getElementById("company");
    var company = companyElement.value
    var subjectement = document.getElementById("subject");
    var subject = subjectement.value
    var messageement = document.getElementById("message");
    var message = messageement.value

    var myElement = document.getElementById("error");
    myElement.textContent = "";
    myElement.style.display = "none";
console.log(name + email +number+company)

if( name==""){
  myElement.textContent = "Enter your name";
  myElement.style.display = "block";

}
else if(email=="")
 {
  myElement.textContent = "Enter your email";
myElement.style.display = "block";

}
else if(number=="")
 {
  myElement.textContent = "Enter your phone number";
  myElement.style.display = "block";

}
else if(company=="")
 {
  myElement.textContent = "Enter your company name";
  myElement.style.display = "block";

}
else{
  myElement.textContent = "";
  myElement.style.display = "none";
}

var EmailRegx = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
const specialCharacterRegex1 = /[\\/:*?"<>]/;
var valida=false;
 if(email!=""){

if (!EmailRegx.test(email.trim())) {
  myElement.textContent ="Enter a valid email address.";
  myElement.style.display = "block";
  valida=true;

}
else if (specialCharacterRegex1.test(email.trim())) {
  myElement.textContent ="Enter a valid email address.";
  myElement.style.display = "block";
  valida=true;
}
else{
  myElement.textContent ="";
  myElement.style.display = "";
}
 }


 if( name!="" && email !="" && number !="" && company!="" && valida==false){
  var modal = new bootstrap.Modal(document.getElementById('thankyoumodal'));

  modal.show();

setTimeout(() => {
console.log("email-hit");
var templateParams = {
 from_name: 'Venkat Website',
 userfirstname: name,
 Companyname:company,
 UserEmail: email,
 Phonenumber: number,
 message: message,
 emailto:email,
 Recruiter:name

};

// Now you can use templateParams in your email sending code

emailjs.init("CMaDjBG9La3HRGv1V");
emailjs.send('service_i0qa8hw', 'template_u10feul', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       messageement.value="";
       subjectement.value="";
       companyElement.value="";
       numberElement.value ="";
       emailElement.value ="";
       nameElement.value="";
      }, function(error) {
       console.log('FAILED...', error);
    });
  }, 2000);}
}