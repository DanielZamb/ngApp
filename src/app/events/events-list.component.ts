import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

    @Component({
        template: `
        <div>
            <h1>Proximos Eventos de Angular</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event] = "event" ></event-thumbnail>
                </div>
            </div>  
        </div>`
    })
export class EventsListComponent implements OnInit{
    public events:any[]
    constructor(private eventService:EventService,private toastr:ToastrService){}
    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
    handleThumbnailClick(eventName:String){
        this.toastr.success(eventName)
    }
}