import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'assets/gallery1.jpg', alt: 'نمونه کار ۱' },
    { src: 'assets/gallery2.jpg', alt: 'نمونه کار ۲' },
    { src: 'assets/gallery3.jpg', alt: 'نمونه کار ۳' },
    { src: 'assets/gallery4.jpg', alt: 'نمونه کار ۴' },
    { src: 'assets/gallery5.jpg', alt: 'نمونه کار ۵' },
    { src: 'assets/gallery6.jpg', alt: 'نمونه کار ۶' }
  ];
}
