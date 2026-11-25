

import React, { useEffect, useState } from "react";
import "./Popup.css";
import logo from "../../assets/logo.png";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Show popup after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !popupShown) {
        setShowPopup(true);
        setPopupShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupShown]);

  // Auto close popup after 6 seconds
  useEffect(() => {
    if (!showPopup || isFilling || isSubmitting) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [showPopup, isFilling, isSubmitting]);

  // Hide success notification after 4 seconds
  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showSuccess]);

  // Submit form using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    // Web3Forms Access Key
    formData.append("access_key", "c9ae9c54-fe80-41bd-9b0a-06c00131cb47");

    formData.append("subject", "New Website Enquiry");
    formData.append("from_name", "Website Enquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        e.currentTarget.reset();

        setIsFilling(false);
        setShowPopup(false);
        setShowSuccess(true);
      } else {
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("Unable to submit your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* LEAD POPUP */}
      {showPopup && (
        <div className="lead-popup-overlay">
          <div className="lead-popup">

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="lead-popup-close"
              onClick={() => {
                setShowPopup(false);
                setIsFilling(false);
              }}
              aria-label="Close popup"
            >
              &times;
            </button>

            {/* HEADER */}
            <div className="lead-popup-header">
              <img
                src={logo}
                alt="Company Logo"
                className="lead-popup-logo"
              />

              <h2>Let's Grow Together!</h2>

              <p>
                Tell us about your project.
                Our team will contact you soon.
              </p>
            </div>

            {/* FORM */}
            <form
              onFocus={() => setIsFilling(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsFilling(false);
                }
              }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                maxLength="10"
                title="Please enter a valid 10-digit phone number"
                required
              />

              <textarea
                name="requirement"
                placeholder="Tell us about your requirement..."
                rows="4"
                required
              />

              {errorMessage && (
                <p className="popup-error">
                  {errorMessage}
                </p>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Enquiry →"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SUCCESS NOTIFICATION */}
      {showSuccess && (
        <div className="lead-success-toast">
          <div className="success-icon">✓</div>

          <div className="success-message">
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully.</p>
          </div>

          <button
            type="button"
            className="success-close"
            onClick={() => setShowSuccess(false)}
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Popup;
