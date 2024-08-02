document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();




    
    const formData = new formData(this)

    emailjs.send().then(response =>
        {
    document.getElementById('response-message').innerText = 'Mensagem Enviada com Sucesso!';
    this.reset();
    })
    .catch(error=> {
    document.getElementById('response-message').innerText = 'Erro ao Enviar a Mensagem!';
    console.error('Erro ao Enviar o E-Mail', error)
    }



})
