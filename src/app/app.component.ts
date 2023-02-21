import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '08-Output';

  onomatopiaList: string[];

  constructor(){
    this.onomatopiaList = [
      "Aïe !", "Outch!"
    ];
  }

  onReceiveNewOnomatopia(newOnomatopia: string): void{
    this.onomatopiaList.push(newOnomatopia);
  }
}
