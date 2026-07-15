(() => {
  "use strict";

  const form = document.querySelector("[data-demo-form]");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const successUrl = form.dataset.successUrl;

    if (!successUrl) {
      return;
    }

    // No FormData, fetch, storage or query string is created. The form is reset
    // before the browser opens the matching local success page.
    form.reset();
    window.location.assign(successUrl);
  });

  // HTML keeps every top-level fieldset disabled by default. Enabling happens
  // only after the non-serialising submit listener is installed, so a no-script
  // visit cannot send form values through the static fallback action.
  const gateNotice = document.querySelector("[data-js-gate-notice]");

  if (gateNotice) {
    gateNotice.hidden = true;
  }

  form.querySelectorAll(":scope > fieldset[disabled]").forEach((section) => {
    section.disabled = false;
  });
})();
