export function verificarCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digito = cpf.substring(9);
        var soma = 0;

        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;

        }

        var primeiroDigito = (soma * 10) % 11;

        if (primeiroDigito != digito.charAt(0)) {
            return false
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (let k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k
        }

        var segundoDigito = (soma * 10) % 11;

        if (segundoDigito != digito.charAt(1)) {
            return false
        }


        return true;
    }
}
