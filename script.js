const odsInfo = {
    1: "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
    2: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.",
    3: "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.",
    4: "Assegurar a educação inclusiva e equitativa de qualidade e promover oportunidades de aprendizagem ao longo da vida para todos.",
    5: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    6: "Garantir disponibilidade e manejo sustentável da água e saneamento para todos.",
    7: "Garantir acesso a energia acessível, confiável, sustentável e moderna para todos.",
    8: "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.",
    9: "Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
    10: "Reduzir a desigualdade dentro dos países e entre eles.",
    11: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    12: "Assegurar padrões de produção e de consumo sustentáveis.",
    13: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
    14: "Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos.",
    15: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.",
    16: "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.",
    17: "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável."
};

const modal = document.getElementById("odsModal");
const modalTitle = document.getElementById("odsTitle");
const modalDescription = document.getElementById("odsDescription");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".ods").forEach((el, index) => {
    const odsNumber = index + 1;

    el.addEventListener("click", () => {
        if (odsNumber === 17) {
            // ODS 17 abre página separada
            window.location.href = "ODS17.html";
        } else if (odsNumber === 16) {
            // ODS 16 abre página separada
            window.location.href = "ODS16.html";
        } else if (odsNumber === 15) {
            // ODS 15 abre página separada
            window.location.href = "ODS15.html";
        } else if (odsNumber === 14) {
            // ODS 14 abre página separada
            window.location.href = "ODS14.html";
        } else if (odsNumber === 13) {
            // ODS 13 abre página separada
            window.location.href = "ODS13.html";
        } else if (odsNumber === 12) {
            // ODS 12 abre página separada
            window.location.href = "ODS12.html";
        } else if (odsNumber === 11) {
            // ODS 11 abre página separada
            window.location.href = "ODS11.html";
        } else if (odsNumber === 10) {
            // ODS 10 abre página separada
            window.location.href = "ODS10.html";
        } else if (odsNumber === 9) {
            // ODS 09 abre página separada
            window.location.href = "ODS09.html";
        } else if (odsNumber === 8) {
            // ODS 08 abre página separada
            window.location.href = "ODS08.html";
        } else if (odsNumber === 7) {
            // ODS 07 abre página separada
            window.location.href = "ODS07.html";
        } else if (odsNumber === 6) {
            // ODS 06 abre página separada
            window.location.href = "ODS06.html";
        } else if (odsNumber === 5) {
            // ODS 05 abre página separada
            window.location.href = "ODS05.html";
        } else if (odsNumber === 4) {
            // ODS 04 abre página separada
            window.location.href = "ODS04.html";
        } else if (odsNumber === 3) {
            // ODS 03 abre página separada
            window.location.href = "ODS03.html";
        } else if (odsNumber === 2) {
            // ODS 02 abre página separada
            window.location.href = "ODS02.html";
        } else if (odsNumber === 1) {
            // ODS 01 abre página separada
            window.location.href = "ODS01.html";
          
    }})});



// Fechar modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Fechar modal ao clicar fora
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
