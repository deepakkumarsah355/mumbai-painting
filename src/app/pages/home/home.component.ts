import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    { title: 'Interior Painting', description: 'Modern finishes and colors to brighten up your home.' },
    { title: 'Exterior Painting', description: 'Durable and beautiful finishes to protect and impress.' },
    { title: 'Texture & Design', description: 'Unique wall textures and artistic designs.' },
    { title: 'Furniture Painting', description: 'Custom finishes for wood and metal furniture.' },
  ];

  whyPoints = [
    'Trained & Verified Professionals',
    'High-Quality Eco-Friendly Paints',
    'On-Time Delivery',
    'Affordable Pricing with Warranty'
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


}


