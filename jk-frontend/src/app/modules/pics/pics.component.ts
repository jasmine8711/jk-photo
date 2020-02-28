import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/photo.service';
import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {
  photos: Photo;
  constructor(private photoSerive: PhotoService) { }

  ngOnInit() {
    this.photoSerive.getPhotos().subscribe(data => {
      this.photos = data;
      console.log(this.photos)

    }
    )
  }

}
