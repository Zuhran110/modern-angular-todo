import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../component/greeting/greeting.component";
import { CounterComponent } from "../component/counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  homeMessage = signal("Hello , hello! 1234");
  keyupHandler( event: KeyboardEvent){
    console.log(`user pressed ${event.key} key`);
  }
}
