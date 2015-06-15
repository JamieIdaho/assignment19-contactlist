var ContactCollection = Backbone.Collection.extend ({

  model: Contact,
  comparator: 'lastName',
  url: 'http://tiy-515.herokuapp.com/collections/jamiesupercoolcontactlist'
});
