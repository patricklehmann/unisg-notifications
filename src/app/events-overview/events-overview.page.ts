import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events-overview',
  templateUrl: './events-overview.page.html',
  styleUrls: ['./events-overview.page.scss'],
})
export class EventsOverviewPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  public galleries: Array<any> = [];
  // public galleriesLoading: boolean = false;

  public ngOnInit(): void {
    this.loadGalleries();
  }

  private loadGalleries(): void {
    this.http.get('https://squibble.me/api/v2/public/patricklehmann-punkt-ch-photography/photography/galleries')
    .subscribe(
      (data: any) => {
        this.galleries = data.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
