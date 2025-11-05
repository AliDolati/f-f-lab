import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'دکتر علی رضایی', text: 'خدمات سریع و دقیق، خیلی راضی هستم.', img: 'assets/testimonial1.jpg' },
    { name: 'دکتر سارا محمدی', text: 'کیفیت مواد عالی و پشتیبانی خوب.', img: 'assets/testimonial2.jpg' },
    { name: 'دکتر رضا کریمی', text: 'تجربه حرفه‌ای و رضایت‌بخش.', img: 'assets/testimonial3.jpg' }
  ];
  current = 0;

  next() {
    this.current = (this.current + 1) % this.testimonials.length;
  }
  prev() {
    this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
