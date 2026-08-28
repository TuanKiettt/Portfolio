import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="contact-details card-border rounded-3xl h-full min-h-96 p-8 md:p-12 flex flex-col justify-center overflow-hidden">
              <div className="relative z-10">
                <p className="text-[#cd7c2e] text-sm uppercase tracking-[0.25em] mb-4">
                  Contact details
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                  Let&apos;s build something useful.
                </h3>
                <p className="text-white-50 max-w-xl mb-10">
                  Have a project in mind? Reach out directly and let&apos;s start
                  a conversation.
                </p>

                <address className="not-italic flex flex-col gap-4">
                  <a
                    href="tel:+84976365791"
                    className="contact-link group"
                  >
                    <span className="contact-icon">
                      <Phone size={22} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">+84 976 365 791</span>
                    </span>
                    <ArrowUpRight className="contact-arrow" size={20} />
                  </a>

                  <a
                    href="mailto:ntkiet.work@gmail.com"
                    className="contact-link group"
                  >
                    <span className="contact-icon">
                      <Mail size={22} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="contact-label">Email</span>
                      <span className="contact-value break-all">
                        ntkiet.work@gmail.com
                      </span>
                    </span>
                    <ArrowUpRight className="contact-arrow" size={20} />
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
