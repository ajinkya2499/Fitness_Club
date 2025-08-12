import { FaFacebookF, FaInstagram, FaTimes, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import LOGO from '../../assets/Images/icons8-zendesk-100.png'

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0d14", color: "#fff", padding: "3rem 2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Logo Section */}
        <div>
          <img src={LOGO} alt="logo image" />
          <h2 style={{ color: "#fdd835", fontWeight: "bold" }}>The<span style={{ color: "#fff" }}>FitFlex</span></h2>
        </div>

        {/* Menu */}
        <div>
          <h4 style={{ color: "#f8f8d0", marginBottom: "1rem" }}>Menu</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing Plans</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: "#f8f8d0", marginBottom: "1rem" }}>Our Services</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>Personal Training</li>
            <li>Group Training</li>
            <li>Nutrition Counseling</li>
            <li>Online Coaching</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#f8f8d0", marginBottom: "1rem" }}>Contact Us</h4>
          <p><FaPhoneAlt style={{ color: "#fdd835" }} /> +0 123 45678</p>
          <p><FaEnvelope style={{ color: "#fdd835" }} /> TheFitFlex@domain.com</p>

          {/* Newsletter */}
          <h4 style={{ color: "#f8f8d0", margin: "1.5rem 0 0.5rem" }}>Our Newsletter</h4>
          <p>Be the <strong>first to know</strong> about new classes, perks, and promos.</p>
          <div style={{ display: "flex", border: "1px solid #fdd835", borderRadius: "4px", overflow: "hidden", marginTop: "0.5rem" }}>
            <input type="email" placeholder="Enter Your Email" style={{ flex: 1, padding: "0.5rem", border: "none", outline: "none" }} />
            <button style={{ background: "#fdd835", color: "#000", padding: "0 1rem", border: "none", cursor: "pointer" }}>➤</button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{ borderTop: "1px solid #444", marginTop: "2rem", paddingTop: "1rem", textAlign: "center" }}>
        <p style={{ marginBottom: "1rem" }}>© 2025 Thanksfortoday. All Rights Reserved.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", fontSize: "1.2rem" }}>
          <FaFacebookF />
          <FaInstagram />
          <FaTimes />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
