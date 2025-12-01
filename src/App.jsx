import { useState } from "react";
import "./App.css";
import logo from "./assets/tikka-logo.jpg"; // ← put your logo file here
import MENU from "./Menu"



function App() {
  const [cart, setCart] = useState([]);
  const [showContactBanner, setShowContactBanner] = useState(false);
  const cartRef = useState(null);

  // ✅ helper to show count on menu button
  const getItemQty = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    alert(
      "Checkout placeholder\n\nThis is where we’ll integrate UberEats, DoorDash, and direct online ordering."
    );
  };

  const categories = [...new Set(MENU.map((m) => m.category))];

  return (
    <div className="tm-app">
      {/* NAVBAR */}
      <header className="tm-nav">
        <div className="tm-nav-inner">
          <div className="tm-nav-left">
            {/* ✅ LOGO NOW LINKS TO #home */}
            <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={logo} alt="Tikka Masala logo" className="tm-logo" />
              <div>
                <h1 className="tm-brand">Tikka Masala</h1>
                <p className="tm-tagline">
                  Halal Pakistani Kitchen ·{" "}
                  <span className="tm-tagline-urdu">
                    حلال پاکستانی ذائقہ
                  </span>
                </p>
              </div>
            </a>
          </div>

          <nav className="tm-nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>


      {/* HERO / HOME */}
      <section id="home" className="tm-hero">
        <div className="tm-hero-grid">
          <div className="tm-hero-text">
            <h2 className="tm-hero-title">
              Authentic Indian & Pakistani Cuisine
              <span>🇮🇳🇵🇰</span>
              <p className="tm-badge">100% Zabiha Halal · Family Owned</p>
            </h2>
            <p className="tm-hero-subtitle">
              Fresh naan, smoky BBQ, street food nostalgia and comfort curries –
              crafted with Pakistani soul and Seattle freshness.
            </p>

            <div className="tm-hero-ctas">
              <button
                className="tm-btn tm-btn-primary"
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Menu &amp; Add to Cart
              </button>
              <button
                className="tm-btn tm-btn-ghost"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Catering &amp; Events
              </button>
            </div>

            <div className="tm-delivery-strip">
              <span className="tm-strip-label">Order on:</span>
              <div className="tm-delivery-buttons">
                <a href="https://www.ubereats.com/store/tikka-masala/HL0YuQONTPaJQqFc9Ueiyw?undefined=open-modal&msockid=16497b4a29ef6b921e136dd028c26ae8" className="tm-delivery-btn uber">
                  UberEats
                </a>
                <a href="https://www.doordash.com/store/tikkamasala-bellevue-2474911/2494193/?msockid=16497b4a29ef6b921e136dd028c26ae8" className="tm-delivery-btn doordash">
                  DoorDash
                </a>
                <a href="#!" className="tm-delivery-btn grubhub">
                  Grubhub (coming soon)
                </a>
              </div>
            </div>
          </div>

          <div className="tm-hero-card">
            <div className="tm-hero-logo-ring">
              <img
                src={logo}
                alt="Tikka Masala mandala logo"
                className="tm-hero-logo-img"
              />
            </div>
            <p className="tm-hero-card-text">
              Inspired by Pakistani truck art and Mughal patterns, our kitchen
              is all about bold colors, big flavor, and proper chai.
            </p>
            <ul className="tm-hero-list">
              <li>🔥 Live karahi &amp; BBQ nights</li>
              <li>🍛 Desi breakfast on weekends</li>
              <li>👨‍👩‍👧 Family-friendly, kids welcome</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="tm-section tm-section-pattern">
        <div className="tm-section-header">
          <h2>Services</h2>
          <p>Halal food for every moment – from quick lunch to full shaadi menu.</p>
        </div>

        {/* ✅ GLOBAL FIXED BANNER (IMPOSSIBLE TO MISS) */}
        {showContactBanner && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#000",
              color: "#d4af37",
              padding: "14px 20px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "1rem",
              zIndex: 9999,
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            }}
          >
            📞 Please contact us at (425) 502-8100
          </div>
        )}

        <div className="tm-services-grid">
          {[
            {
              title: "Dine-In Experience",
              desc: "Cozy seating with Pakistani-inspired decor, naat/soft music, and chai always on deck.",
            },
            {
              title: "Takeout & Curbside",
              desc: "Order ahead, swing by, and we’ll hand off hot, sealed, halal goodness – no queue, no drama.",
            },
            {
              title: "Family & Party Trays",
              desc: "Biryani, karahi, kabab platters and dessert trays for 10–100 guests. Perfect for daawats and Eid.",
            },
            {
              title: "Catering & Corporate",
              desc: "Office lunches, masjid events, weddings – full-service catering with chafing dishes & staff.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="tm-service-card"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowContactBanner(true);

                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });

                setTimeout(() => {
                  setShowContactBanner(false);
                }, 3000);
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU + CART */}
      <section id="menu" className="tm-section">
        <div className="tm-section-header">
          <h2>Menu &amp; Cart</h2>
          <p>Pick your favorites – the cart updates in real time.</p>
        </div>

        <div className="tm-menu-layout">
          {/* MENU LIST */}
          <div className="tm-menu-list">
            {categories.map((cat) => (
              <div key={cat} className="tm-menu-category">
                <h3 className="tm-menu-category-title">{cat}</h3>
                <div className="tm-menu-items">
                  {MENU.filter((m) => m.category === cat).map((item) => (
                    <article key={item.id} className="tm-menu-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="tm-menu-image"
                      />
                      <div className="tm-menu-item-main">
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                          {item.tag && (
                            <span className="tm-chip tm-chip-popular">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <div className="tm-menu-item-side">
                          <span className="tm-price">
                            ${item.price.toFixed(2)}
                          </span>
                          <button
                            className="tm-btn tm-btn-sm"
                            onClick={() => addToCart(item)}
                          >
                            {getItemQty(item.id) > 0
                              ? `Add (${getItemQty(item.id)})`
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CART */}
          <aside ref={cartRef} className="tm-cart">
            <h3>Your Cart</h3>
            {cart.length === 0 ? (
              <p className="tm-cart-empty">
                No items yet. Start by adding a biryani, karahi, or BBQ plate.
              </p>
            ) : (
              <>
                <ul className="tm-cart-list">
                  {cart.map((item) => (
                    <li key={item.id} className="tm-cart-item">
                      <div className="tm-cart-item-main">
                        <strong>{item.name}</strong>
                        <span className="tm-cart-price">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="tm-cart-controls">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="tm-qty-btn"
                        >
                          −
                        </button>
                        <span className="tm-qty">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="tm-qty-btn"
                        >
                          +
                        </button>
                        <span className="tm-cart-subtotal">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="tm-cart-footer">
                  <div className="tm-cart-total-row">
                    <span>Total</span>
                    <span className="tm-cart-total">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="tm-btn tm-btn-primary tm-btn-full"
                    onClick={handleCheckout}
                  >
                    Checkout (Placeholder)
                  </button>
                  <button
                    className="tm-btn tm-btn-ghost tm-btn-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                  <div className="tm-cart-partners">
                    <div className="tm-delivery-buttons vertical">
                      <a href="https://www.ubereats.com/store/tikka-masala/HL0YuQONTPaJQqFc9Ueiyw?undefined=open-modal&msockid=16497b4a29ef6b921e136dd028c26ae8" className="tm-delivery-btn uber">
                        UberEats
                      </a>
                      <a href="https://www.doordash.com/store/tikkamasala-bellevue-2474911/2494193/?msockid=16497b4a29ef6b921e136dd028c26ae8" className="tm-delivery-btn doordash">
                        DoorDash
                      </a>
                      <a href="#!" className="tm-delivery-btn grubhub">
                        Grubhub (coming soon)
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>
        {cart.length > 0 && (
          <button
            onClick={() => cartRef.current?.scrollIntoView({ behavior: "smooth" })}
            style={{
              position: "fixed",
              left: "16px",
              bottom: "20px",
              zIndex: 9999,
              background: "#000",
              color: "#d4af37",
              padding: "14px 18px",
              borderRadius: "999px",
              fontWeight: "800",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              border: "2px solid #d4af37",
              cursor: "pointer",
            }}
          >
            🛒 {cart.reduce((s, i) => s + i.qty, 0)} • Checkout
          </button>
        )}
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="tm-section tm-section-footer">
        <div className="tm-footer-grid">
          {/* LOCATION + MAP */}
          <div>
            <h3>Visit Tikka Masala</h3>

            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1624+145th+Pl+SE+Bellevue+WA+98007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                1624 145th PL SE
                <br />
                Bellevue, WA 98007
              </a>
            </p>

            {/* ✅ LIVE GOOGLE MAP */}
            <div style={{ marginTop: "12px", borderRadius: "12px", overflow: "hidden" }}>
              <iframe
                title="Tikka Masala Location"
                src="https://www.google.com/maps?q=1624+145th+PL+SE+Bellevue+WA+98007&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* ✅ BIG, CLEAR, CLICKABLE PHONE */}
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                borderRadius: "10px",
                background: "#000",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "1.2rem",
              }}
            >
              <a
                href="tel:+14255028100"
                style={{
                  color: "#d4af37", // gold accent
                  textDecoration: "none",
                  letterSpacing: "1px",
                }}
              >
                📞 Call Now: (425) 502-8100
              </a>
            </div>
          </div>

          {/* HOURS */}
          <div>
            <h3>Hours</h3>
            <p>
              Mon–Thu: 11:00 AM – 09:00 PM
              <br />
              Fri–Sun: 11:00 AM – 09:00 PM
            </p>
            <p>Jummah break accommodated · Prayer space on request.</p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3>Stay Connected</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* ✅ INSTAGRAM */}
              <a
                href="https://www.instagram.com/tikkamasalabellevue"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E1306C">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
                  <circle cx="12" cy="12" r="3.5" fill="#fff" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
                </svg>
                Instagram
              </a>

              {/* ✅ FACEBOOK */}
              <a
                href="https://www.facebook.com/tikkamasalabellevue"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                </svg>
                Facebook
              </a>
            </div>

            <p className="tm-footer-note" style={{ marginTop: "12px" }}>
              Designed with ❤️ and desi chai energy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
