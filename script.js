// ====== DATA ======
const products = [
  {
    id: 1,
    name: "Velvet Cloud Sofa",
    cat: "Living Room",
    price: 45999,
    oldPrice: 59999,
    rating: 4.9,
    reviews: 234,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
    badge: "Best Seller",
    isNew: false,
  },
  {
    id: 2,
    name: "Royal Oak Bed Frame",
    cat: "Bedroom",
    price: 38500,
    oldPrice: 48000,
    rating: 4.8,
    reviews: 187,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80",
    badge: "Sale",
    isNew: false,
  },
  {
    id: 3,
    name: "Marble Top Dining Table",
    cat: "Dining",
    price: 52000,
    oldPrice: null,
    rating: 4.7,
    reviews: 95,
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80",
    badge: "New",
    isNew: true,
  },
  {
    id: 4,
    name: "Executive Work Desk",
    cat: "Office",
    price: 18999,
    oldPrice: 24999,
    rating: 4.6,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",
    badge: "Sale",
    isNew: false,
  },
  {
    id: 5,
    name: "Rattan Garden Chair",
    cat: "Outdoor",
    price: 8499,
    oldPrice: 10999,
    rating: 4.5,
    reviews: 143,
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80",
    badge: null,
    isNew: false,
  },
  {
    id: 6,
    name: "Floating Bookshelf",
    cat: "Living Room",
    price: 12500,
    oldPrice: null,
    rating: 4.8,
    reviews: 76,
    img: "https://images.unsplash.com/photo-1588279102819-c9a8b8f7e0d9?w=500&q=80",
    badge: "New",
    isNew: true,
  },
  {
    id: 7,
    name: "Zen Platform Bed",
    cat: "Bedroom",
    price: 29999,
    oldPrice: 36000,
    rating: 4.9,
    reviews: 201,
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80",
    badge: "Best Seller",
    isNew: false,
  },
  {
    id: 8,
    name: "Teak Wood Coffee Table",
    cat: "Living Room",
    price: 16800,
    oldPrice: 21000,
    rating: 4.7,
    reviews: 158,
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80",
    badge: "Sale",
    isNew: false,
  },
  {
    id: 9,
    name: "Ergonomic Study Chair",
    cat: "Office",
    price: 9999,
    oldPrice: 13999,
    rating: 4.6,
    reviews: 420,
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80",
    badge: "Sale",
    isNew: false,
  },
  {
    id: 10,
    name: "Kids Bunk Bed",
    cat: "Bedroom",
    price: 24500,
    oldPrice: 30000,
    rating: 4.8,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    badge: null,
    isNew: false,
  },
  {
    id: 11,
    name: "Folding Dining Set",
    cat: "Dining",
    price: 21000,
    oldPrice: null,
    rating: 4.5,
    reviews: 63,
    img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&q=80",
    badge: "New",
    isNew: true,
  },
  {
    id: 12,
    name: "Hammock Swing",
    cat: "Outdoor",
    price: 6999,
    oldPrice: 8999,
    rating: 4.4,
    reviews: 110,
    img: "https://images.unsplash.com/photo-1520174691701-7b8f2eb3df0d?w=500&q=80",
    badge: "Sale",
    isNew: false,
  },
];

const categories = [
  {
    name: "Living Room",
    icon: "🛋️",
    count: 68,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80",
  },
  {
    name: "Bedroom",
    icon: "🛏️",
    count: 52,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=80",
  },
  {
    name: "Dining",
    icon: "🍽️",
    count: 35,
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300&q=80",
  },
  {
    name: "Office",
    icon: "💼",
    count: 44,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&q=80",
  },
  {
    name: "Outdoor",
    icon: "🌿",
    count: 28,
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&q=80",
  },
  {
    name: "Kids",
    icon: "🎨",
    count: 21,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  },
];

const testimonials = [
  {
    name: "Priya Mehta",
    loc: "Ahmedabad",
    stars: 5,
    text: "Absolutely love my new sofa! The quality is outstanding and delivery was super fast. LuxeFurnish has become my go-to for all home furniture.",
  },
  {
    name: "Rohan Verma",
    loc: "Mumbai",
    stars: 5,
    text: "The office desk is solid and beautifully crafted. Assembly team came on time and set everything up. Highly recommend!",
  },
  {
    name: "Ananya Sharma",
    loc: "Bangalore",
    stars: 5,
    text: "Ordered the bedroom set and it exceeded all my expectations. Great quality, reasonable prices, and excellent customer service.",
  },
];

