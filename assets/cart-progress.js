class CartProgress {
  container;

  phrases;
  
  constructor (container, phrases) {
    if (!container) {
      throw new Error('No valid container for cart progress bar');
    }
    
    this.container = container;
    this.phrases = phrases;
  }

  get message () {
    return this.container.querySelector('[data-header-message]');
  }

  get bar () {
    return this.container.querySelector('.cart-progress__bar-inner');
  }

  get target () {
    return +this.container.dataset.target;
  }

  get targetInCents () {
    return this.target * 100;
  }

  getBarWidth = total => Math.min(total / this.targetInCents * 100, 100);

  setBarBorderRadius = total => {
    this.bar.style.borderRadius = total >= this.targetInCents ? '30px' : '30px 0 0 30px';
  }

  setBarWidth = total => {
    this.bar.style.width = `${this.getBarWidth(total)}%`;
  }

  setMessage = total => {
    if (total >= this.targetInCents) {
      this.message.innerHTML = this.phrases.success;
      return;
    }

    this.message.innerHTML = this.phrases.progress
      .replace('{remaining}', `<span class="remain-price">${this.getRemainingSum(total)} €</span>`)
      .replace('{target}', `${this.target} €`);
  }

  getRemainingSum = total => {
    return Math.round((this.target - total / 100) * 100) / 100;
  }

  hide = () => {
    this.container.style.display = 'none';
  }

  show = () => {
    this.container.style.display = '';
  }

  update = (total, itemsCount) => {
    if (!itemsCount) {
      this.hide();
      return;
    }

    this.setMessage(total);
    this.show();
    this.setBarBorderRadius(total);
    this.setBarWidth(total);
  }
}

if (typeof window.onCartProgressLoad === 'function') {
  window.onCartProgressLoad();
}