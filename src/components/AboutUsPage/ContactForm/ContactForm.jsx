import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./ContactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callAxiosApi, insertData, INQUIRY } from "../../../utils/api_utils";

const ContactForm = () => {
  const [loading, setLoading] = useState(false); // Initialize loading state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({}); // Validation errors state

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [id]: "", // Clear the error message for the changed field
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await callAxiosApi(insertData, {
        table: INQUIRY,
        fullname: formData.fullName,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        TEXT: formData.message,
      });

      if (response.data.errorStatus === false) {
        // Handle successful submission
        console.log("Form submitted successfully:", response.data);
        setLoading(false);

        toast.success("inquiry data inserted successful!");

        // Optionally reset the form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("API Error:", response.data.msg);
        setLoading(false);
      toast.error("Something went wrong !");

      }
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
      toast.error("Something went wrong !");

    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className={styles.input}
            placeholder="Your full name here"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="info@profitbuddy.in"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className={styles.input}
            placeholder="Your company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className={styles.input}
            placeholder="How can we help"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className={styles.error}>{errors.subject}</p>}
        </div>
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label} htmlFor="message">Leave Us A Message</label>
          <textarea
            id="message"
            className={styles.textarea}
            placeholder="Please type your comments..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
