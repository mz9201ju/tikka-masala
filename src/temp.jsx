import biryani from "./assets/biryani.jpg";
import chaat from "./assets/chaat.jpg";
import kabab from "./assets/kabab.jpg";
import karahi from "./assets/karahi.jpg";
import tikka from "./assets/tikka.jpg";

import { useState } from "react";
import "./App.css";
import logo from "./assets/tikka-logo.jpg"; // ← put your logo file here

const MENU = [
  {
    id: 1,
    name: "Chicken Tikka Masala",
    desc: "Charcoal-grilled chicken in creamy tomato masala.",
    price: 16.99,
    tag: "Most Popular",
    category: "Curries",
    image: tikka,
  },
  {
    id: 2,
    name: "Lahori Chargha",
    desc: "Whole chicken, deep marinated with Lahori spices.",
    price: 24.99,
    category: "BBQ & Grill",
    image: tikka, // reuse if needed
  },
  {
    id: 3,
    name: "Beef Seekh Kabab Plate",
    desc: "Juicy seekh kababs with naan, raita & salad.",
    price: 17.49,
    category: "BBQ & Grill",
    image: kabab,
  },
  {
    id: 4,
    name: "Chicken Biryani",
    desc: "Hyderabadi-style dum biryani, raita on the side.",
    price: 15.49,
    category: "Biryani & Rice",
    image: biryani,
  },
  {
    id: 5,
    name: "Karahi Gosht",
    desc: "Traditional wok-cooked mutton with tomatoes & green chilli.",
    price: 21.99,
    category: "Karahi Specials",
    image: karahi,
  },
  {
    id: 6,
    name: "Chana Chaat",
    desc: "Street-style chickpea chaat with imli & chutneys.",
    price: 9.99,
    category: "Street Food",
    image: chaat,
  },
  {
    id: 7,
    name: "Gol Gappay Platter",
    desc: "Crispy puris with spicy pani & meethi chutney.",
    price: 10.99,
    category: "Street Food",
    image: chaat, // reuse
  },
  {
    id: 8,
    name: "Kids Butter Chicken & Rice",
    desc: "Mild butter chicken with fluffy basmati rice.",
    price: 11.99,
    category: "Kids Menu",
    image: biryani, // reuse
  },
];

function App() {
  const [cart, setCart] = useState([]);

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
            <p className="tm-badge">100% Zabiha Halal · Family Owned</p>
            <h2 className="tm-hero-title">
              Taste of Karachi,
              <span> in Every Bite.</span>
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
                <a href="#!" className="tm-delivery-btn uber">
                  UberEats (coming soon)
                </a>
                <a href="#!" className="tm-delivery-btn doordash">
                  DoorDash (coming soon)
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

        <div className="tm-services-grid">
          <div className="tm-service-card">
            <h3>Dine-In Experience</h3>
            <p>
              Cozy seating with Pakistani-inspired decor, naat/soft music, and
              chai always on deck.
            </p>
          </div>
          <div className="tm-service-card">
            <h3>Takeout &amp; Curbside</h3>
            <p>
              Order ahead, swing by, and we’ll hand off hot, sealed, halal
              goodness – no queue, no drama.
            </p>
          </div>
          <div className="tm-service-card">
            <h3>Family &amp; Party Trays</h3>
            <p>
              Biryani, karahi, kabab platters and dessert trays for 10–100
              guests. Perfect for daawats and Eid.
            </p>
          </div>
          <div className="tm-service-card">
            <h3>Catering &amp; Corporate</h3>
            <p>
              Office lunches, masjid events, weddings – full-service catering
              with chafing dishes &amp; staff.
            </p>
          </div>
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
                            Add to Cart
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
          <aside className="tm-cart">
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
                    <p className="tm-cart-partners-label">
                      Soon you&apos;ll be able to complete this order via:
                    </p>
                    <div className="tm-delivery-buttons vertical">
                      <a href="#!" className="tm-delivery-btn uber">
                        UberEats
                      </a>
                      <a href="#!" className="tm-delivery-btn doordash">
                        DoorDash
                      </a>
                      <a href="#!" className="tm-delivery-btn grubhub">
                        Grubhub
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="tm-section tm-section-footer">
        <div className="tm-footer-grid">
          <div>
            <h3>Visit Tikka Masala</h3>
            <p>
              (Your Address Here)
              <br />
              Seattle, WA
            </p>
            <p>
              Phone: <a href="tel:+12065550123">+1 (206) 555-0123</a>
              <br />
              WhatsApp: <a href="https://wa.me/12065550123">Chat on WhatsApp</a>
            </p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>
              Mon–Thu: 11:00 AM – 10:00 PM
              <br />
              Fri–Sun: 11:00 AM – 11:30 PM
            </p>
            <p>Jummah break accommodated · Prayer space on request.</p>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <p>Instagram · TikTok · Facebook (links go here)</p>
            <p className="tm-footer-note">
              Designed with ❤️ and desi chai energy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
