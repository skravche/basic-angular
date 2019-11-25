import {Component} from '@angular/core';

@Component({
  selector: 'app-post-template',
  template: `<div class="post-template"><h3>Template in TS</h3><p>Lorem10</p></div>`,
  styles: [`
      .post-template {
          width: 400px;
          padding: .5rem;
          border: 1px solid red;}`]
})

export class PostTemplateComponent {
}
