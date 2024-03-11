
;(function (global, $) {

    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    //Properties and methods that are internal and not exposed
    var supportedlangs = ['en', 'es'];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessages = {
        en: `Logged in`,
        es: `Inicio sesion`
    }

    Greetr.prototype = {
        //properties and methods shared by all greetr objects
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        validate: function () {
            if (supportedlangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            };
        },

        greeting: function () {
            return greetings[this.language] + " " + this.firstName;
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + " " + this.fullName();
        },

        greet: function (formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this; //makes the method chainable
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ": " + this.fullName);
            }
            return this; //makes the method chainable
        },

        setLang: function (lang) {
            this.language = lang;
            this.validate();
            return this; //makes the method chainable
        },

        HTMLGreeting: function(selector, formal){

            if(!$) throw "jQuery not loaded";
            if(!selector) throw "missing selector";

            var msg;
            if (formal) msg = this.formalGreeting();
            else msg = this.greeting();

            $(selector).html(msg);
            return this;
        }
    };

    Greetr.init = function (firstName, lastName, language) {

        //properties unique to each instance of greetr
        var self = this;
        self.firstName = firstName || 'default';
        self.lastName = lastName || 'default';
        self.language = language || 'en';

        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.G$ = global.Greetr = Greetr;

})(window, jQuery);