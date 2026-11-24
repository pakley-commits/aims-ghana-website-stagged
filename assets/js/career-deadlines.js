/*
  Career card deadlines.

  Hugo decides open/closed at build time, so a page served after its deadline
  passes would still show "Apply Now" until the next build. This re-checks each
  card against the browser clock on load and once a minute after that.
*/
(function () {
  function sync() {
    var now = Date.now();

    document.querySelectorAll(".career-card[data-closes-at]").forEach(function (card) {
      var closesAt = Date.parse(card.getAttribute("data-closes-at"));
      if (isNaN(closesAt)) return;

      var closed = now > closesAt;
      var apply = card.querySelector(".career-card__btn--primary");
      var shut = card.querySelector(".career-card__btn--closed");

      card.classList.toggle("career-card--closed", closed);
      if (apply) apply.hidden = closed;
      if (shut) shut.hidden = !closed;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sync);
  } else {
    sync();
  }

  setInterval(sync, 60000);
})();
