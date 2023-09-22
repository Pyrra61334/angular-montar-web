import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  @Input()
  public characterList: Character[] = [{name: 'Trunks', power: 10}]
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  public onDeleteCharacter(Id?: string):void{
    if (!Id) return;
    console.log(Id)
    this.onDelete.emit(Id);
  }
}
