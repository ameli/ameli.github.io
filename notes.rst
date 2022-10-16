======
Issues
======

* Adobe Embed API does not work on safari 12. It throws a `TypeError`.
  However, Adobe Embed API works on safari 13.

* In safari prior to version 15, the modal with id="pacificModal" does not have
  the correct aspect ratio. Namely, the embedded "vimeo video" inside the
  "iframe" inside the "modal-body" of the "modal" should have the property
  "aspect-ratio: 1920/882". However, the property "aspect-ratio" has not been
  introduced in safari prior to version 15. The workarounds (see @media {...}
  in main.css) do not work.

* In mobile view, the gallery and movie sections have awkward view where the
  content the aligned to the bottom of the view and the rest of the page view
  is empty black background.

* tooltip-slide class is a class that opens a preview of the first slide of the
  "Slides" links. The width of the tooltip is set to 450px and it opens the
  slides with centered horizontal alignment with respect to the anchor link.
  However, if the screen width is small and the anchor link is near the edge of
  the screen, the tooltip opens outside of the screen, hence it widens the
  screen, making the page to have horizontal scroll. To avoid this, either (1)
  make the width of the tooltip smaller than 450px, or (2) a better approach is
  to make the tooltip adjust its aliment to not always open centered. For
  instance, if the tooltip is near the right side of the window, it should open
  with left aliment toward the page body to not extend the right side of the
  window.

=====
Ideas
=====

* Create css variables for light and dark modes.
