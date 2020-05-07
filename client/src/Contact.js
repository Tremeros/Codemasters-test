import React, {useState} from 'react';
import axios from 'axios';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [alert, setAlert] = useState('');
    const [errors, setErrors] = useState([]);

    const {name, email, message} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

          const body = JSON.stringify({name, email, message});

          try {
            await axios.post('/api/message', body, config);
            setAlert('Wiadomość została wysłana');
            setFormData({name: '', email: '', message: ''})
            setTimeout(() => {setAlert('')}, 5000)
            
          } catch (err) {
              const errMsg = err.response.data.errors.map(err => err.msg);
            setErrors(...alert, errMsg );
            console.log(err.response.data.errors);
          }
    }

    const errorsList = errors.map((el, index) => <p style={{color: 'red'}}>{el}</p>)
    return (    
        <div className="contact" id='contact'>
        <div className="container">
           <div className="contact-title">CONTACT WITH US</div>
           <div className="contact-line"></div>
           <div className="contact-text">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore ea perspiciatis incidunt? Laboriosam, rerum!</p>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, illo?</p>
           </div>
           <div>{errorsList.length > 0 ? errorsList : <p style={{color: 'green'}}>{alert}</p>}</div>
           <div className="contact-form">
               <form onSubmit={e => onSubmit(e)} action="">
                   <input type="text" name='name' value={name} onChange={e => onChange(e)} placeholder="Name and surname"/>
                   <input type="email" name='email' value={email} onChange={e => onChange(e)} placeholder="Email"/>
                   <textarea name='message' value={message} onChange={e => onChange(e)} id="" cols="30" rows="10" placeholder="Message:"></textarea>
                   <input type="submit"  value='Submit'/>
               </form>
               
           </div>
        </div>
    </div>
    )
};

export default Contact;
