import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  private flowerData: any[] = [];

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/flowers').pipe(
      tap((data) => {
        this.flowerData = data; // Save fetched data to flowerData
      })
    );
  }

  getFlowerImages(): any {
    return this.flowerData;
  }
}
