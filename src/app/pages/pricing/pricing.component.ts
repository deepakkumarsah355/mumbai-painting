import { Component } from '@angular/core';
import pdfMake from '../../utils/pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = (pdfFonts as any).vfs;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
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

  surfaceTypes = [
    { name: 'Window' },
    { name: 'Gate' },
    { name: 'Washroom' },
    { name: 'Ceiling' },
    { name: 'Wall' }
  ];

  coupons = [
    { name: 'TRYNEW', discount: 10 },
    { name: 'ONEUSER', discount: 20 },
    { name: 'FESTIVE50', discount: 50 },
    { name: 'PAINT10', discount: 10 },
    { name: 'SAVE25', discount: 25 }
  ];

  selectedPlan = '';
  selectedBrand = '';
  selectedSurface = '';
  selectedRate = 0;
  selectedCoupon = '';
  discount = 0;
  length = 0;
  breadth = 0;
  total = 0;
  discountedTotal = 0;

  updateRate(): void {
    this.total = 0;
    this.discountedTotal = 0;
  }

  calculateTotal(): void {
    const area = this.length * this.breadth;
    this.total = area * this.selectedRate;
    this.applyCoupon();
  }

  applyCoupon(): void {
    const coupon = this.coupons.find(c => c.name === this.selectedCoupon);
    if (coupon) {
      this.discount = coupon.discount;
      this.discountedTotal = this.total - (this.total * this.discount / 100);
    } else {
      this.discount = 0;
      this.discountedTotal = this.total;
    }
  }

  downloadInvoice(): void {
  const area = this.length * this.breadth;

  const docDefinition: any = {
    content: [
      { text: 'Painting Service Invoice', style: 'header' },
      { text: `Date: ${new Date().toLocaleDateString()}`, alignment: 'right', margin: [0, 0, 0, 10] },
      { text: 'Customer Selection Details', style: 'subheader' },
      {
        table: {
          widths: ['*', '*'],
          body: [
            ['Plan Type', this.selectedPlan || 'N/A'],
            ['Paint Brand', this.selectedBrand || 'N/A'],
            ['Surface Type', this.selectedSurface || 'N/A'],
            ['Material Rate (₹/sq.ft)', this.selectedRate.toString()],
            ['Length (ft)', this.length.toString()],
            ['Breadth (ft)', this.breadth.toString()],
            ['Total Area (sq.ft)', area.toString()],
            ['Total Price (₹)', this.total.toFixed(2)],
            ['Coupon Applied', this.selectedCoupon || 'None'],
            ['Discount (%)', this.discount.toString()],
            ['Final Price (₹)', this.discountedTotal.toFixed(2)]
          ]
        },
        layout: 'lightHorizontalLines'
      },
      { text: '\nThank you for choosing our painting services!', style: 'footer' }
    ],
    styles: {
      header: {
        fontSize: 20,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      footer: {
        margin: [0, 20, 0, 0],
        alignment: 'center',
        italics: true
      }
    }
  };

  pdfMake.createPdf(docDefinition).download('Painting_Invoice.pdf');
}
}
