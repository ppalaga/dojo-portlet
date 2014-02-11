require([
    'dojo/fx',
    'dojo/_base/fx',
    'dojo/domReady!'
], function (fx, coreFx) {

    fx.chain([
                  coreFx.fadeIn({ node: "dojoWorks", duration: 3000 }),
                  coreFx.fadeIn({ node: "inJBossPortal", duration: 3000 })
              ]).play();

});