const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'שולח...';

   const serviceID = 'default_service';
   const templateID = 'template_qlchgy3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('ההודעה נשלחה אלינו נחזור אליכם בהקדם האפשרי');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
