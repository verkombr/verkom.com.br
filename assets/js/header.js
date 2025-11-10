document.addEventListener("DOMContentLoaded", function() {
  const navbarMenu = document.getElementById("menu");
  const burgerMenu = document.getElementById("burger");

  burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    burgerMenu.classList.toggle("is-active");
  });

  // Toggle para mostrar e ocultar o menu suspenso
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", () => {
      const dropdownShow = document.querySelector(".dropdown-show");
      const dropdownItem = dropdownToggle.closest(".dropdown");
      toggleDropdownItem(dropdownItem);

      // Remover a classe 'dropdown-show' de outros menus suspensos
      if (dropdownShow && dropdownShow != dropdownItem) {
        toggleDropdownItem(dropdownShow);
      }
    });
  });
  
  // Função para exibir o menu suspenso
  const toggleDropdownItem = (item) => {

    const dropdownContent = item.querySelector(".dropdown-content");

    // Remover outros menus suspensos que tenham a classe 'dropdown-show'
    if (item.classList.contains("dropdown-show")) {
      dropdownContent.removeAttribute("style");
      item.classList.remove("dropdown-show");
    } else {
      // Adicionado maxHeight na classe 'dropdown-show' ativa
      dropdownContent.style.height = dropdownContent.scrollHeight + "px";
      item.classList.add("dropdown-show");
    }
  };

  // Corrigir menu suspenso ao redimensionar a janela
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      document.querySelectorAll(".dropdown-content").forEach((item) => {
        item.removeAttribute("style");
      });
      document.querySelectorAll(".dropdown").forEach((item) => {
        item.classList.remove("dropdown-show");
      });
    }
  });

  // Corrigir menu de navegação ao redimensionar a janela
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
        burgerMenu.classList.remove("is-active");
      }
    }
  });

});
