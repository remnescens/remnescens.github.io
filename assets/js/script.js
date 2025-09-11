document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith("de")) { window.location.replace("/de/index.html"); }
  else if (userLang.startsWith("en")) { window.location.replace("/en/index.html"); }
  else if (userLang.startsWith("es")) { window.location.replace("/es/index.html"); }
  else if (userLang.startsWith("fr")) { window.location.replace("/fr/index.html"); }
  else if (userLang.startsWith("it")) { window.location.replace("/it/index.html"); }
  else if (userLang.startsWith("pl")) { window.location.replace("/pl/index.html"); }
  else if (userLang.startsWith("pt")) { window.location.replace("/pt/index.html"); } 
  else { window.location.replace("/en/index.html"); }
});
