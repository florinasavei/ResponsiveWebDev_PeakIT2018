document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  loadHeader();
  loadFooter();
  insertFavicon();
  init();
});

function init() {
  var getJokeButton = document.querySelector("#getJoke");

  function chuckNorrisModel(fName, lName) {
    this.firstName = fName || "Chuck";
    this.lastName = lName || "Norris";
  }

  //event listeners
  getJokeButton.addEventListener("click", getJokeFromServer);

  function getJokeFromServer() {
    var firstNameVal = document.querySelector("#firstName").value;
    var lastNameVal = document.querySelector("#lastName").value;

    var isSafeForWork = document.querySelector("#filderMature").checked;
    var isOnlyNerdy = document.querySelector("#onlyNerdy").checked;

    var myChuckNorris = new chuckNorrisModel(firstNameVal, lastNameVal);


    var exludedCathegories = isSafeForWork ? "[explicit]" : null;

    var params = {
      firstName: myChuckNorris.firstName,
      lastName: myChuckNorris.lastName,
      exclude: exludedCathegories
    };

    if (isOnlyNerdy) {
      params.limitTo = "[nerdy]";
    }

    console.log('params', params);

  }
}