let cart = JSON.parse(localStorage.getItem("lf-cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("lf-wishlist") || "[]");
let checkoutStep = 1;
let selectedPayment = "upi";
let activeCategory = "all";

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  loadCustomImages();
  renderCategories();
  renderProducts(products);
  renderTestimonials();
  updateCartUI();
  setupScrollReveal();
  window.addEventListener("scroll", () => {
    document
      .getElementById("navbar")
      .classList.toggle("scrolled", window.scrollY > 10);
  });
});

// ====== CATEGORIES ======
function renderCategories() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = categories
    .map(
      (c) => `
    <div class="category-card${activeCategory === c.name ? " active" : ""}" onclick="filterByCategory('${c.name}')" style="overflow:hidden;position:relative;padding:0;min-height:160px;">
      <img src="${c.img}" alt="${c.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.22;border-radius:18px;">
      <div style="position:relative;z-index:1;padding:2rem 1.5rem;text-align:center;">
        <div class="cat-icon">${c.icon}</div>
        <div class="cat-name">${c.name}</div>
        <div class="cat-count">${c.count} items</div>
      </div>
    </div>
  `,
    )
    .join("");
}

function filterByCategory(name) {
  activeCategory = activeCategory === name ? "all" : name;
  renderCategories();
  document.getElementById("cat-filter").value =
    activeCategory === "all" ? "all" : name;
  filterProducts();
  scrollTo("#products");
}

// ====== PRODUCTS ======
function renderProducts(list) {
  const grid = document.getElementById("products-grid");
  if (!list.length) {
    grid.innerHTML =
      '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);">No products found 😔</div>';
    return;
  }
  grid.innerHTML = list
    .map(
      (p) => `
    <div class="product-card" id="pc-${p.id}">
      <div class="product-img" style="padding:0;background:#f0ebe3;overflow:hidden;">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span style="display:none;font-size:3.5rem;width:100%;height:100%;align-items:center;justify-content:center;">🛋️</span>
        ${p.badge ? `<div class="product-badge${p.badge === "Sale" ? " sale" : p.badge === "New" ? " new" : ""}">${p.badge}</div>` : ""}
        <button class="wishlist-btn${wishlist.includes(p.id) ? " active" : ""}" onclick="toggleWishlist(${p.id},this)" title="Add to Wishlist">
          ${wishlist.includes(p.id) ? "❤️" : "🤍"}
        </button>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${"★".repeat(Math.floor(p.rating))}${p.rating % 1 ? "½" : ""}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">₹${p.price.toLocaleString("en-IN")}</span>
            ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice.toLocaleString("en-IN")}</span>` : ""}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">+ Cart</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function filterProducts() {
  const search = document.getElementById("search-input").value.toLowerCase();
  const sort = document.getElementById("sort-select").value;
  const cat = document.getElementById("cat-filter").value;

  let filtered = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search) ||
      p.cat.toLowerCase().includes(search);
    const matchCat = cat === "all" || p.cat === cat;
    return matchSearch && matchCat;
  });

  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === "newest")
    filtered = filtered
      .filter((p) => p.isNew)
      .concat(filtered.filter((p) => !p.isNew));

  renderProducts(filtered);
}

// ====== CART ======
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existing = cart.find((c) => c.id === id);
  if (existing) existing.qty++;
  else
    cart.push({
      id,
      name: product.name,
      cat: product.cat,
      img: product.img,
      price: product.price,
      qty: 1,
    });
  saveCart();
  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else {
    saveCart();
    updateCartUI();
    renderCartItems();
  }
}

