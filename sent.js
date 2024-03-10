const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'שלוח...';

   const serviceID = 'default_service';
   const templateID = 'template_qlchgy3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('ההודעה נשלחה עלינו נחזור עליכם בהקדם האפשרי');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
