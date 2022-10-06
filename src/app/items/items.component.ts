import { Component, OnInit } from '@angular/core';
import { ItemModel } from './_models/item.model';
import { Observable, Subject,throwError, of , BehaviorSubject} from 'rxjs';
import { ItemsService } from './_services/items.service';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;
  url = 'users'
  FriendsList :any;

  constructor(
    private itemsService: ItemsService,
    public httpService : HttpServiceService
  ) { }

  ngOnInit() {
    this.getDataForFriends();
    this.items$  = this.itemsService.items$;
  }

  hasItems(items: ItemModel[]): boolean {
    return items && items.length > 0 ? true : false;
  }

  public getDataForFriends(): void {
    this.httpService.getData(this.url).subscribe(data => {
      this.FriendsList = data;
      console.log(this.FriendsList,'friends')
    })

  }

}
