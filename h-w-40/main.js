$(function () {
  const phone = $(".tel");
  const footer = $("footer");

  const phoneCopy = phone.clone();

  footer.append(phoneCopy);

  function setAttribute(element, attr, value) {
    element.css(attr, value);
  }
  setAttribute($("footer,header"), "background-color", "rgb(112, 111, 111)");
  setAttribute($("footer,header"), "border", "2px solid black");
  setAttribute($("footer,header"), "padding-top", "40px");
  setAttribute($("footer,header"), "border-radius", "20px");
});
