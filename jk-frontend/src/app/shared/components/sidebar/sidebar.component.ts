import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../photo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpened: boolean;
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.isOpened.subscribe(data => {
      this.isOpened = data;
    })

  }
  toggleSidebar() {
    this.photoService.isOpened.next(!this.isOpened)
  }

}
