import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans = ['Standard', 'Premium', 'Ultimate'];
  brands = ['Asian Paints', 'Nerolac', 'Opus', 'Dulux', 'Berger'];

  materials = [
    { name: 'Interior Emulsion', rate: 12 },
    { name: 'Exterior Emulsion', rate: 15 },
    { name: 'Enamel Paint', rate: 20 },
    { name: 'Distemper', rate: 10 }
  ];

  selectedPlan = '';
  selectedBrand = '';
  selectedRate = 0;
  length = 0;
  breadth = 0;
  total = 0;

  updateRate(): void {
    this.total = 0; // Reset total on material change
  }

  calculateTotal(): void {
    const area = this.length * this.breadth;
    this.total = area * this.selectedRate;
  }

  downloadInvoice(): void {
    const area = this.length * this.breadth;
    const documentDefinition: any = {
      content: [
        { text: '🎨 Painting Invoice', style: 'header' },
        { text: new Date().toDateString(), alignment: 'right' },

        { text: '\nCustomer Selection\n', style: 'subheader' },

        {
          table: {
            widths: ['*', '*'],
            body: [
              ['Plan Type', this.selectedPlan || 'N/A'],
              ['Brand', this.selectedBrand || 'N/A'],
              ['Rate (₹/sq.ft)', this.selectedRate || 0],
              ['Length (ft)', this.length || 0],
              ['Breadth (ft)', this.breadth || 0],
              ['Total Area (sq.ft)', area],
              ['Total Price (₹)', this.total || 0],
            ]
          }
        },

        { text: '\nThank you for choosing our service!', style: 'footer' }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        footer: {
          margin: [0, 20, 0, 0],
          italics: true,
          alignment: 'center'
        }
      }
    };

    pdfMake.createPdf(documentDefinition).download('Painting_Invoice.pdf');
  }
}
