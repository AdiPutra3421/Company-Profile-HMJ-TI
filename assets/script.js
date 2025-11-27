$(document).ready(function () {
  const $carousel = $("#info-carousel");
  const $items = $(".carousel-item");
  const $prev = $("#prev-btn");
  const $next = $("#next-btn");

  const ITEM_WIDTH = 300;
  const GAP = 20;
  const MOVE = ITEM_WIDTH + GAP;
  let index = 0;

  function updateCarousel() {
    $carousel.css({
      transition: "transform 0.5s cubic-bezier(0.22,0.61,0.36,1)",
      transform: `translateX(${-index * MOVE}px)`,
    });
  }

  $next.on("click", () => {
    index = (index + 1) % 3;
    updateCarousel();
  });

  $prev.on("click", () => {
    index = (index - 1 + 3) % 3;
    updateCarousel();
  });

  // Auto
  setInterval(() => $next.click(), 4000);
});

$(document).ready(function () {
  let timeout;

  $(".dropdown").each(function () {
    const $dropdown = $(this);
    const $menu = $dropdown.find(".dropdown-menu");

    // Hover masuk ke trigger (navbar item)
    $dropdown.on("mouseenter", function () {
      clearTimeout(timeout);
      $menu.addClass("show");
    });

    // Hover keluar dari trigger
    $dropdown.on("mouseleave", function (e) {
      const related = e.relatedTarget;
      // Cek: apakah mouse langsung masuk ke dropdown?
      if ($menu.is(related) || $menu.has(related).length) return;

      // Kalau nggak, hide setelah delay
      timeout = setTimeout(() => $menu.removeClass("show"), 0);
    });

    // Hover masuk/luar dropdown
    $menu
      .on("mouseenter", () => clearTimeout(timeout))
      .on("mouseleave", (e) => {
        const related = e.relatedTarget;
        if ($dropdown.is(related) || $dropdown.has(related).length) return;
        timeout = setTimeout(() => $menu.removeClass("show"), 150);
      });
  });
});
