import linkToExternalSearchSystem from './linkExternalSiteResultList.html'

class linkToExternalSearchSystemController {
    constructor($scope, $window){
      this.$onInit = function () {
        this.$window = $window;
        console.log('linkToExternalSearchSystemController initialized');
        console.log('Affiche message :',this.showExternalSiteList)
        this.detectLanguage(); // Détecte la langue au chargement
        if (this.parentCtrl.jwtUtilService.storageUtil.localStorage.getItem('viewExternalSearchMessage') === 'true' || this.parentCtrl.jwtUtilService.storageUtil.localStorage.getItem('viewExternalSearchMessage') !== undefined) {
           this.showExternalSiteList = true;
           this.parentCtrl.jwtUtilService.storageUtil.localStorage.setItem('viewExternalSearchMessage','true');
        }
       
        $scope.queryTerm = encodeURIComponent(this.parentCtrl.searchService.searchFieldsService._mainSearch);
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
          this.contentText = "Feel free to retry your search on the following sites to broaden your possibilities:";
          break;
        case 'es':
          this.titleText = "¿No encuentras el documento que buscas en Babord+?";
          this.contentText = "No dudes en relanzar tu búsqueda en los siguientes sitios para ampliar las posibilidades:";
          break;
        default:
          this.titleText = "Vous ne trouvez pas le document que vous cherchez dans Babord+ ?";
          this.contentText = "N'hésitez pas à relancer votre recherche sur les sites suivants pour élargir les possibilités :";
          break;
      }
    }

    externalSearchMsgOnClick (){
      this.showExternalSiteList = false;
      this.parentCtrl.jwtUtilService.storageUtil.localStorage.setItem('viewExternalSearchMessage','false');
    };
  }

  linkToExternalSearchSystemController.$inject = ['$scope', '$window']
  export let linkToExternalSearchSystemConfig = {
    bindings: {parentCtrl:'<'},
    controller: linkToExternalSearchSystemController,
    template:  linkToExternalSearchSystem,
  }