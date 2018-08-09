const translations = {
    "ORANGE_UI_DESCRIPTION": [
        "This UI kit combines Bootstrap and some React components in it to make it easy for you to create new apps.",
        "Dieses UI-Kit kombiniert Bootstrap und einige React-Komponenten in sich, um dir das Erstellen neuer Apps zu erleichtern."
    ],
    "BOOTSTRAP_LEAD": ["For the style we are using a customized Bootstrap.", "Für das Stylesheet wird hauptsächlich ein angepasstes Bootstrap verwendet."],
    "LGK_DEV_OVERVIEW": ["All LGK dev resources", "Alle LGK Entwicklungsressourcen"],
    "OFFICAL_BOOTSTRAP_DOCU": ["Official Bootstrap documentation", "Offizielle Bootstrap Dokumentation"],
    "MARKUP_TEMPLATE": ["Markup template", "Markup Grundriss"],
    "IMPLEMENTATION": ["Implementation", "Implementierung"],
    "REACT_COMPONENTS": ["React components", "React Komponenten"],
    "OTHER_COMPONENTS": ["Other components", "Sonstige Komponenten"],
    "CONTACT": ["Contact", "Kontakt"],
    "IMPRINT": ["Imprint", "Impressum"],
    "SEARCH": ["Search", "Suchen"],
    "SEARCH2": ["Search", "Suche"],
    "DOCUMENTATION": ["Documentation", "Dokumentation"],
    "GETTING_STARTED": ["Getting started", "Los geht's"],
    "STARTER_PROJECT": ["Starter project", "Starter-Projekt"],
    "SCSS_VARIABLES": ["SCSS variables", "SCSS Variablen"],
    "EXAMPLE": ["Example", "Beispiel"],
    "SHOW_EXAMPLE": ["Show example", "Beispiel zeigen"],
    "SCSS_VARIABLES_DESC": [
        "These are special variables for Uisum. There are many others that come with Bootstrap.",
        "Dies sind Extra-Variablen für Uisum. Es gibt noch viele weitere Variablen, die mit Bootstrap kommen."
    ],
    "STARTER_PROJECT_TEXT": [
        "For a quick start clone this GitHub repo",
        "Für einen schnellen Einstieg, klone diese GitHub Repo"
    ],
    "VS_CODE_EXTENSION_TEXT": [
        "This extension contains some helpful snippets, so it's much easier and quicker for you to work with Uisum.",
        "Diese Erweiterung enthält einige hilfreiche Snippets, so dass es viel einfacher und schneller ist, mit Uisum zu arbeiten."
    ]
};

window.systemCulture = ((navigator.language || navigator.userLanguage).toLowerCase().indexOf("de") > -1 ? "de-DE" : "en-US");
window.culture = localStorage.getItem("culture") ? localStorage.getItem("culture") : systemCulture;

class Translation {
    getPhrase(keyword, countryCode) {
        countryCode = countryCode || culture;

        if (translations[keyword]) {
            if (countryCode.indexOf("de-") > -1) {
                return translations[keyword][1];
            }
            else {
                return translations[keyword][0];
            }
        }
        else {
            return keyword;
        }
    }
}

export default new Translation();