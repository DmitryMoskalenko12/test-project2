import { useState, useEffect } from 'react';
import classes from './form.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [process, setProcess] = useState('idle');

  const sendData = (e) => {
    e.preventDefault();
    setProcess('loading')
    const res = {
      name,
      email,
      message
    }
    setProcess('success')
    console.log(res)

    setName('')
    setEmail('')
    setMessage('')
  }
  
  useEffect(() => {
    const timer = setTimeout(() => setProcess(null), 6000);
    return () => clearTimeout(timer)
  },[process])

  const hidePopup = () => {
    setProcess(null)
  }

  return (
    <section className={classes.form}>
      <div className="containder">
        <div className={classes.wrapper}>
          <div className={classes.block1}>
            <h2 className={classes.title}>Looking for an excellent business idea?</h2>
            <div className={classes.descr}>
               Give us a call or email anytime, we strive to answer all inquiries within 24 hours on business days.
            </div>

            <div className={classes.picture}>
              <picture>
                <source
                  width={814}
                  height={596}
                  media="(min-width: 1440px)"
                  srcSet="/images/form1440.webp"
                />
          
                <source
                  width={372}
                  height={382}
                  media="(min-width: 768px)"
                  srcSet="/images/form768.webp"
                />
              
                <img src={'/images/form768.webp'} alt='You will see part of figures' width={372} height={382}/>
              </picture>
            </div>
          </div>

          <form onSubmit={sendData} className={classes.mainForm}>
             <h2 className={classes.formTitle}>Overview</h2>
             <label className={classes.name} htmlFor="name">Name</label>
             <input onChange={(e) => setName(e.target.value)} value={name} className={classes.inputName} type="text" id='name' placeholder='Name'/>

             <label className={classes.email} htmlFor="email">Email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)} className={classes.inputEmail} type="email" id='email' placeholder='Email' required/>

             <label className={classes.message} htmlFor="message">Message</label>
             <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={classes.textArea} name="message" id="message" placeholder='Message'></textarea>

             <button className={classes.send}>Send</button>
          </form>
        </div>
      </div>
      {process === 'success' ? <div onClick={hidePopup} className={classes.popup}><div className={classes.popupContent}>Ваши данные успешно отправлены!</div></div>: null}
    </section>
  )
}

export default Form;