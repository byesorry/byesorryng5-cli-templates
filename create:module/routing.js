module.exports =  `
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { {moduleNameFirstUpper}Component } from './{moduleName}.component'

export const {moduleNameFirstUpper}RoutingComponents = [
    {moduleNameFirstUpper}Component
]

const {moduleName}Routes: Routes = [
    { path: '', component: {moduleNameFirstUpper}Component }
]

@NgModule({
    imports: [RouterModule.forChild({moduleName}Routes)],
    exports: [RouterModule]
})

export class {moduleNameFirstUpper}RoutingModule { }
`