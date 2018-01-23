module.exports = `
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { {moduleNameFirstUpper}RoutingComponents, {moduleNameFirstUpper}RoutingModule } from './{moduleName}-routing.module'

@NgModule({
    declarations: [
        {moduleNameFirstUpper}RoutingComponents
    ],
    imports: [
        CommonModule,
        {moduleNameFirstUpper}RoutingModule
    ]
})

export class {moduleNameFirstUpper}Module { }
`;