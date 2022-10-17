import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HowToPlayRoutingModule } from "./how-to-play-routing-module";
import { HowToPlayComponent } from "./how-to-play.component";

@NgModule({
    declarations: [
        HowToPlayComponent
    ],
    imports: [
        RouterModule,
        HowToPlayRoutingModule,
        CommonModule
    ]
})
export class GeneratedGameModule {}