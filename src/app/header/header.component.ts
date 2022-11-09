import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('toggle') navToggle = new EventEmitter()
  @Output() seyHello = new EventEmitter<string>()

  emailBadge: number = 100
  notiBadge: number = 10

  constructor() {}

  onClickNavToggle(): void {
    this.navToggle.emit()
    this.seyHello.emit('hello')
  }

  ngOnInit(): void {}
}
