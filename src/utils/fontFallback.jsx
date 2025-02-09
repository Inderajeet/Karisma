export const applyFontFallback = () => {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, li").forEach((el) => {
      el.innerHTML = el.innerHTML.replace(/[^A-Za-z0-9 ]/g, '<span class="fallback-font">$&</span>');
    });
  };
  