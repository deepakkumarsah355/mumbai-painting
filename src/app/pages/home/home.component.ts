import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   consultationData = {
    name: '',
    mobile: '',
    description: ''
  };

  services = [
    {
      title: 'Interior Painting',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful, smooth finishes for every room. Customized to your mood, space, and décor.'
    },
    {
      title: 'Exterior Painting',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
      description: 'Weather-resistant paints that enhance curb appeal and protect your home’s exterior.'
    }

    ,
    {
      title: 'Wall Texturing',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      description: 'From stucco to artistic textures — add dimension and personality to your walls.'
    },
    {
      title: 'Furniture Finishing',
      image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80',
      description: 'Give your old furniture a fresh, custom finish with our professional spray and brush techniques.'
    }
  ];



  whyPoints: string[] = [
    "High-quality materials used for every project.",
    "Experienced professionals with a passion for design.",
    "Custom solutions tailored to your unique needs.",
    "High-quality materials used for every project."
  ];

  testimonials = [
    { name: 'Ankit Sharma', feedback: 'Excellent job! The colors and finishing exceeded our expectations.' },
    { name: 'Priya Mehra', feedback: 'Very professional and responsive team. Highly recommend!' },
    { name: 'Rahul Verma', feedback: 'They completed our full house within the promised time. Great quality.' }
  ];

  projectImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Blue & white modern living room
    'https://images.pexels.com/photos/4107280/pexels-photo-4107280.jpeg?auto=compress&cs=tinysrgb&w=800', // Man painting wall with roller
    'https://images.pexels.com/photos/5691601/pexels-photo-5691601.jpeg?auto=compress&cs=tinysrgb&w=800', // Paint bucket & tools
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'  // Living room with vibrant walls
  ];

  // Function to handle form submission
  // Function to handle form submission
  submitMessage() {
    console.log(this.consultationData)
    emailjs.send(
      'service_fwrmoyj',       // Your EmailJS Service ID
      'template_np3r8vl',      // Your EmailJS Template ID
      this.consultationData,
      '5_VB4VLmcG_30keRL'       // Your EmailJS Public Key
    ).then(() => {
      alert('Thank you! We got your data.');
      window.location.reload();
    }).catch((err) => {
      console.error('Email sending error:', err);
      window.location.reload();
      alert('Error sending message. Please try again.');
    });
  }
}


