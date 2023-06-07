import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // menuList: any = [
  //   {
  //     name: 'Dashboard',
  //     subMenuList: ['Latest Updated', 'Layout Builder']
  //   }, {
  //     name: 'Features',
  //     subMenuList: ['Bootstrap', 'Custom', 'Icons', 'Cards', 'Widgets', 'Calendar', 'Charts', 'Maps', 'Miscellaneous', 'Layout Builder']
  //   }, {
  //     name: 'Crud',
  //     subMenuList: ['Form & Controls', 'KTDatatable', 'Datatable.net', 'File Upload']
  //   }, {
  //     name: 'Apps',
  //     subMenuList: ['Users', 'Profile', 'Contacts', 'Chat', 'Projects', 'Support Center', 'Todo', 'Education', 'eCommerce', 'Inbox']
  //   }, {
  //     name: 'Pages',
  //     subMenuList: ['Pricing Tables', 'Wizards', 'Invoices', 'Login', 'Classic Login', 'Error Pages']
  //   },
  // ];

  selectedMenu: any = '';
  selectedSubMenu_1: any = '';
  selectedSubMenu_2:any  = '';
  selectedSubMenu_3:any  = '';

  ngOnInit(): void {
  }

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

}
