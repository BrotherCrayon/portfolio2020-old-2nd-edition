import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const toggleAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);