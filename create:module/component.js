module.exports = `
import { Component } from '@angular/core'

@Component({
    templateUrl: './{moduleName}.component.html',
    styleUrls: ['./{moduleName}.component.scss']
})

export class {moduleNameFirstUpper}Component { }
`;