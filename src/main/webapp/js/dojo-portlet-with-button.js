require([
    'dijit/form/Button',
    'dojo/dom',
    'dojo/domReady!'
], function (Button, dom) {

var myButton = new Button({
        label: "Click me!",
        onClick: function(){
            // Do something:
            dom.byId("dojoButtonResult").innerHTML += "Thank you! ";
        }
    }, "dojoButton");

});