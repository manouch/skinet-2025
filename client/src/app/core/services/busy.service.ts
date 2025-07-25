import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  loading = false;
  busiRequestCount = 0;

  busy() {
    this.busiRequestCount++;
    this.loading = true;
  }

  idle() {
    this.busiRequestCount--;
    if (this.busiRequestCount <= 0){
      this.busiRequestCount = 0;
      this.loading = false;
    }
  }
}
