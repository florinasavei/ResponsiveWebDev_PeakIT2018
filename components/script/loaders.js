function loadHeader() {
  fetch("../components/header.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      //reander the header
      document.querySelector("#headerContainer").innerHTML = markup;
    });
}

function loadFooter() {
  fetch("../components/footer.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      //render the markup
      document.querySelector("#footerContainer").innerHTML = markup;
    });
}

function insertFavicon (){
  fetch("../components/favicon.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(markup) {
    document.getElementsByTagName('head')[0].insertAdjacentHTML('afterbegin', markup);
  });
}