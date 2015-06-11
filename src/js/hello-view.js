(function() {
    'use strict';

    /**
     * Hello View module used to handle UI rendering
     */
    DI.App.HelloView = (function() {

        //The id of the element holding the template
        var HELLO_TEMPLATE_ID = 'hello-template';

        /**
         * Handles the rendering of this View Module
         * @param applElementID The id of the element housing the application
         * @param model The model object holding dynamic data
         */
        var render = function render(applElementID, model) {
            //Grabbing the template HTML from index.html
            var templateHTML = $('#' + HELLO_TEMPLATE_ID).html();
            //Creating a template function for model to be applied to
            var template = Handlebars.compile(templateHTML);
            //Creating the stringified template and model
            var stringifiedTemplate = template(model);
            //Placing the stringified template into the DOM
            $('#' + applElementID).html(stringifiedTemplate);
        };

        //API for Module Revealing Pattern
        return {
            render: render
        };

    })();

})();