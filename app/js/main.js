
var allContacts = new ContactCollection();

//link the data from server to the page
allContacts.fetch().done(function() {

  allContacts.each(function(model) {
    contactView(model.attributes);
  });
  allContacts.each(function(model) {
    sidebarView(model.attributes);
  //   .sort(function(a,b) {
  //   if(a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
  //   if(a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
  //   return 0;
  // });
 });
});

// get input values
var addContact = function(e) {
  e.preventDefault();

  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var email = $('#email').val();
  var phoneNumber = $('#phoneNumber').mask("(999) 999-9999").val();
  var twitter = $('#twitter').val();
  var linkedin = $('#linkedin').val();


// add input values to new instance of Contact model
  var c = new Contact ({
    lastName: lastName,
    firstName: firstName,
    email: email,
    phoneNumber: phoneNumber,
    twitter: twitter,
    linkedin: linkedin
  });


//add contact information to collection/data and then run contact view
  allContacts.add(c).save().success( function(data) {
    contactView(data);
    sidebarView(data);
  });

// reset the form
  this.reset();
  $('#lastName').focus();
};

//removes contact from page and collection/data
var removeContact = function(e) {
  e.preventDefault();
  var contact2Delete = $(this).parent().parent(),
      id2Delete = contact2Delete.attr('id');


      allContacts.get(id2Delete).destroy().success(function() {
        contact2Delete.parent().fadeOut();
        contact2Delete.fadeOut();

      });
    };


//displays contact info on the page
var contactView = function(x) {
  var contactHTML = template.contact(x);
  $('#contacts').prepend(contactHTML);
};

//displayed contact names on the sidebar
var sidebarView = function(x) {
  var sidebarHTML = template.example(x);
  $('#sidebarNames').prepend(sidebarHTML);

  //   .sort(function(a,b) {
  //   if(a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
  //   if(a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
  //   return 0;
  // });
};

//submit handler
$('#contactForm').on('submit', addContact);

//delete handler
$('#contacts').on('click', '#fullName #remove', removeContact);

$('#sidebarNames').on('click', '#sidebarFullName', contactView);














