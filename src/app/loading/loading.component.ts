import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading:Subject<boolean>=this.loadersrvices.isLoading;
  constructor(private loadersrvices:LoaderService){}

}
