import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'todo-controls',
    templateUrl: './todo-controls.component.html',
    styleUrls: ['./todo-controls.component.scss'],
})
export class TodoControlsComponent implements OnInit {

    @Output() controlEvent = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    segmentChanged(ev: any) {
        this.controlEvent.emit(ev);
    }


}
