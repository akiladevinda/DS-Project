import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdvertismentService } from '../_services/advertisment.service';

@Component({
  selector: 'app-item-popup',
  templateUrl: './item-popup.component.html',
  styleUrls: ['./item-popup.component.scss']
})
export class ItemPopupComponent implements OnInit {
  element: any;

  constructor(private matDialogRef: MatDialogRef<ItemPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private advertismentService: AdvertismentService) {
    this.element  = data['element'];
    console.log(this.element);
  }

  ngOnInit() {
  }

  cancelPopup() {
    this.matDialogRef.close();
  }

}
