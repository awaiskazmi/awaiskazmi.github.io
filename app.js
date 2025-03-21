/*
 *
 * Smooth Scroll to Anchors
 * */
const offsetTopScroll = 160;

//Smooth scroll on page load if anchor is in URL
if (window.location.hash) {
  const hash = window.location.hash;
  const target = document.getElementById(hash.replace("#", ""));
  if (target) {
    //first scroll to top because browser bounced to anchor at load
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    window.scroll({
      top: target.offsetTop - offsetTopScroll,
      left: 0,
      behavior: "smooth",
    });
  }
}

//Smooth scroll to anchor when clicking on a link with #hash
const anchorLinks = document.querySelectorAll('a[href*="#"]');
//get site domain
const domain = window.location.hostname;
if (anchorLinks) {
  anchorLinks.forEach((link) => {
    const hostname = link.getAttribute("href").split("/")[2];
    //check if link is to current site
    if (hostname && hostname === domain) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const url = new URL(href);
        target = document.getElementById(url.hash.replace("#", ""));
        if (target) {
          window.scroll({
            top: target.offsetTop - offsetTopScroll,
            left: 0,
            behavior: "smooth",
          });
          //Update URL with hash because e.preventDefault() prevents default browser behavior
          history.pushState({}, "", url);
        }
      });
    }
  });
}
/*
 *
 * END: Smooth Scroll to Anchors
 * */
