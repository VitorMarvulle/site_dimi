document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});

// Dark Mode btn


// document.addEventListener('DOMContentLoaded', () => {
//     const darkModeBtn = document.getElementById('darkModeBtn');
//     const root = document.documentElement;
//     const svgElement = document.getElementById('dynamic-svg');

//     // Verifica o tema armazenado no localStorage
//     const isDarkMode = localStorage.getItem('theme') === 'dark';

//     if (isDarkMode) {
//         root.classList.add('dark-mode');
//     }

//     const updateSvgColor = () => {
//         const rootStyles = getComputedStyle(root);
//         const svgColor = rootStyles.getPropertyValue('--svg-color').trim();

//         const newSrc = `https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&size=50&duration=2000&pause=100&color=${svgColor}&background=FFFFFF00&width=480&height=100&lines=BIM.;Arquitetura.;Design.`;

//         // Atualiza o atributo src apenas se houver mudanças para evitar redirecionamentos desnecessários
//         if (svgElement.getAttribute('src') !== newSrc) {
//             svgElement.setAttribute('src', newSrc);
//         }
//     };

//     // Atualiza o SVG ao carregar a página
//     updateSvgColor();

//     // Alterna entre temas ao clicar no botão
//     darkModeBtn.addEventListener('click', () => {
//         root.classList.toggle('dark-mode');

//         // Salva o estado do tema no localStorage
//         const isDark = root.classList.contains('dark-mode');
//         localStorage.setItem('theme', isDark ? 'dark' : 'light');

//         // Atualiza o ícone do botão
//         darkModeBtn.textContent = isDark ? '🌙' : '☀️';

//         // Atualiza a cor do SVG
//         updateSvgColor();
//     });
// });



// darkMode Slider

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const svgElement = document.getElementById('dynamic-svg');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    // Verifica o tema armazenado no localStorage
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    if (isDarkMode) {
        root.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Função para atualizar a cor do SVG dinamicamente
    const updateSvgColor = () => {
        const rootStyles = getComputedStyle(root);
        const svgColor = rootStyles.getPropertyValue('--svg-color').trim();

        const newSrc = `https://readme-typing-svg.herokuapp.com/?font=Space+Grotesk&size=50&duration=3000&pause=100&color=${svgColor}&background=FFFFFF00&width=550&height=100&lines=Arquiteta+e+Urbanista`;

        https://

        // Atualiza o atributo src apenas se houver mudanças para evitar redirecionamentos desnecessários
        if (svgElement.getAttribute('src') !== newSrc) {
            svgElement.setAttribute('src', newSrc);
        }
    };

    // Atualiza o SVG ao carregar a página
    updateSvgColor();

    // Alterna o tema quando o botão é acionado
    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            root.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }

        // Atualiza o SVG com base no tema selecionado
        updateSvgColor();
    });
});


