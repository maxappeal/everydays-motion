(function() {

  document.addEventListener('theme:variant:change', function(event) {
    var variant = event.detail.variant;
    var container = event.target;
    if (variant) {
      console.log('Container ———————— ↓');
      console.log(container);
      console.log('Variant —————————— ↓');
      console.log(variant);
    }
  });

  document.addEventListener('theme:cart:change', function(event) {
    var cart = event.detail.cart;
    if (cart) {
      console.log('Cart ———————————— ↓');
      console.log(cart);
    }
  });

  document.addEventListener('theme:cart:init', (e) => {
    console.log('theme:cart:init');
    console.log(e);
  });

  document.addEventListener('theme:scroll', e => { console.log(e); });
  document.addEventListener('theme:scroll:up', e => { console.log(e); });
  document.addEventListener('theme:scroll:down', e => { console.log(e); });

  document.addEventListener('theme:resize', e => { console.log(e); });

  // Tabs
  const tabItems = document.querySelectorAll('.tab-nav__item');
  const tabBoxes = document.querySelectorAll('.tab-content__box');
  if (tabItems.length && tabBoxes.length) {
    tabItems.forEach(item => {
      item.addEventListener('click', () => {
        const allItems = document.querySelectorAll('[data-parent="' + item.dataset.parent + '"]');
        if (allItems.length) {
          allItems.forEach(item => {
            item.classList.remove('active');
          });
        }
        item.classList.add('active');

        const allTargets = document.querySelectorAll('[data-section="' + item.dataset.parent + '"] .tab-content__box');
        if (allTargets.length) {
          allTargets.forEach(target => {
            target.classList.remove('active');
          });
        }

        const target = document.querySelector('[data-section="' + item.dataset.parent + '"] #' + item.dataset.target);
        if (target) {
          target.classList.add('active');
        }
      });
    });
  }

  // Popup slider
  const triggersOpen = document.querySelectorAll('[popup-trigger]');
  if (triggersOpen.length) {
    triggersOpen.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const modal = document.querySelector(trigger.getAttribute('popup-trigger'));
        if (modal) {
          modal.classList.add('open');
          const slider = document.querySelector('.mt-popup__carousel');
          if (slider) {
            const flkty = new Flickity( slider, {
              prevNextButtons: false
            });
            if (trigger.dataset.index != null && flkty) {
              flkty.selectCell(parseInt(trigger.dataset.index));
            }
          }
        }
      });
    });
  }
  const triggersClose = document.querySelectorAll('[popup-close]');
  if (triggersClose.length) {
    triggersClose.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const modal = document.querySelector(trigger.getAttribute('popup-close'));
        console.log(modal);
        if (modal) {
          modal.classList.remove('open');
        }
      });
    });
  }

  // Collections slider
  const slider = document.querySelector('.collections__carousel');
  if (slider) {
    const flkty = new Flickity( slider, {
      cellAlign: 'left',
      contain: true,
      percentPosition: false,
      pageDots: false,
      arrowShape: 'm27.3 69.2c0.8-0.9 0.6-2.3-0.3-3l-18.7-14.7h89.5c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.1-2.2-2.1h-89.4l18.5-14.4c1-0.7 1.2-2 0.4-3-0.7-0.9-2-1.1-3-0.3l-23.5 18.1c0 0 0 0.1-0.1 0.1q-0.2 0.2-0.4 0.4c0 0 0 0.1 0 0.1 0 0 0 0.1 0 0.1q-0.3 0.4-0.3 0.9c0 0 0 0 0 0v0.1c0 0 0 0.1 0 0.1q0 0.5 0.2 0.9c0 0 0 0.1 0 0.1l0.1 0.1q0.2 0.3 0.5 0.5l23.5 18.6q0.6 0.4 1.4 0.4c0.6 0 1.2-0.3 1.7-0.8z'
    });

    window.addEventListener('resize', () => {
      flkty.resize();
    });
  }

  // Cart Drawer Language Fix
  const currentLang = document.documentElement.getAttribute('lang');
  const languages = {
    fr: {
      warenkorb: 'Panier',
      versand: 'Livraison',
      berechnungImCheckout: 'Calcul dans le checkout',
      zwischenzusammen: 'Somme',
      zurKasse: 'Procéder au paiement',
      deinWarenkorbIstLeer: 'Votre panier est vide'
    }
  }
  function cartDrawerFix() {
    if (languages[currentLang]) {
      const warenkorb = document.querySelector('#slidecarthq .header h2');
      if (warenkorb && languages[currentLang].warenkorb) {
        warenkorb.innerHTML = warenkorb.innerHTML.replace('Warenkorb', languages[currentLang].warenkorb);
      }
      const versand = document.querySelector('#slidecarthq .footer > .footer-row:first-child > .flex');
      if (versand && languages[currentLang].versand) {
        versand.innerHTML = versand.innerHTML.replace('Versand', languages[currentLang].versand);
      }
      const berechnungImCheckout = document.querySelector('#slidecarthq .footer .shipping-cost > span');
      if (berechnungImCheckout && languages[currentLang].berechnungImCheckout) {
        berechnungImCheckout.innerHTML = berechnungImCheckout.innerHTML.replace('Berechnung im Checkout', languages[currentLang].berechnungImCheckout);
      }
      const zwischenzusammen = document.querySelector('#slidecarthq .footer > .footer-row:nth-child(2) > .flex');
      if (zwischenzusammen && languages[currentLang].zwischenzusammen) {
        zwischenzusammen.innerHTML = zwischenzusammen.innerHTML.replace('Zwischenzusammen', languages[currentLang].zwischenzusammen);
      }
      const zurKasse = document.querySelector('#slidecarthq #slidecart-checkout-form .button');
      if (zurKasse && languages[currentLang].zurKasse) {
        zurKasse.innerHTML = zurKasse.innerHTML.replace('Zur Kasse', languages[currentLang].zurKasse);
      }
      const deinWarenkorbIstLeer = document.querySelector('#slidecarthq .empty p');
      if (deinWarenkorbIstLeer && languages[currentLang].deinWarenkorbIstLeer) {
        deinWarenkorbIstLeer.innerHTML = deinWarenkorbIstLeer.innerHTML.replace('Dein Warenkorb ist leer', languages[currentLang].deinWarenkorbIstLeer);
      }
    }
  }
  const cartBtn = document.querySelectorAll('[aria-controls="CartDrawer"]');
  if (cartBtn.length) {
    cartBtn.forEach(btn => {
      btn.addEventListener('click', cartDrawerFix);
    });
  }
  const addToCartBtns = document.querySelectorAll('[data-add-to-cart]');
  if (addToCartBtns.length) {
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', cartDrawerFix);
    });
  }

  if (!Shopify.designMode) {
    const v3ModalRelocate = document.querySelectorAll('.modal--v3');
    if (v3ModalRelocate.length) {
      v3ModalRelocate.forEach(modal => {
        document.body.appendChild(modal);
      });
    }
  }

  const modalTriggers = document.querySelectorAll('[open-modal]');
  if (modalTriggers.length) {
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(trigger.getAttribute('href'));
        if (target) {
          target.classList.add('modal--is-active');
        }
      });
    });
  }

  const modalCloseTriggers = document.querySelectorAll('[close-modal]');
  if (modalCloseTriggers.length) {
    modalCloseTriggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(trigger.getAttribute('data-close'));
        if (target) {
          target.classList.remove('modal--is-active');
        }
      });
    });
  }
})();
