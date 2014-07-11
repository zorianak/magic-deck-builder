CardView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            // however, since we are using Jade, we want to use jade.compile
            // instead of template
            var template = jade.compile( $("#cardlist").text(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        }
    });
    
    var cardlist = new CardView({ el: $("#cardlist") });
    cardlist.render();