import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CardComponent } from '../shared/card/card.component'

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Output() select = new EventEmitter<string>();
  // select = output<string>();



  // imagePath = computed(() => {
  //   return '../../assets/users/' + this.avatar();
  // });

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
