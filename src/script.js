// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA PARA O MENU RESPONSIVO (HAMBÚRGUER) ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Verifica se os elementos existem na página
    if (menuToggle && navLinks) {
        // Adiciona um evento de clique no ícone do menu
        menuToggle.addEventListener('click', () => {
            // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
            navLinks.classList.toggle('active');
        });
    }

    // --- LÓGICA PARA O ACCORDION NA PÁGINA DE PROTOCOLOS ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Percorre todos os itens do accordion encontrados
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        // Verifica se os elementos internos existem
        if (header && content) {
            // Adiciona um evento de clique no cabeçalho do accordion
            header.addEventListener('click', () => {
                // Fecha todos os outros itens abertos para que apenas um fique aberto por vez
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherContent = otherItem.querySelector('.accordion-content');
                        if (otherContent.style.maxHeight) {
                            otherContent.style.maxHeight = null;
                            otherContent.style.padding = '0 20px';
                        }
                    }
                });

                // Abre ou fecha o item clicado
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.padding = '0 20px';
                } else {
                    // Define a altura máxima com base no conteúdo interno para uma transição suave
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.padding = '0 20px 20px 20px';
                }
            });
        }
    });

});
