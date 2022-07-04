import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
  group,
  animateChild,
  sequence,
} from '@angular/animations';

export const fadeIn = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%', zIndex: 2 }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
