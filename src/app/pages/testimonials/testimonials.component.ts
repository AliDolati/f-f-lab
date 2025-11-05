import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'دکتر نادری',
      role: 'دندان‌پزشک زیبایی',
      image: 'assets/clients/client1.jpg',
      text: 'همکاری با این لابراتوار باعث افزایش سرعت کار و کیفیت روکش‌های من شد. تیم بسیار حرفه‌ای هستند.'
    },
    {
      name: 'دکتر رضایی',
      role: 'ایمپلنتولوژیست',
      image: 'assets/clients/client2.jpg',
      text: 'دقت ساخت و پشتیبانی فوق‌العاده‌ست! با اطمینان می‌تونم بگم بهترین تجربه کاری من تا الان بوده.'
    },
    {
      name: 'دکتر امینی',
      role: 'پروتز دندانی',
      image: 'assets/clients/client3.jpg',
      text: 'لابراتوار مدرن و مجهز، ارتباط دیجیتال سریع و خروجی بی‌نقص. حتماً توصیه می‌کنم.'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
