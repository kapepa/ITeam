import { Component } from '@angular/core';
import { interval, Subscription } from "rxjs";
import { BtnColorEnum, TextEnum } from "../../utility";

interface timeProps {
  hh: number,
  mm: number,
  ss: number,
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  protected readonly TextEnum = TextEnum;
  protected readonly BtnColorEnum = BtnColorEnum;

  timer: timeProps = {hh: 0, mm: 0, ss: 0};
  toggle: boolean = false;
  wait: Subscription | undefined;
  intervalLaunch: Subscription | undefined;
  waitFeature: boolean = false;

  onStartTimer (): void {
    if(!this.toggle || this.waitFeature) {
      this.toggle = true;
      this.waitFeature = false;
      this.timeReset();
    }
  }

  onStopTimer(): void {
    this.toggle = !this.toggle;
    if (this.intervalLaunch) this.intervalLaunch.unsubscribe();
  }

  onWaitTimer(): void {
    if(!!this.wait) {
      this.waitFeature = true;
      this.wait?.unsubscribe();
    }

    this.wait = interval(300).subscribe(() => {
      this.wait?.unsubscribe();
    })
  }

  onResetTimer(): void {
    this.toggle ? this.timeReset() : this.setDefaultTimer();
  }

  changeTime() {
    const {hh, mm, ss} = this.timer;

    if(ss < 59) this.timer = {hh, mm, ss: ss + 1};
    if(ss === 59) this.timer = {hh, mm: mm + 1, ss: 0};
    if(mm === 59) this.timer = {hh: + 1, mm: 0, ss: 0};
  }

  timeReset() {
    this.setDefaultTimer();
    if (!!this.intervalLaunch) this.intervalLaunch.unsubscribe()

    this.intervalLaunch = interval(1000).subscribe(() => {
      this.changeTime();
    })
  }

  setDefaultTimer () {
    this.timer = {hh: 0, mm: 0, ss: 0};
  }

  get counter (): string {
    const hh: string = this.timeStyle(this.timer.hh);
    const mm: string = this.timeStyle(this.timer.mm);
    const ss: string = this.timeStyle(this.timer.ss);

    return `${hh}:${mm}:${ss}`
  }

  timeStyle(digit: number): string {
    return digit < 10 ? `0${digit}` : `${digit}`;
  }
}
