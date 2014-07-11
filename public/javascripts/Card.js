// So Creature Cards can be a model basically
// which would then be a collection of Cards

var CreatureCards = Backbone.Model.extend({
   defaults: {
       name: "Not specified",
       type: "Not specified",
       power: "0",
       toughness: "0",
       cost: "0"
   },
    
    initialize: function() {
        console.log('Init CreatureCards');
    }
});

var Cards = Backbone.Collection.extend({
   model: CreatureCards 
});

// So that's a simple way to set this up with Backbone then