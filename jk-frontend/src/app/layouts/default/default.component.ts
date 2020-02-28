import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  isOpened: boolean;
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.isOpened.subscribe(data => this.isOpened = data)
  }

}
