import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-submenu-component',
  templateUrl: './submenu-component.component.html',
  styleUrls: ['./submenu-component.component.scss']
})
export class SubmenuComponentComponent implements OnInit {
  @Input() menuItem: any;
  @Input() selectedSubMenu: any = '';
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() closeMenuEvent = new EventEmitter<string>();

  constructor(public eRef: ElementRef) {
  }

  ngOnInit(): void {
  }
  selectSubMenu(item: any) {
    this.selectedSubMenu = item
    this.newItemEvent.emit(item);
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: any) {
    if (!this.eRef.nativeElement.contains(event?.target)) {
      this.closeMenuEvent.emit();
      console.log('asd')
    }
  }
}
