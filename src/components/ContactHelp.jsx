import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactHelp = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_itpuhya', 'template_elvp262', form.current, 'YB-o2LYZBpBuKPxii')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className=''>
      <div className='bg-helpbg lg:bg-center bg-cover bg-no-repeat bg-[57%] sm:bg-[65%] md:bg-[68%] pt-[52px] md:pt-[60px] pb-[39px]' >
        <div className='container xl:max-w-[1320px] mx-auto md:px-6 px-[25px]'>
          <div className='flex flex-wrap flex-row'>
            <div className='lg:w-1/2' data-aos="fade-right">
              <form ref={form} onSubmit={sendEmail}>
                <input type='' placeholder='Your Name' name='user_name' className='py-[14px] px-[16px] text-[14px] font-medium leading-[142.857%] text-[#A7A7A7] 
                border border-solid border-[#025066] w-full rounded-[6px] outline-none lg:max-w-[594px] mb-[14px]'/>

                <input type='' placeholder='Phone Number' name='user_contact' className='py-[14px] px-[16px] text-[14px] font-medium leading-[142.857%] !text-[#A7A7A7] 
                border border-solid border-[#025066] w-full rounded-[6px] outline-none lg:max-w-[594px] mb-[14px]'/>

                <input type='' placeholder='E-Mail' name='user_email' className='py-[14px] px-[16px] text-[14px] font-medium leading-[142.857%] !text-[#A7A7A7] 
                border border-solid border-[#025066] w-full rounded-[6px] outline-none lg:max-w-[594px] mb-[14px]'/>
                <textarea name='message' id='' placeholder='Message' cols='30' rows='5' className='lg:max-w-[594px] w-full resize-none py-[14px] px-[16px] outline-none border !text-[#A7A7A7] border-solid border-[#025066] font-medium text-[14px] rounded-[6px]'>
                </textarea>
                <button type='submit' className='hover:shadow-[0_3px_20px_rgba(2,80,102,1)] hover:scale-[1.01] transition-all duration-500 ease-linear mt-[27px] rounded-[10px] bg-[#025066] px-[33px] py-[18px] text-[20px] font-medium text-white uppercase'>CONTACT NOW</button>
              </form>
            </div>
            <div className='lg:w-1/2 flex flex-col lg:items-end pt-[20px] lg:pt-[0]' data-aos="fade-left">
              <h3 className='lg:max-w-[348px] text-[35px] sm:text-[45px] md:text-[61px] font-normal leading-[106%] text-[#ffffff] lg:text-end m-0 pb-[20px] lg:pb-[32px]'>How we can help you?</h3>
              <p className='text-[#ffffff] text-[16px] font-normal lg:text-end lg:max-w-[331px] m-0 pb-[20px] lg:pb-[35px]'>Quisque vel nisl blandit sem tempor dignissim. Sed maximus efficitur neque</p>
              <div className='flex gap-[14px] pb-[9px] lg:text-end'>
                <p className='text-[#ffffff] text-[16px] font-normal leading-[139%] m-0'>Phone Number:</p>
                <a href='tel:1234567890' className='text-[#ffffff] text-[16px] font-normal leading-[139%] m-0'>+1235265652</a>
              </div>
              <div className='flex gap-[8px] pb-[9px] lg:text-end'>
                <p className='text-[#ffffff] text-[16px] font-normal leading-[139%] m-0'>Address:</p>
                <p className='text-[#ffffff] text-[16px] font-normal leading-[139%] m-0'>Nam convallis feugiat </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ContactHelp
