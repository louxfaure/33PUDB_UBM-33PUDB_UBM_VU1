class afficheMessageReserveController {
  constructor($element, $scope) {
    var inReserve = false;
    console.log("A " + inReserve);

    $scope.$parent.$parent.$ctrl.item.delivery.holding.forEach((holding) => {
      if (holding.subLocationCode == "3100400111") {
        inReserve = true;
      }
    });

    if (inReserve === true) {
      console.log("Ajout message réserve");
      $element[0].innerHTML = '<div id="alerteReserve">Document patrimonial dont la communication est soumise à une validation préalable par les bibliothécaires. Merci de vous adresser à un bureau de prêt ou de nous contacter pour valider votre réservation.<br/><div class="right" style="margin-top:0.5em">➡️&nbsp;<a href="https://www.u-bordeaux-montaigne.fr/fr/documentation/collections-patrimoniales/collections-patrimoniales-imprimees-de-l-universite.html">Plus d\'informations sur notre site.</a></span></div>';
      return null;
    }
  }
}

afficheMessageReserveController.$inject = ['$element', '$scope'];

export let afficheMessageReserveConfig = {
  bindings: {parentCtrl:'<'},
  controller: afficheMessageReserveController,
}