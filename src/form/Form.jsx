import React, {useState} from 'react'
import './form.css'

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        grade: '',
        email: '',
        address: '',
        contact: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            age: '',
            grade: '',
            email: '',
            address: '',
            contact: ''
          })
        alert(JSON.stringify(formData));
      };

  return (
    <div className="form__container">
      <h1>Student Record Form</h1>
      <form onSubmit={handleSubmit} className='student__form'>
        <label className='form__item' >
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className='form__input' />
        </label>
        <label className='form__item' >
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} className='form__input' />
        </label>
        <label className='form__item' >
          Contact:
          <input type="number" name="contact" value={formData.contact} onChange={handleChange} className='form__input' />
        </label>
        <label className='form__item' >
          Your Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className='form__input' />
        </label>
        <label className='form__item' >
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} className='form__input' />
        </label>
        <label className='form__item' >
          Grade:
          <input type="text" name="grade" value={formData.grade} onChange={handleChange} className='form__input' />
        </label>
        <button type="submit" className='form__submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form