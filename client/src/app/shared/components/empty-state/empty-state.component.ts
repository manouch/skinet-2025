import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { c } from "../../../../../node_modules/@angular/cdk/a11y-module.d--J1yhM7R";

@Component({
  selector: 'app-empty-state',
  imports: [MatIcon, MatButton, RouterLink],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {

}
