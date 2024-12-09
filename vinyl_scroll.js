const slideshow_container = document.getElementById("slideshow-container")
const album_title_text = document.getElementById("slideshow-text");

// This handler will be executed only once when the cursor
// moves over the unordered list


// This handler will be executed every time the cursor
// is moved over a different list item
slideshow_container.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    hovered_alt = event.target.getAttribute("alt");

    album_title_text.innerText = hovered_alt;
  },
  false,
);

slideshow_container.addEventListener(
    "mouseout",
    (event) => {
        album_title_text.innerHTML = "&nbsp";
    },
    false,
  );