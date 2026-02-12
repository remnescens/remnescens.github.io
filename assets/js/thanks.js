document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith("de")) { window.location.replace("/de/thanks.html"); }
  else if (userLang.startsWith("en")) { window.location.replace("/en/thanks.html"); }
  else if (userLang.startsWith("es")) { window.location.replace("/es/thanks.html"); }
  else if (userLang.startsWith("fr")) { window.location.replace("/fr/thanks.html"); }
  else if (userLang.startsWith("it")) { window.location.replace("/it/thanks.html"); }
  else if (userLang.startsWith("pl")) { window.location.replace("/pl/thanks.html"); }
  else if (userLang.startsWith("pt")) { window.location.replace("/pt/thanks.html"); } 
  else { window.location.replace("/en/thanks.html"); }
});
