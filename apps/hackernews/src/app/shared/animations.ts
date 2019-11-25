import { animation, animate, style } from '@angular/animations';

export const fadeIn = animation([
  style({
    opacity: '0',
    transform: 'translateY({{ translateY }})'
  }),
  animate('1s ease-out')
]);
