function charCountdown() {

  var e = {
    init: function () {
      e.remaining = e.max - $(e.obj).val().length, e.remaining > e.max && $(e.obj).val($(e.obj).val().substring(0, e.max)), $(e.obj).siblings(".remaining").html(e.remaining + " characters remaining");
    },
    max: null,
    remaining: null,
    obj: null
  };
  $(".countdown").each(function () {
    $(this).focus(function () {
      var t = $(this).attr("class");
      e.max = $(this).attr("maxlength"), e.obj = this, iCount = setInterval(e.init, 0);
    }).blur(function () {
      e.init(), clearInterval(iCount);
    });
  });

}

$(function() {
	charCountdown();
});
