import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';
//import { Server } from 'http';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  // added viewchild, linked to #heading in html, creating ElementRef
  @ViewChild('heading', { static: true}) header: ElementRef;
  //use contentParagraph selector, as built in app.component.html, store in ElementRef
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

   //good to use if you want to do something with previous value upon changing, like storing in DB, before it's dumped
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called');
    //console log uses textContent from element ref built by viewchild to display text 
    //won't show anything oninit because it hasn't been called yet
    console.log('Text content: ' + this.header.nativeElement.textContent);
    //like viewchild above, contentchild below won't display anything in oninit
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
    //text content will be displayed because it's been built by the time afterviewinit comes in to play
    console.log('Text content:' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');

  }

  ngOnDestroy() {
    console.log('ngOnDestory Called!')
  }

}
