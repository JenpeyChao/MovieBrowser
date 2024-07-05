import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() id:any;
  @Input() poster:any;
  @Input() title:any;
  @Input() year:any;
  @Input() rated:any;
  @Input() genre:any;
  @Input() released:any;
  @Input() actors:any;
  @Input() writer:any;
  @Input() director:any;
  @Input() runtime:any;

}
