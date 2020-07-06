import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"test",name:"durga",content:"just a test"}];  
  onServerAdded(srvDatat:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: srvDatat.serverName,
      content: srvDatat.serverContent
    });
  }

  onBlueprint(blueDatat:{servName:string,servContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueDatat.servName,
      content: blueDatat.servContent
    });
  }
}