function saveCart() {
  localStorage.setItem("lf-cart", JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById("cart-count").textContent = count;
}

function renderCartItems() {
  const list = document.getElementById("cart-items-list");
  const footer = document.getElementById("cart-footer");
  if (!cart.length) {
    list.innerHTML =
      '<div class="cart-empty"><div class="empty-icon">🛒</div><p>Your cart is empty</p><br><button class="btn-primary" onclick="closeCart()">Browse Products</button></div>';
    footer.style.display = "none";
    return;
  }
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  list.innerHTML = cart
    .map(
      (c) => `
    <div class="cart-item">
      <div class="ci-img" style="padding:0;overflow:hidden;">
        <img src="${c.img}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" onerror="this.style.display='none'">
      </div>
      <div class="ci-info">
        <div class="ci-name">${c.name}</div>
        <div class="ci-cat">${c.cat}</div>
        <div class="ci-controls">
          <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
          <span class="qty-val">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id},1)">+</button>
          <span class="ci-price">₹${(c.price * c.qty).toLocaleString("en-IN")}</span>
          <button class="remove-btn" onclick="removeFromCart(${c.id})" title="Remove">✕</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  document.getElementById("cart-sub").textContent =
    "₹" + total.toLocaleString("en-IN");
  document.getElementById("cart-total-val").textContent =
    "₹" + total.toLocaleString("en-IN");
  footer.style.display = "block";
}

function openCart() {
  renderCartItems();
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-drawer").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-drawer").classList.remove("open");
  document.body.style.overflow = "";
}

// ====== WISHLIST ======
function toggleWishlist(id, btn) {
  const product = products.find((p) => p.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((w) => w !== id);
    btn.textContent = "🤍";
    btn.classList.remove("active");
    showToast(`Removed from wishlist`);
  } else {
    wishlist.push(id);
    btn.textContent = "❤️";
    btn.classList.add("active");
    showToast(`${product.emoji} Added to wishlist!`);
  }
  localStorage.setItem("lf-wishlist", JSON.stringify(wishlist));
}

function showWishlist() {
  document.getElementById("home-page").style.display = "none";
  const wp = document.getElementById("wishlist-page");
  wp.style.display = "block";
  wp.style.paddingTop = "100px";
  const items = products.filter((p) => wishlist.includes(p.id));
  const grid = document.getElementById("wishlist-grid");
  const empty = document.getElementById("wishlist-empty");
  if (!items.length) {
    grid.innerHTML = "";
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    grid.innerHTML = items
      .map(
        (p) => `
      <div class="product-card">
        <div class="product-img" style="padding:0;background:#f0ebe3;overflow:hidden;">
          <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
          <button class="wishlist-btn active" onclick="toggleWishlistPage(${p.id},this)" title="Remove from Wishlist">❤️</button>
        </div>
        <div class="product-info">
          <div class="product-cat">${p.cat}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-price-row">
            <span class="product-price">₹${p.price.toLocaleString("en-IN")}</span>
            <button class="add-to-cart" onclick="addToCart(${p.id})">+ Cart</button>
          </div>
        </div>
      </div>
    `,
      )
      .join("");
  }
  window.scrollTo(0, 0);
}

function toggleWishlistPage(id, btn) {
  wishlist = wishlist.filter((w) => w !== id);
  localStorage.setItem("lf-wishlist", JSON.stringify(wishlist));
  showWishlist();
}

function showSection(sec) {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("wishlist-page").style.display = "none";
  if (sec === "home") window.scrollTo(0, 0);
}

// ====== CHECKOUT ======
function openCheckout() {
  closeCart();
  checkoutStep = 1;
  showCheckoutStep(1);
  document.getElementById("checkout-modal").classList.add("open");
  document.body.style.overflow = "hidden";
  // Fill order summary
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById("oms-items").innerHTML = cart
    .map(
      (c) =>
        `<div class="oms-item"><span>${c.emoji} ${c.name} ×${c.qty}</span><span>₹${(c.price * c.qty).toLocaleString("en-IN")}</span></div>`,
    )
    .join("");
  document.getElementById("oms-total-val").textContent =
    "₹" + total.toLocaleString("en-IN");
}

function closeCheckout() {
  document.getElementById("checkout-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function showCheckoutStep(n) {
  document.getElementById("checkout-step1").style.display =
    n === 1 ? "block" : "none";
  document.getElementById("checkout-step2").style.display =
    n === 2 ? "block" : "none";
  document.getElementById("checkout-step3").style.display =
    n === 3 ? "block" : "none";
  ["step1-dot", "step2-dot", "step3-dot"].forEach((id, i) => {
    document.getElementById(id).classList.toggle("active", i < n);
  });
  const titles = ["Shipping Details", "Payment", "Order Confirmed"];
  document.getElementById("modal-step-title").textContent = titles[n - 1];
  const backBtn = document.getElementById("btn-back");
  const nextBtn = document.getElementById("btn-next");
  const footer = document.getElementById("modal-footer");
  if (n === 3) {
    footer.innerHTML = `<button class="btn-next" style="flex:1" onclick="closeCheckout();showSection('home')">Back to Shopping 🎉</button>`;
  } else {
    footer.innerHTML = `
      <button class="btn-back" id="btn-back" onclick="prevStep()" style="display:${n > 1 ? "block" : "none"}">← Back</button>
      <button class="btn-next" id="btn-next" onclick="nextStep()">${n === 1 ? "Continue to Payment →" : "Place Order ✓"}</button>
    `;
  }
}

function nextStep() {
  if (checkoutStep === 1) {
    if (!validateStep1()) return;
    checkoutStep = 2;
    showCheckoutStep(2);
  } else if (checkoutStep === 2) {
    if (!validateStep2()) return;
    placeOrder();
  }
}

function prevStep() {
  if (checkoutStep > 1) {
    checkoutStep--;
    showCheckoutStep(checkoutStep);
  }
}

function validateStep1() {
  const required = [
    "fname",
    "lname",
    "email",
    "phone",
    "address",
    "city",
    "pin",
  ];
  for (const id of required) {
    if (!document.getElementById(id).value.trim()) {
      document.getElementById(id).focus();
      showToast("⚠️ Please fill all required fields");
      return false;
    }
  }
  return true;
}

function validateStep2() {
  if (
    selectedPayment === "upi" &&
    !document.getElementById("upi-id").value.trim()
  ) {
    showToast("⚠️ Please enter your UPI ID");
    return false;
  }
  if (
    selectedPayment === "card" &&
    !document.getElementById("card-num").value.trim()
  ) {
    showToast("⚠️ Please enter card details");
    return false;
  }
  return true;
}

function placeOrder() {
  const orderId = "LF" + Date.now().toString().slice(-8).toUpperCase();
  document.getElementById("order-id-display").textContent = "Order #" + orderId;
  cart = [];
  saveCart();
  updateCartUI();
  checkoutStep = 3;
  showCheckoutStep(3);
}

function selectPayment(method) {
  selectedPayment = method;
  ["upi", "card", "netbank", "cod"].forEach((m) => {
    document
      .getElementById("pm-" + m)
      .classList.toggle("selected", m === method);
  });
  document
    .getElementById("upi-input-wrap")
    .classList.toggle("show", method === "upi");
  document
    .getElementById("card-fields")
    .classList.toggle("show", method === "card");
  document.getElementById("netbank-wrap").style.display =
    method === "netbank" ? "block" : "none";
  document.getElementById("cod-msg").style.display =
    method === "cod" ? "block" : "none";
}

function formatCard(input) {
  let v = input.value.replace(/\D/g, "").slice(0, 16);
  input.value = v.replace(/(.{4})/g, "$1 ").trim();
}
function formatExp(input) {
  let v = input.value.replace(/\D/g, "").slice(0, 4);
  if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
  input.value = v;
}

// ====== TESTIMONIALS ======
function renderTestimonials() {
  document.getElementById("testimonials-grid").innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial-card reveal">
      <div class="t-stars">${"★".repeat(t.stars)}</div>
      <p class="t-text">"${t.text}"</p>
      <div class="t-author">
        <div class="t-avatar">${t.name
          .split(" ")
          .map((n) => n[0])
          .join("")}</div>
        <div><div class="t-name">${t.name}</div><div class="t-loc">📍 ${t.loc}</div></div>
      </div>
    </div>
  `,
    )
    .join("");
  setupScrollReveal();
}

// ====== NEWSLETTER ======
function subscribeNewsletter() {
  const email = document.getElementById("newsletter-email").value.trim();
  if (!email || !email.includes("@")) {
    showToast("⚠️ Please enter a valid email");
    return;
  }
  document.getElementById("newsletter-email").value = "";
  showToast("🎉 Subscribed! Your 10% coupon: LUXE10");
}

// ====== IMAGE MANAGER ======
// Load saved custom images from localStorage
function loadCustomImages() {
  const saved = JSON.parse(localStorage.getItem("lf-custom-imgs") || "{}");
  products.forEach((p) => {
    if (saved[p.id]) p.img = saved[p.id];
  });
}

function saveCustomImage(productId, imgSrc) {
  const saved = JSON.parse(localStorage.getItem("lf-custom-imgs") || "{}");
  saved[productId] = imgSrc;
  localStorage.setItem("lf-custom-imgs", JSON.stringify(saved));
  const p = products.find((x) => x.id === productId);
  if (p) p.img = imgSrc;
  filterProducts();
  renderCartItems();
  updateImgManagerGrid();
}

function openImgManager() {
  document.getElementById("img-manager-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
  updateImgManagerGrid();
  switchTab("single");
}

function closeImgManager() {
  document.getElementById("img-manager-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function updateImgManagerGrid() {
  const saved = JSON.parse(localStorage.getItem("lf-custom-imgs") || "{}");
  const grid = document.getElementById("im-product-grid");
  grid.innerHTML = products
    .map(
      (p) => `
    <div class="im-card${saved[p.id] ? " changed" : ""}" id="im-card-${p.id}">
      ${saved[p.id] ? '<div class="im-changed-badge">✓ Changed</div>' : ""}
      <div class="im-img-wrap" onclick="document.getElementById('im-file-${p.id}').click()" title="Click to upload image">
        <img src="${p.img}" alt="${p.name}" id="im-img-${p.id}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23f0ebe3%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-size=%2230%22>🛋️</text></svg>'">
        <div class="im-upload-overlay">
          <div class="im-upload-icon">📤</div>
          <div>Click to Upload</div>
        </div>
      </div>
      <input type="file" accept="image/*" id="im-file-${p.id}" class="im-file-input" onchange="handleSingleUpload(event, ${p.id})">
      <div class="im-info">
        <div class="im-prod-name">${p.name}</div>
        <div class="im-prod-cat">${p.cat}</div>
        <div class="im-url-row">
          <input type="text" class="im-url-input" id="im-url-${p.id}" placeholder="Paste image URL...">
          <button class="im-url-btn" onclick="applyUrl(${p.id})">Set</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function handleSingleUpload(event, productId) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const src = e.target.result;
    document.getElementById("im-img-" + productId).src = src;
    saveCustomImage(productId, src);
    const card = document.getElementById("im-card-" + productId);
    if (card) {
      card.classList.add("changed");
      if (!card.querySelector(".im-changed-badge")) {
        const badge = document.createElement("div");
        badge.className = "im-changed-badge";
        badge.textContent = "✓ Changed";
        card.appendChild(badge);
      }
    }
    showToast(
      "✅ Image updated for " + products.find((p) => p.id === productId).name,
    );
  };
  reader.readAsDataURL(file);
}

function applyUrl(productId) {
  const input = document.getElementById("im-url-" + productId);
  const url = input.value.trim();
  if (!url) {
    showToast("⚠️ Please paste a valid image URL");
    return;
  }
  document.getElementById("im-img-" + productId).src = url;
  saveCustomImage(productId, url);
  input.value = "";
  const card = document.getElementById("im-card-" + productId);
  if (card) {
    card.classList.add("changed");
    if (!card.querySelector(".im-changed-badge")) {
      const badge = document.createElement("div");
      badge.className = "im-changed-badge";
      badge.textContent = "✓ Changed";
      card.appendChild(badge);
    }
  }
  showToast(
    "✅ Image URL set for " + products.find((p) => p.id === productId).name,
  );
}

function switchTab(tab) {
  document.getElementById("single-tab").style.display =
    tab === "single" ? "block" : "none";
  document.getElementById("bulk-tab").style.display =
    tab === "bulk" ? "block" : "none";
  document
    .getElementById("tab-single")
    .classList.toggle("active", tab === "single");
  document
    .getElementById("tab-bulk")
    .classList.toggle("active", tab === "bulk");
}

function handleBulkUpload(event) {
  const files = Array.from(event.target.files);
  if (!files.length) return;
  let matched = 0;
  const preview = document.getElementById("im-bulk-preview");
  preview.innerHTML = "";
  files.forEach((file) => {
    const name = file.name
      .toLowerCase()
      .replace(/\.(jpg|jpeg|png|webp|gif)$/, "");
    const numMatch = name.match(/(\d+)$/);
    if (!numMatch) return;
    const id = parseInt(numMatch[1]);
    const product = products.find((p) => p.id === id);
    if (!product) return;
    matched++;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      saveCustomImage(id, src);
      const card = document.createElement("div");
      card.className = "im-card changed";
      card.innerHTML = `
        <div class="im-changed-badge">✓ Matched</div>
        <div class="im-img-wrap" style="cursor:default"><img src="${src}" alt="${product.name}"></div>
        <div class="im-info">
          <div class="im-prod-name">${product.name}</div>
          <div class="im-prod-cat" style="color:var(--sage);font-weight:600;">ID #${id} matched</div>
        </div>`;
      preview.appendChild(card);
    };
    reader.readAsDataURL(file);
  });
  document.getElementById("bulk-status").innerHTML =
    `<span style="color:var(--sage);font-weight:600;">✅ ${matched} of ${files.length} files matched & applied!</span>` +
    (files.length > matched
      ? `<span style="color:var(--text-muted);"> · ${files.length - matched} files skip thaya (no ID match)</span>`
      : "");
  if (matched > 0) showToast(`✅ ${matched} product images updated!`);
}

// Close overlay on outside click
document
  .getElementById("img-manager-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) closeImgManager();
  });
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// ====== SCROLL ======
function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ====== MOBILE MENU ======
function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
}
