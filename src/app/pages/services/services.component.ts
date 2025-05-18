import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

   services = [
    {
      title: 'Interior Design & Painting',
      description: 'Transform your interiors with stunning colors, textures, and elegant design that reflect your taste and personality.',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Exterior Services',
      description: 'Boost your home’s curb appeal and protection with our high-quality exterior painting and care services.',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Furniture Finishing',
      description: 'Give your furniture a modern finish or restore its vintage charm with professional-grade techniques and care services.',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80'
    }
  ];
}
