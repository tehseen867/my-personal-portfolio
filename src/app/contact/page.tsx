"use client";
import React, { useEffect, useState, FormEvent } from "react";
import client from '@/sanity/lib/client';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

 function Contact() {
  type ContentType = {
    heading: string;
    subHeading: string;
  };

  type ContactType = {
    contact: {
      phoneNumber: string;
      email: string;
    };
  };

  const [content, setContent] = useState<ContentType | null>(null);
  const [contact, setContact] = useState<ContactType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contentQuery = `*[_type == "contactPage"]{
          heading,
          subHeading
        }`;
        const contactQuery = `*[_type == "socialInformation"]{
          contact {
            phoneNumber,
            email
          }
          }`;

        const contentRes = await client.fetch(contentQuery);
        const contactRes: ContactType[] = await client.fetch(contactQuery);
        
        setContent(contentRes.pop() || null);
        setContact(contactRes.pop() || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  async function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const target = e.target as HTMLFormElement;
    const firstname = target.firstName as HTMLInputElement;
    const lastname = target.lastName as HTMLInputElement;
    const email = target.email as HTMLInputElement;
    const phone = target.phoneNumber as HTMLInputElement;
    const message = target.message as HTMLTextAreaElement;

    let isValid = true;
    const nameRegex = /\d/;
    
    // Validation
    [firstname, lastname].forEach(input => {
      if (nameRegex.test(input.value)) {
        input.style.border = "1px solid red";
        isValid = false;
      } else {
        input.style.border = "";
      }
    });

    if (!/\S+@\S+\.\S+/.test(email.value)) {
      email.style.border = "1px solid red";
      isValid = false;
    } else {
      email.style.border = "";
    }

    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (!phoneRegex.test(phone.value)) {
      phone.style.border = "1px solid red";
      isValid = false;
    } else {
      phone.style.border = "";
    }

    if (!isValid) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all fields correctly.",
        icon: "error"
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "95cefb2c-b7f4-407f-bcff-ad7c91f1669f",
          from: "this email comes from your portfolio",
          name: `${firstname.value} ${lastname.value}`,
          email: email.value,
          "Phone number": phone.value,
          message: message.value,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        target.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to send message. Please try again later.",
          icon: "error"
        });
      }
    } catch (error) {
     console.log("oops something went wrong!",error)
    }
  }

  if(loading){
    return <div className='flex h-screen items-center text-white justify-center gap-4 p-4 text-4xl'>loading...</div>

}

  return (
    <div className="flex justify-center items-center md:py-32 pt-20 pb-28 ">
      <div className="relative w-full flex justify-center flex-wrap-reverse gap-y-10 gap-x-20 items-center">
        <form onSubmit={handleSend} method="post" className="md:w-full w-80 max-w-[500px] bg-gray-950 border border-gray-800 rounded-lg md:p-8 p-6 h-auto">
          <div className="grid grid-cols-1 gap-y-4">
            <div className="mb-2">
              <p className="text-white font-sans font-light md:text-4xl text-4xl mb-1 tracking-wider capitalize">{content?.heading}</p>
              <p className="md:text-xl text-[15px] font-sans font-light tracking-wider text-stone-400">{content?.subHeading}</p>
            </div>
            <div className="flex gap-x-10 flex-wrap md:flex-nowrap gap-y-4">
              <input type="text" name="firstName" id="firstName" required placeholder="First name" className="bg-gray-900 text-white p-2 rounded-[2px] text-lg w-full md:w-[197px] placeholder:font-sans placeholder:font-light font-sans font-light focus:outline-none" />

              <input type="text" name="lastName" id="lastName" placeholder="Last name (Optional)" className="bg-gray-900 text-white p-2 rounded-[2px] text-lg w-full md:w-[197px] placeholder:font-sans placeholder:font-light font-sans font-light focus:outline-none" />

            </div>
            <input type="email" required name="email" id="email" placeholder="Email Address" className="bg-gray-900 text-white p-2 rounded-[2px] focus:outline-none text-lg w-auto placeholder:font-sans placeholder:font-light font-sans font-light" />

            <input type="text" name="phoneNumber" id="phoneNumber" required placeholder="Phone Number" className="bg-gray-900 text-white p-2 rounded-[2px] text-lg w-auto placeholder:font-sans placeholder:font-light font-sans font-light focus:outline-none" />

            <textarea name="message" required id="message" placeholder="Type your message here" className="bg-gray-900 focus:outline-none rounded-[2px] text-white p-2 text-lg w-auto h-24 placeholder:font-sans placeholder:font-light font-sans font-light mt-3 mb-1"></textarea>
            
            <button className="bg-blue-700 text-white py-1 rounded-sm font-sans text-xl">Send Message</button>
          </div>
        </form>
        <div className="grid grid-cols-1 gap-y-10">
          <div className="flex gap-x-3">
            <div className="flex justify-center items-center bg-gray-900 px-2 rounded-md">
              <FaPhoneAlt className="text-blue-700 size-6 md:size-10 items-center" />
            </div>
            <div className="grid grid-cols-1 leading-tight">
              <p className="text-gray-400 text-lg">Phone</p>
              <p className="text-white md:text-xl text-[15px]">{contact?.contact.phoneNumber}</p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex justify-center items-center bg-gray-900 px-2 rounded-md">
              <FaEnvelope className="text-blue-700 size-6 md:size-10 items-center" />
            </div>
            <div className="grid grid-cols-1 leading-tight">
              <p className="text-gray-400 text-lg">Email</p>
              <p className="text-white md:text-xl text-[15px]">{contact?.contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

        export default Contact