requirejs.config({
    shim : {
        "underscore": {
            exports: "_"
        },
        semantic: {
            deps : ["jquery"]
        },
        fullpage: {
            deps : ["jquery"]
        }        
    },

    paths: {
        jquery: "jquery-3.2.1.min",
        underscore: "underscore-1.8.3.min",
        semantic: "semantic.min",
        fullpage: "jquery.fullpage.min"
    }
});

define("app", function (require, exports) {
    "use strict";

    var $ = require("jquery");
    var _ = require("underscore");

    require("semantic");
    require("fullpage");

    function _toggleMenuStatus(index, nextIndex) {
        function getTag(i) {
            switch (i) {
                case 2:
                return "welcomePageMenu";
                case 3:
                return "portfolioPageMenu";
                case 4:
                return "contactPageMenu";
            }
        }

        var currentPage = "#" + getTag(index);
        var nextPage = "#" + getTag(nextIndex);

        $(currentPage).removeClass("active");
        $(nextPage).addClass("active");
    }

    /**
     * This function initializes the applicaiton
     * 
     * @return {void}
     */
    function _init() {
        $('#fullpage').fullpage({
            css3: false,            
            slidesNavigation: true,
            anchors:["splashPage", "welcomePage", "portfolioPage", "contactPage"],
            onLeave: _toggleMenuStatus
        });

        $("#welcomePageMenu").click(function () {
            $.fn.fullpage.moveTo("welcomePage");
        });

        $("#portfolioPageMenu").click(function () {
            $.fn.fullpage.moveTo("portfolioPage");
        });

        $("#contactPageMenu").click(function () {
            $.fn.fullpage.moveTo("contactPage");
        });

        $("#downButton").click(function () {
            $.fn.fullpage.moveTo("welcomePage");
        });        

        $("#twitterButton").click(function () {
            window.open("https://twitter.com/codesurge_xyz");
        });

        $("#githubButton").click(function () {
            window.open("https://github.com/codesurge-xyz");
        });

        $("#linkedinButton").click(function () {
            window.open("https://www.linkedin.com/in/jamesadooley");
        });

        $("button[data-target]").click(function (e) {
            var url = e.currentTarget.dataset.target;

            if (url) {
                window.open(url);
            }
        })
    }

    exports.init = function () {
        _init();
    };
});

requirejs(["app"], function (app) {
    "use strict";
    app.init();
});
