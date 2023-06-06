import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuList: any = [
    {
      name: 'Dashboard',
      subMenuList: ['Latest Updated', 'Layout Builder']
    }, {
      name: 'Features',
      subMenuList: ['Bootstrap', 'Custom', 'Icons', 'Cards', 'Widgets', 'Calendar', 'Charts', 'Maps', 'Miscellaneous', 'Layout Builder']
    }, {
      name: 'Crud',
      subMenuList: ['Form & Controls', 'KTDatatable', 'Datatable.net', 'File Upload']
    }, {
      name: 'Apps',
      subMenuList: ['Users', 'Profile', 'Contacts', 'Chat', 'Projects', 'Support Center', 'Todo', 'Education', 'eCommerce', 'Inbox']
    }, {
      name: 'Pages',
      subMenuList: ['Pricing Tables', 'Wizards', 'Invoices', 'Login', 'Classic Login', 'Error Pages']
    },
  ];

  selectedMenu: any = '';
  selectedSubMenu: any = '';
  rightselection: any = 'right-panel';
  selectedTab: any = 'alert';

  ngOnInit(): void {
    // this.selectedMenu = 'Dashboard';
  }

  toggleMenu(item: any) {
    if (this.selectedMenu == item.name) {
      this.selectedMenu = ''
    } else {
      setTimeout(() => {
        this.selectedMenu = item.name
      }, 100)
    }

  }

  selectSubMenuItem(item: any) {
    this.selectedSubMenu = item
  }

  closeMenu($event: any) {
    this.selectedMenu = ''
  }

  selectRightItem(type: string) {
    if(this.rightselection == type){
      this.rightselection = ''
    }else{
      this.rightselection = type
    }
  }

  selectedNotifyTab(type: string) {
    if(this.selectedTab == type){
      this.selectedTab = ''
    }else{
      this.selectedTab = type
    }
  }
}
