import messagePrimo from './messagePrimo.html'

class messagePrimoController {
    constructor($scope, $window) {
        this.$onInit = function () {
            console.log('messagePrimoController initialized');
            this.$window = $window;
            this.detectLanguage(); // Détecte la langue au chargement
        }
    }

    // Méthode pour détecter la langue et définir le texte
    detectLanguage() {
        const urlParams = new URLSearchParams(this.$window.location.search);
        const lang = urlParams.get('lang') || 'fr'; // Définit 'fr' par défaut si lang est null

        // Définit les textes en fonction de la langue
        switch (lang) {
            case 'en':
                this.titleText = "Can't find the document you're looking for in Babord+?";
                this.linkText = "Feel free to retry your search on the following sites to broaden your possibilities:";
                break;
            case 'es':
                this.titleText = "¿No encuentras el documento que buscas en Babord+?";
                this.linkText = "No dudes en relanzar tu búsqueda en los siguientes sitios para ampliar las posibilidades:";
                break;
            default:
                this.titleText = "Babord+ recense les documents physiques des BU et une part croissante des documents numériques.";
                this.linkText = "Ensavoir plus.";
                break;
        }
    }
}

messagePrimoController.$inject = ['$scope', '$window']
export let messagePrimoConfig = {
    bindings: { parentCtrl: '<' },
    controller: messagePrimoController,
    template: messagePrimo,
}