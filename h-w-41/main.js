$(function () {
  const btnOpen = $(".open");
  const form = $(".form");
  const btnClose = $(".close");
  const btn = $(".btn");

  btnOpen.click(function () {
    form.css("visibility", "visible");
  });

  btnClose.click(function () {
    form.css("visibility", "hidden");
  });

  btn.mouseenter(function () {
    btn.css({ boxShadow: "0 0 20px rgb(38, 124, 223)" });
  });

  btn.mouseleave(function () {
    btn.css("box-shadow", "");
  });
});
