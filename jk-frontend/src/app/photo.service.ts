import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Photo } from './model/photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  isOpened = new BehaviorSubject(true);
  constructor(private http: HttpClient) { }


  public getPhotos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
