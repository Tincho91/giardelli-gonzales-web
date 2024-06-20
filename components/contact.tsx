"use client"

import React, { useState } from 'react';
import Spinner from './ui/spinner';
import toast from 'react-hot-toast';


const Contact: React.FC = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email enviado exitosamente', {
          position: 'bottom-center',
        });
        // Puedes hacer más acciones aquí si es necesario después de enviar el correo
      } else {
        toast.error('Error al enviar el email. Por favor, inténtalo de nuevo.', {
          position: 'bottom-center',
        });
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);
      toast.error('Error al enviar el email. Por favor, inténtalo de nuevo.', {
        position: 'bottom-center',
      });
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <div className='bg-[#E8E8E8] pb-10'>
      <div className="mx-auto md:max-w-7xl md:px-[3%]">
        <div className="flex flex-col-reverse sm:flex-row">
          {/* Imagen */}
          <div className="w-full sm:w-1/2 h-64 sm:h-auto">
            {/* Imagen para dispositivos pequeños */}
            <img
              src="/images/contactFormS.jpg"
              alt="Contact Form Small"
              className="w-full h-full object-cover sm:hidden"
            />
            {/* Imagen para dispositivos medianos y grandes */}
            <img
              src="/images/contactForm.png"
              alt="Contact Form"
              className="w-full h-full object-cover hidden sm:block"
            />
          </div>

          {/* Formulario */}
          <div className="w-full sm:w-1/2 p-4 align-middle my-auto">
            <h2 className="text-2xl text-center text-customBlue font-bold mb-4">ENVIANOS TU CONSULTA</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Nombre y Apellido'
                  className="mt-1 p-1 w-full bg-transparent border-[2px] border-customBlue rounded-lg text-customBlue italic placeholder-gray-600"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Correo Electrónico'
                  className="mt-1 p-1 w-full bg-transparent border-[2px] border-customBlue rounded-lg text-customBlue italic placeholder-gray-600"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder='Mensaje'
                  className="mt-1 p-1 w-full bg-transparent border-[2px] border-customBlue rounded-lg text-customBlue italic placeholder-gray-600"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-1 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none focus:bg-customBlue-dark"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                >
                  {isSubmitting ? <Spinner /> : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;