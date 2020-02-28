import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { Photo } from '../../model/photo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  photos: Photo;
  photoURL: string;
  constructor(private photoSerive: PhotoService) { }

  ngOnInit() {
    this.photoSerive.getPhotos().subscribe(data => {
      data = this.photos;
      console.log(data);

    })
  }

}
