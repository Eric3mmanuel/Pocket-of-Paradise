// Initialize EmailJS
emailjs.init("QOwNJpiLjXIA9md_b");

// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bookingForm");

  if (!form) return; // safety check

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send(
      "service_v5cdgnj",
      "template_gukob4t",
      {
        name: form.name.value,
        email: form.email.value,
        destination: form.destination.value,
        from_date: form.from_date.value,
        to_date: form.to_date.value,
        people: form.people.value,
        message: form.message.value
      }
    )
    .then(() => {
      alert("Booking received! We have emailed you.");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    });
  });

});