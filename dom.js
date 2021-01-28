$("form").on("submit", e => {
  e.preventDefault();

  // affiche les valeurs
  console.log("valeur de select : " + $("select").val());
  console.log("valeur de textarea : " + $("textarea").val());
  console.log(
    "nombre de caractères de textarea : " + $("textarea").val().length
  );

  // condition sur le select
  !$("select").val()
    ? $("select").addClass("border-danger")
    : $("select").removeClass("border-danger");

  // condition sur le textarea
  $("textarea").val().length < 20
    ? $("textarea").addClass("border-danger")
    : $("textarea").removeClass("border-danger");
});
