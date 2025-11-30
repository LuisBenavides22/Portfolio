// Buttons
const submitBTN = document.getElementById("submitBTN");
const shieldedBTN = document.getElementById("shieldedBTN");
const bnyBTN = document.getElementById("bnyBTN");
const uhdBTN = document.getElementById("uhdBTN");
const cohBTN = document.getElementById("cohBTN");

let messageTimer;
let activeHoverTimer = null;

// Go to Website 
function toWebsite(element, url) {
  element.onclick = function () {
    clearTimeout(messageTimer);
    clearTimeout(activeHoverTimer);
    window.open(url, "_blank");
  };
}

// Hover Alert 
function hoverAlert(element) {
  let hoverTimer;

  element.addEventListener("mouseover", function () {
    hoverTimer = setTimeout(function () {
      alert("Click experience card to go to company page!");
    }, 2000);

    activeHoverTimer = hoverTimer;
  });

  element.addEventListener("mouseout", function () {
    clearTimeout(hoverTimer);
  });
}

// Reset hover timer when user returns 
window.addEventListener("focus", function () {
  clearTimeout(activeHoverTimer);
});

// Submit Button Hover 
submitBTN.addEventListener("mouseover", function () {
  submitBTN.textContent = "Press to Submit!";
});

submitBTN.addEventListener("mouseout", function () {
  clearTimeout(messageTimer);

  messageTimer = setTimeout(function () {
    submitBTN.textContent = "Send Message";
  }, 500);
});

// Website Links
toWebsite(shieldedBTN,"https://www.shieldedhaven.com");
toWebsite(bnyBTN, "https://www.bny.com/corporate/global/en.html");
toWebsite(uhdBTN, "https://www.uhd.edu/sssl/student-life/gator-resource-center/index.aspx");
toWebsite(cohBTN, "https://www.houstontx.gov");


// Hover Alerts
hoverAlert(shieldedBTN);
hoverAlert(bnyBTN);
hoverAlert(uhdBTN);
hoverAlert(cohBTN);