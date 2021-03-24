$(document).ready(function () {
    const quantite = $("#quantite");
    const prixUnitaire = $("#prixunitaire");
    let ht = $("#ht");

    $(document).on("keyup", "input", function () {
        if (quantite.val() && prixUnitaire.val()) {
            ht.val(quantite.val() * prixUnitaire.val())
        }
    });
});
