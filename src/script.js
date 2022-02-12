jQuery(function ($) {
  $(window).on("load resize", function () {
    var pc_w = $(".pc .frame").width() / 1280;
    $(".pc iframe").css("transform", "scale(" + pc_w + ")");

    var tb_w = $(".tb .frame").width() / 768;
    $(".tb iframe").css("transform", "scale(" + tb_w + ")");

    var sp_w = $(".sp .frame").width() / 375;
    $(".sp iframe").css("transform", "scale(" + sp_w + ")");
  });
});
