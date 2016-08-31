
Template.Recipe.onCreated(function() {
	this.editUpdate = new ReactiveVar(false);
	//this.editUpdate = new ReactiveVar();
	//this.editUpdate.set(false);

	//this.templateDictionary = new ReactiveDict();
	//this.templateDictionary.set('editUpdate', false);
});

Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},

	'click .toggle-update': function() {
		Meteor.call('toggleUpdate', this._id, this.updateButton);
	},

	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},

	'click .fa-pencil': function(event, template) {
		//Session.set('editUpdate', !Session.get('editUpdate'));
		template.editUpdate.set(!template.editUpdate.get());

		//template.templateDictionary.set('editUpdate', !template.templateDictionary.get('editUpdate'));
	}
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editUpdate: function() {
		return Template.instance().editUpdate.get();

		//return Template.instance().templateDictionary.get('editUpdate');
	}
});