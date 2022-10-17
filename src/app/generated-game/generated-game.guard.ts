import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { GameManagementService } from "../shared/game-management.service";

@Injectable({providedIn: 'root'})
export class CanActivateGame implements CanActivate{
    constructor(private gameManagementService: GameManagementService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.gameManagementService.isGameGenerated();
    }
}