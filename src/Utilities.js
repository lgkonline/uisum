let Utilities = {
    hasClass: function (el, className) {
        if (el.classList)
            return el.classList.contains(className);
        else
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },

    addClass: function (el, className) {
        if (el.classList)
            el.classList.add(className);
        else if (!hasClass(el, className))
            el.className += " " + className;
    },

    removeClass: function (el, className) {
        if (el.classList)
            el.classList.remove(className);
        else if (hasClass(el, className))
            el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
    },

    toggleClass: function (element, className) {
        if (!element || !className) {
            return;
        }

        var classString = element.className, nameIndex = classString.indexOf(className);
        if (nameIndex == -1) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
        }
        element.className = classString;
    },

    startLoading: function () {
        document.querySelectorAll(".ui-loading")[0].style.display = "block";
    },

    finishLoading: function () {
        document.querySelectorAll(".ui-loading")[0].style.display = "";
    },

    showSuccess: function () {
        document.querySelectorAll(".ui-status-success")[0].style.display = "block";
    },

    hideSuccess: function () {
        document.querySelectorAll(".ui-status-success")[0].style.display = "";
    },

    toggleActions: function (uiActionElements) {
        this.toggleClass(document.querySelector(".ui-wrapper"), "active");
        this.toggleClass(document.querySelector(".ui-grid"), "wrapper-in");

        if (!uiActionElements) {
            uiActionElements = document.querySelectorAll(".ui-actions");
        }

        for (var i = 0; i < uiActionElements.length; i++) {
            this.toggleClass(uiActionElements[i], "open");
        }
    },

    hideActions: function () {
        this.removeClass(document.querySelector(".ui-wrapper"), "active");
        this.removeClass(document.querySelector(".ui-grid"), "wrapper-in");

        const uiActionElements = document.querySelectorAll(".ui-actions");

        for (var i = 0; i < uiActionElements.length; i++) {
            this.removeClass(uiActionElements[i], "open");
        }
    },

    resetAlertMessage: function (alertClassName = "info") {
        const alertElement = document.querySelectorAll(".ui-status-alert")[0];
        document.querySelectorAll(".ui-status-" + alertClassName)[0].style.display = "";
        alertElement.style.display = "";
        this.removeClass(alertElement, "alert-" + (alertClassName == "loading" ? "info" : alertClassName));
    },

    setAlertMessage: function (message, alertClassName = "info", close, detailText) {
        const alertElement = document.querySelectorAll(".ui-status-alert")[0];

        if (alertClassName.indexOf("alert-") > -1) {
            alertClassName = alertClassName.replace("alert-", "");
        }

        document.querySelectorAll(".ui-status-" + alertClassName)[0].style.display = "block";
        alertElement.style.display = "block";
        this.addClass(alertElement, "alert-" + (alertClassName == "loading" ? "info" : alertClassName));

        alertElement.querySelector(".alert-body").innerHTML = `<h2>` + message + `</h2>`;
        if (detailText) {
            alertElement.querySelector(".alert-body").innerHTML += `<span>` + detailText + `</span>`;
        }

        if (close) {
            alertElement.querySelector(".close").style.display = "inline-block";
            alertElement.querySelector(".close").onclick = () => {
                this.resetAlertMessage(alertClassName);
            };
        }
        else {
            alertElement.querySelector(".close").style.display = "none";
        }
    },

    guid: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    },

    scrollToTop: () => {
        const routerPage = document.querySelector(".page-wrapper.active");

        routerPage.scroll({
            behavior: "smooth",
            left: 0,
            top: 0
        });
    },

    fluentBtnsListener: (event, btn) => {
        const btnBall = btn.querySelector(".fluent-btn-ball");
        const el = btn.getBoundingClientRect();
        const offset = {
            left: el.left + window.scrollX,
            top: el.top + window.scrollY
        };

        const x = event.pageX - offset.left;
        const y = event.pageY - offset.top;

        btnBall.style.left = x + "px";
        btnBall.style.top = y + "px";
    },

    unregisterFluentBtns: null,
    registerFluentBtns: null
};

Utilities.unregisterFluentBtns = () => {
    const btns = document.querySelectorAll(".fluent-btn");

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.removeEventListener("mousemove", event => Utilities.fluentBtnsListener(event, btn));
    }
};

Utilities.registerFluentBtns = () => {
    Utilities.unregisterFluentBtns();

    const btns = document.querySelectorAll(".fluent-btn");

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.addEventListener("mousemove", event => Utilities.fluentBtnsListener(event, btn));
    }
};

export default Utilities;