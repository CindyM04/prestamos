import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-rango',
  templateUrl: './input-rango.component.html',
  styleUrls: ['./input-rango.component.css']
})
export class InputRangoComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  
  max = 50000;
  min = 1000;
  showTicks = false;
  step = 500;
  thumbLabel = false;
  value = 1000;
  vertical = false;
  tickInterval = 1;
  constructor() { }

  ngOnInit(): void {
   /* formatLabel(value: number) {
    if (value >= 1000) {
      return "$ "+Math.round(value / 1000) ;
    }

    return value;
  }*/
  }
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

}
