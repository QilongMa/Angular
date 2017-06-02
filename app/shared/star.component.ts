/**
 * Created by John on 5/27/2017.
 */
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number = 4;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86 / 5;
    }
    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}