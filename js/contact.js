const form = document.getElementById("contactForm");
const resultDiv = document.getElementById("formResult");
const resultText = document.getElementById("resultText");
const submitBtn = document.getElementById("submitBtn");

if (form && submitBtn) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    const label = submitBtn.querySelector("span:first-child");
    if (label) label.textContent = "Sending...";

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await response.json();

      resultDiv?.classList.remove("hidden");
      if (data.success) {
        if (resultText) {
          resultText.textContent = "✓ Message sent successfully!";
          resultText.className =
            "text-sm font-medium uppercase tracking-widest text-green-700";
        }
        form.reset();
      } else if (resultText) {
        resultText.textContent = "✗ Something went wrong. Please try again.";
        resultText.className =
          "text-sm font-medium uppercase tracking-widest text-red-600";
      }
    } catch {
      resultDiv?.classList.remove("hidden");
      if (resultText) {
        resultText.textContent = "✗ Network error. Please try again.";
        resultText.className =
          "text-sm font-medium uppercase tracking-widest text-red-600";
      }
    }

    submitBtn.disabled = false;
    if (label) label.textContent = "Send Message";

    setTimeout(() => resultDiv?.classList.add("hidden"), 5000);
  });
}

const messageField = document.getElementById("message");
if (messageField) {
  messageField.addEventListener("input", function autoResize() {
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 192) + "px";
    this.style.overflowY = this.scrollHeight > 192 ? "auto" : "hidden";
  });
}
