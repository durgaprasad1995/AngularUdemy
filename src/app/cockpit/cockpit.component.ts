import { Component, OnInit ,EventEmitter, Output, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None //it will not add any annayomis word to the elements,Native uses the shadow dom techonglgy
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter <{serverName:string,serverContent:string}>();//which allows to emit your own events
 @Output('bpcreated') blueprintCreated=new EventEmitter <{servName:string,servContent:string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverContentLocal) {
console.log(serverContentLocal.value)
  this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({servName:this.newServerName,servContent:this.newServerContent})

  }
}
