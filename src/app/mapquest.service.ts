import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MapquestService {
  private apiKey = 'YOUR_MAPQUEST_API_KEY_HERE';
  private apiUrl = 'https://www.mapquestapi.com/directions/v2/route';

  // Create BehaviorSubjects to store data
  private directionsDataSubject = new BehaviorSubject<any>(null);
  directionsData$ = this.directionsDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getDirections(from: string, to: string) {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('from', from)
      .set('to', to);

    this.http.get(this.apiUrl, { params }).subscribe(
      (response: any) => {
        this.directionsDataSubject.next(response);
      },
      (error) => {
        console.error('Error fetching directions:', error);
      }
    );
  }
}
