import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroTitle = 'خوش آمدید به لابراتوار دندانپزشکی ما';
  heroSubtitle = 'تخصص ما در ساخت روکش و پروتزهای دیجیتال با کیفیت است';
  
  sliderImages = [
    'assets/images/slider1.jpg',
    'assets/images/slider2.jpg',
    'assets/images/slider3.jpg',
    'assets/images/slider4.jpg'
  ];

  features = [
    { icon: 'medical_services', title: 'روکش دیجیتال', desc: 'ساخت دقیق و سریع روکش‌های دندان با تکنولوژی CAD/CAM' },
    { icon: 'precision_manufacturing', title: 'پروتز سفارشی', desc: 'پروتزهای کامل و جزئی با طراحی اختصاصی هر بیمار' },
    { icon: 'support_agent', title: 'پشتیبانی حرفه‌ای', desc: 'پشتیبانی و مشاوره تخصصی برای کلینیک‌ها و پزشکان' }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }
}
