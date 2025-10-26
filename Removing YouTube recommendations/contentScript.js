// Removes all elements by selector
function removeElements(selector) {
  document.querySelectorAll(selector).forEach(el => el.remove());
}

// The main function of cleaning
function cleanYouTube() {
  // Removes recommendations at the end of videos
  removeElements('.ytp-fullscreen-grid-main-content');

  // Removes a specific button with the listed classes.
  removeElements(
    '.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--size-xs.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--enable-backdrop-filter-experiment'
  );
}

// Starts cleaning
cleanYouTube();

// Monitors dynamic DOM changes (YouTube is constantly updating)
const observer = new MutationObserver(() => cleanYouTube());
observer.observe(document.body, { childList: true, subtree: true });