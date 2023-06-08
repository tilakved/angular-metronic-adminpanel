import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedMenu: any = '';
  selectedSubMenu_1: any = '';
  selectedSubMenu_2: any = '';
  selectedSubMenu_3: any = '';
  selectedRightMenu: any = '';
  selectedNotifyCategory: any = 'alert';
  selectedQuickPanelCategory: any = 'audit_logs';
  constructor(public eRef: ElementRef, public helper:HelperService ) { }
  ngOnInit(): void {
  }
  // @HostListener('document:click', ['$event'])
  // documentClick(event:any) {
  //   if (!this.eRef.nativeElement.contains(event.target)) {
  //     this.selectedRightMenu = ''
  //   }
  // }
  toggleMenu(item: any) {
    if (this.selectedMenu == item) {
      this.selectedMenu = ''
    } else {
      // setTimeout(() => {
      this.selectedMenu = item
      // }, 100)
    }
    this.selectedSubMenu_1 = ''
    this.selectedSubMenu_2 = ''
    this.selectedSubMenu_3 = ''
  }

  toggleSubMenu_1(item: any) {
    if (this.selectedSubMenu_1 == item) {
      this.selectedSubMenu_1 = ''
    } else {
      // setTimeout(() => {
      this.selectedSubMenu_1 = item
      // }, 100)
    }
    this.selectedSubMenu_2 = ''
    this.selectedSubMenu_3 = ''
  }

  toggleSubMenu_2(item: any) {
    if (this.selectedSubMenu_2 == item) {
      this.selectedSubMenu_2 = ''
    } else {
      // setTimeout(() => {
      this.selectedSubMenu_2 = item
      // }, 100)
    }
    this.selectedSubMenu_3 = ''
  }

  toggleSubMenu_3(item: any) {
    if (this.selectedSubMenu_3 == item) {
      this.selectedSubMenu_3 = ''
    } else {
      // setTimeout(() => {
      this.selectedSubMenu_3 = item
      // }, 100)
    }
  }

  toggleRightMenu(item: any) {
    if (this.selectedRightMenu == item) {
      this.selectedRightMenu = ''
    } else {
      // setTimeout(() => {
      this.selectedRightMenu = item
      // }, 100)
    }
    this.selectedMenu = ''
    this.selectedSubMenu_1 = ''
    this.selectedSubMenu_2 = ''
    this.selectedSubMenu_3 = ''
  }

  notifyToggle(item: any) {
    this.selectedNotifyCategory = item
  }
  quickPanelToggle(item: any) {
    this.selectedQuickPanelCategory = item
  }

  languageChange(lang:any) {
    this.helper.common.language = lang
    this.toggleRightMenu(this.selectedRightMenu)
  }
}
