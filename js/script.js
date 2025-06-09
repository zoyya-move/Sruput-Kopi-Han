// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart1 = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});




const shoppingCart = document.querySelector(".shopping-cart");
let cartItemsContainer = shoppingCart.querySelector(".cart-items");
if (!cartItemsContainer) {
  cartItemsContainer = document.createElement("div");
  cartItemsContainer.classList.add("cart-items");
  shoppingCart.appendChild(cartItemsContainer);
}


function addToCart(event) {
  const button = event.currentTarget;
  const productCard = button.closest(".product-card");

  if (!productCard) return;

  const name = productCard.querySelector(".product-content h3").textContent.trim();
  const price = productCard.querySelector(".product-price").textContent.trim();
  const imgSrc = productCard.querySelector(".product-image img").src;

  addItemToCart(name, price, imgSrc);
  shoppingCart.classList.add("active");
}

function addItemToCart(name, price, imgSrc) {
  let cartItemsContainer = document.querySelector(".cart-items");
  if (!cartItemsContainer) {
    cartItemsContainer = document.createElement("div");
    cartItemsContainer.classList.add("cart-items");
    document.querySelector(".shopping-cart").appendChild(cartItemsContainer);
  }

  const existingItem = cartItemsContainer.querySelector(`.cart-item[data-name="${name}"]`);

  if (existingItem) {
    const confirmed = confirm(`${name} sudah ada di keranjang. Tambahkan lagi?`);
    if (!confirmed) return;

    // Update quantity
    const qtyElem = existingItem.querySelector(".item-quantity");
    let quantity = parseInt(qtyElem.textContent);
    quantity++;
    qtyElem.textContent = quantity;

  } else {
    // Buat elemen baru dengan quantity = 1
    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.setAttribute("data-name", name);
    item.innerHTML = `
      <img src="${imgSrc}" alt="${name}" />
      <div class="item-detail">
        <h3>${name}</h3>
        <div class="item-price">${price}</div>
        <div>Qty: <span class="item-quantity">1</span></div>
      </div>
      <i data-feather="trash-2" class="remove-item" style="cursor:pointer;"></i>
    `;

    cartItemsContainer.appendChild(item);

    if (typeof feather !== "undefined") feather.replace();

    item.querySelector(".remove-item").addEventListener("click", (e) => {
       e.stopPropagation();
      const qtyElem = item.querySelector(".item-quantity");
      let quantity = parseInt(qtyElem.textContent);

      if (quantity > 1) {
        quantity--;
        qtyElem.textContent = quantity;
      } else {
        item.remove();
      }
      updateQuantityBadge();
    });
  }

  updateQuantityBadge();
}

function toggleEmptyMessage() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const emptyMessage = document.querySelector(".empty-message");

  if (!cartItemsContainer || !emptyMessage) return;

  if (cartItemsContainer.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}


function updateQuantityBadge() {
  const cartItems = document.querySelectorAll(".cart-item");
  let totalQuantity = 0;

  cartItems.forEach(item => {
    const qtyElem = item.querySelector(".item-quantity");
    const quantity = qtyElem ? parseInt(qtyElem.textContent) : 1;
    totalQuantity += quantity;
  });

  const badge = document.querySelector(".item-quantity");
  if (badge) {
    badge.textContent = totalQuantity;
    badge.style.display = totalQuantity > 0 ? "inline-block" : "none";
  }
  toggleEmptyMessage();
}

document.addEventListener("DOMContentLoaded", () => {
  toggleEmptyMessage();
});






//Modal Box detail
const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailButtons1 = document.querySelectorAll(".item-detail-button1");

itemDetailButtons1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = "flex";
    e.preventDefault();
  };
});

//klik tombol close modal
document.querySelector(".modal .close-icon1").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon4").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon5").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon6").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon7").onclick = (e) => {
  itemDetailModal7.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon8").onclick = (e) => {
  itemDetailModal8.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon9").onclick = (e) => {
  itemDetailModal9.style.display = "none";
  e.preventDefault();
};

//klik di luar modal
const itemDetailModal = document.querySelector(".item-detail-modal");

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product .open-modal");
  const modal = document.getElementById("item-detail-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");

  products.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const product = this.closest(".product");

      modalImage.src = product.dataset.image;
      modalTitle.textContent = product.dataset.title;
      modalDesc.textContent = product.dataset.description;
      modalPrice.innerHTML = `${product.dataset.price} <span>${product.dataset["oldPrice"]}</span>`;

      modal.classList.add("show");
    });
  });

  // Close modal
  document.querySelector(".close-icon").addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("show");
  });
});
