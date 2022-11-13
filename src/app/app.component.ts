import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'frontend'
  btnTitle = ''
  mobileQueyMax: MediaQueryList
  private _mobileQueryListener: () => void

  constructor(changeDetector: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQueryListener = () => changeDetector.detectChanges()
    this.mobileQueyMax = media.matchMedia('(max-width: 600px)')
    this.mobileQueyMax.addListener(this._mobileQueryListener)
  }
  ngOnDestroy(): void {
    this.mobileQueyMax.removeListener(this._mobileQueryListener)
  }

  seyHi(msg: string) {
    this.btnTitle = msg
  }
}
