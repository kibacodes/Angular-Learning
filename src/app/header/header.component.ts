import { Component } from "@angular/core";

// set standalone to true if angular version is below 19
// else do not mention it, since it is not needed then.
// standalone property is true also means that this component
// is a standalone component. Else, it is a module based component.
@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})

export class HeaderComponent {}