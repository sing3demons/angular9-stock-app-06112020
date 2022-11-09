import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend'
  btnTitle = ''

  seyHi(msg: string) {
    console.log(msg)

    this.btnTitle = msg
  }
}
