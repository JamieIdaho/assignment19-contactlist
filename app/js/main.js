
var allContacts = new ContactCollection();

//link the data from server to the page
allContacts.fetch().done(function() {
  allContacts.each(function(model) {
    contactView(model.attributes);
  });
});

// get input values
var addContact = function(e) {
  e.preventDefault();

  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var email = $('#email').val();
  var phoneNumber = $('#phoneNumber').val();
  var twitter = $('#twitter').val();
  var linkedin = $('#linkedin').val();

  console.log(lastName);

// add input values to new instance of Contact model
  var c = new Contact ({
    lastName: lastName,
    firstName: firstName,
    email: email,
    phoneNumber: phoneNumber,
    twitter: twitter,
    linkedin: linkedin
  });

  console.log(c);

//add contact information to collection/data and then run contact view
  allContacts.add(c).save().success( function(data) {
    contactView(data);
  });

// reset the form
  this.reset();
};

//displays contact info on the page
var contactView = function(x) {
  var contactHTML = template.contact(x);
  $('#contacts').prepend(contactHTML);
};

//submit handler
$('#contactForm').on('submit', addContact);














