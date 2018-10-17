// $('#carouselExampleFade').on('slide.bs.carousel', function () {
//     transition: {
//       transform: 1s ease
//       opacity: .3s ease-out
//     }
//   });

  let form = $(".formulario-contato")
  console.log(form)

  form.validate({
    errorElement: "span",
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
    phone: "required",
    text: "required"
    },
    messages: {
      name: "Digite seu nome",
      email: {
        required: "Digite seu email",
        email: "Digite um email válido"
      },
      text: "Digite uma mensagem"
    }
  });



  