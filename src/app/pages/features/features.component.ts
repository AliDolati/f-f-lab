import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: '🦷',
      title: 'روکش‌های دندانی دیجیتال',
      description: 'ساخت دقیق و سریع روکش‌های دندانی با فناوری CAD/CAM و پرینت سه‌بعدی.'
    },
    {
      icon: '⚙️',
      title: 'پشتیبانی از کلینیک‌ها',
      description: 'سیستم ارتباط آنلاین بین پزشک و لابراتوار برای ثبت و پیگیری سفارش‌ها.'
    },
    {
      icon: '🧪',
      title: 'مواد باکیفیت جهانی',
      description: 'استفاده از بهترین مواد سرامیکی و زیرکونیا با استانداردهای اروپایی.'
    },
    {
      icon: '🚀',
      title: 'تحویل سریع و مطمئن',
      description: 'تحویل دقیق سفارش‌ها با زمان‌بندی شفاف و رهگیری دیجیتال.'
    }
  ];
}
