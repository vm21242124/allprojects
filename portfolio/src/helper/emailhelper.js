const handleSubmit = () => {


    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_USER_ID'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message Sent Successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to Send Message');
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };