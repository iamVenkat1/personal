
displayDuration();

    function downloadPDF() {
        // console.log("hit this function");
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
  var Phoneregex1 = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g
     var Phoneregex2 = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
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
// console.log(name + email +number+company)

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


 }




  if ( number != "") {
    // this.FormatphoneNumber = this.PhoneNumberp;
    number= number.replace(/\s/g, "")
    number= number.trim();
    var respone = Phoneregex1.test(number);
    var finalrespone;
    if (respone == true) {
      finalrespone = true;
    }
    else {
      respone = Phoneregex2.test(number)
      if (respone == true) {
        finalrespone = true;
      } else {
        finalrespone = false;
      }
    }
    if (finalrespone == false) {
      myElement.textContent = "Enter valid phone number";
      myElement.style.display = "block";
      valida=true;


    } else 
    {
     

    }
  
}

 if( name!="" && email !="" && number !="" && company!="" && valida==false){
  var modal = new bootstrap.Modal(document.getElementById('thankyoumodal'));
  myElement.textContent = "";
  myElement.style.display = "none";
  modal.show();




     
setTimeout(() => {
// console.log("email-hit");
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
       messageement.value="";
       subjectement.value="";
       companyElement.value="";
       numberElement.value ="";
       emailElement.value ="";
       nameElement.value="";
      }, function(error) {
      //  console.log('FAILED...', error);
    });

    var message = "Hey "+name+"\n"+"We're delighted to inform you that Venkat has received your inquiry."+"\n"+"Thanks & regards, Venkat team";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://www.fast2sms.com/dev/bulkV2?authorization=DBRjpPoMTEczUC3SZhIv8gW7yYLqOfJNtwFux1kidb50aKAHsGadzc3lwMhv6S2TqOuknrpXyoYxN10C&message=${encodeURIComponent(message)}&language=english&route=q&numbers=${number}`,
  "method": "GET"
};


$.ajax(settings).done(function (response) {
  // console.log(response);
});
  }, 2000);}
}


function displayDuration() {
  setTimeout(() => {
  // Given join date: May 16, 2022
const joinDate = new Date('2022-05-16');

// Current date
const currentDate = new Date();

// Calculate the difference in milliseconds
const timeDifference = currentDate - joinDate;

// Convert the difference to days, months, and years
const millisecondsInOneDay = 24 * 60 * 60 * 1000;
const daysDifference = Math.floor(timeDifference / millisecondsInOneDay);
const monthsDifference = Math.floor(daysDifference / 30.44); // Assuming an average month length
const yearsDifference = Math.floor(monthsDifference / 12);

// console.log('Experience: ', yearsDifference, 'years', monthsDifference % 12, 'months');
    var durationContainer = document.getElementById('durationContainer');
    let durationText = '';

    if (yearsDifference > 0) {
        durationText += `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''}`;
    }
    var overallmonth=monthsDifference % 12
    
    if (overallmonth> 0) {
        durationText += `${durationText.length > 0 ? ' and ' : ''}${overallmonth} month${overallmonth !== 1 ? 's' : ''}`;
    }
    
    durationContainer.textContent = durationText;
  
    
    //  durationContainer.textContent = `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''} and ${monthsDifference % 12} month${monthsDifference !== 1 ? 's' : ''}`;
   

}, 2000);

}
