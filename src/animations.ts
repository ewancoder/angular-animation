import { AnimationEntryMetadata } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/core';

export const animations: AnimationEntryMetadata[] = [
    trigger('dropdown', [
        transition(':enter', [
            style({
                transform: 'translateY(-20%)',
                opacity: 0
            }),
            animate('100ms', style({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ]),
        transition(':leave', [
            style({
                transform: 'translateY(0)',
                opacity: 1
            }),
            animate('100ms', style({
                transform: 'translateY(-20%)',
                opacity: 0
            }))
        ])
    ])
];
