(function () {
  var people = {
    people: ['Will', 'Laura'],
    template: $('#people-template').html(),
    init: function () {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function () {
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#people-template').html();
    },
    bindEvents: function () {
      this.$button.on('click', this.addPerson.bind(this));
      this.$ul.on('click', 'i.del', this.deletePerson.bind(this));
    },
    render: function () {
      var data = {
        people: this.people,
      };
      this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson: function () {
      this.people.push(this.$input.val());
      this.render();
      this.$input.val('');
    },
    deletePerson: function (e) {
      var $remove = $(e.target).closest('li');
      var i = this.$ul.find('li').index($remove);

      this.people.splice(i, 1);
      this.render();
    },
  };

  people.init();
})();
