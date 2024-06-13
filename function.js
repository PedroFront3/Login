
$(function(){

   $('input[type=text]').focus(function(){
      resetarCampoInvalido($(this));
  });

  $('form#text').submit(function(e){
      e.preventDefault();
       var nome = $('input[name=nome]').val();
       var telefone = $('input[name=telefone]').val();
       var email = $('input[name=email]').val();
       
       if(verificarNome(nome) == false) {
          aplicarCampoInvalido($('input[name=nome]'));
       } else if(verificarTelefone(telefone) == false) {
          aplicarCampoInvalido($('input[name=telefone]'));
       }else if(verificarEmail(email)== false) {
          aplicarCampoInvalido($('input[name=email]'));
       }

       else {
          alert("Formulário enviado com sucesso!");
      }

      });

     function aplicarCampoInvalido(el) {
          el.css('color','red');
          el.css('border-bottom','2px solid red');
          el.val('Campo Invalido!');
          //el.data('invalido','true');
      }
       
      function resetarCampoInvalido(el) {
          el.css('color','#000');
          el.css('border-bottom',' border-bottom: 3px solid #3b058d;');
          el.val('');
      }

     function verificarNome(nome) {
          if(nome == '') {
              return false;
          }
          var amount = nome.split(' ').length;
          var splitStr = nome.split(' ');
         if( amount >= 2) {
            for(var i = 0; i < amount; i++) {
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
 
                } else {
                   return false;
                }
            }
         
         }else {
            return false;
         }
      }

      function verificarTelefone(telefone) {
          if(telefone == '') {
              return false; 
          }

          if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null) {
              return false;
          }
      }
     
      function verificarEmail(email) {
          if(email == '') 
          return false;

          if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null) {
              return false;
          }
      }
});




























/*$(function(){
   $('form#text').click(function(e){
       e.preventDefault();
       var nome = $('input[name=nome]').val();
       var telefone = $('input[name=telefone]').val();
       var email = $('input[name=email]').val();
       
       var amount = nome.split(' ').length;
       var splitStr = nome.split(' ');
       if(amount >= 2) {
            for(var i = 0; i < amount; i++) {
                 if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                   
                 }else {
                    aplicarCampoInvalido($('input[name=nome]'));
                    return false;
                 }
            }
       }else {
          aplicarCampoInvalido($('input[name=nome]'));
          return false;
       }

     })

     function aplicarCampoInvalido(el) {
       el.css('border-bottom','2px solid red');
       el.data('invalido','true');
       el.val('Campo Invalido!');
     }
});*/
