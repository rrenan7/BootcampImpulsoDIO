function funcao() {
   
   let num1 = Number(prompt('Digite o primeiro número:'));
   let num2 = Number(prompt('Digite o segundo número:'));
   let iguais = false;
   let soma;
   let menor10 = false;
   let menor20 = false;

   function calculos() {
      if (num1 == num2) {
         iguais = true
      }
      
      soma = num1 + num2
      
      if (soma <= 10) {
         menor10 = true
      }
      
      if (soma <= 20) {
         menor20 = true
      }
      
      if (iguais == true && menor10 == true && menor20 == true) {
         alert(`Os número ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`)
      }
      
      else if (iguais == true && menor10 == false && menor20 == true) {
         alert(`Os número ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
      }
      
      else if (iguais == true && menor10 == false && menor20 == false) {
         alert(`Os número ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`)
      }
      
      else if (iguais == false && menor10 == true && menor20 == true) {
         alert(`Os número ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`)
      }
      
      else if (iguais == false && menor10 == false && menor20 == true) {
         alert(`Os número ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
      }
      
      else if (iguais == false && menor10 == false && menor20 == false) {
         alert(`Os número ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`)
      }
   }
   
   calculos()
}
funcao();
