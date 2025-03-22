/*
 *
 * Smooth Scroll to Anchors
 * */
const offsetTopScroll = 80;

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
    link.addEventListener("click", (e) => {
      console.log("clicked");

      e.preventDefault();
      const href = link.getAttribute("href");

      console.log(href);

      target = document.getElementById(href.replace("#", ""));
      if (target) {
        window.scroll({
          top: target.offsetTop - offsetTopScroll,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  });
}
/*
 *
 * END: Smooth Scroll to Anchors
 * */

/**
 * Greeting
 */

const greetings = ["Salaam", "Greetings", "Bonjour", "Namaste", "Ola"];
const greeting = document.getElementById("greeting");
let greetIndex = 0;

greeting.addEventListener("click", () => {
  greetIndex = greetIndex >= greetings.length - 1 ? 0 : greetIndex + 1;
  greeting.innerText = greetings[greetIndex];
});
