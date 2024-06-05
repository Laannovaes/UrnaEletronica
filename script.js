class Urna {
    constructor() {
        this.voto = '';
        this.displayElement = document.getElementById('display');
        this.votosLula = 100;  // Inicializa Lula com 100 votos
        this.votosBolsonaro = 10;  // Inicializa Bolsonaro com 10 votos
        this.votosNulos = 0;
        this.totalVotos = 0;
    }

    digitarNumero(numero) {
        if (this.voto.length < 2) {
            this.voto += numero;
            this.atualizarDisplay();
        }
    }

    confirmar() {
        if (this.voto.length === 2) {
            if (this.voto === '13') {
                this.votosLula++;
            } else if (this.voto === '22') {
                this.votosBolsonaro++;
            } else {
                alert('Número inválido. Digite 13 para Lula ou 22 para Bolsonaro.');
                this.limpar();
                return;
            }

            this.totalVotos++;
            this.limpar();

            if (this.totalVotos >= 10) {
                this.mostrarResultado();
            } else {
                alert(`Voto confirmado: ${this.voto}`);
            }
        } else {
            alert('Número inválido. Digite um voto com 2 dígitos.');
        }
    }

    corrigir() {
        this.limpar();
    }

    votoNulo() {
        this.votosNulos++;
        this.totalVotos++;
        this.limpar();

        if (this.totalVotos >= 10) {
            this.mostrarResultado();
        } else {
            alert('Voto nulo confirmado.');
        }
    }

    limpar() {
        this.voto = '';
        this.atualizarDisplay();
    }

    atualizarDisplay() {
        this.displayElement.textContent = this.voto || 'Digite seu Voto';
    }

    mostrarResultado() {
        const votosLula = this.votosLula;
        const votosBolsonaro = this.votosBolsonaro;
        const votosNulos = this.votosNulos;

        alert(`Resultado da votação:
        Lula (13): ${votosLula} votos
        Bolsonaro (22): ${votosBolsonaro} votos
        Votos Nulos: ${votosNulos}
        Lula é o vencedor!`);
        
        // Exibir "FIM" na tela
        this.displayElement.textContent = 'FIM';

        // Resetar contagem para nova votação após um tempo
        setTimeout(() => {
            this.votosLula = 100;  // Reinicia Lula com 100 votos
            this.votosBolsonaro = 10;  // Reinicia Bolsonaro com 10 votos
            this.votosNulos = 0;
            this.totalVotos = 0;
            this.limpar();
        }, 5000);  // 5 segundos de espera
    }
}

const urna = new Urna();
