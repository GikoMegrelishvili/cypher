import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  @Input() isEditing = false;
  @Input() songColor = 'rgb(199 194 255)';

  @Output() createAnnotationClicked = new EventEmitter<void>();
  @Output() editLyricsClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onCreateAnnotationClick(): void {
    this.createAnnotationClicked.emit();
  }
  onEditLyricsClick(): void {
    this.editLyricsClicked.emit(true);
  }
  onStopEditClick(): void {
    this.editLyricsClicked.emit(false);
  }
}
