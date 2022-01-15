import { Injectable } from "@angular/core";

@Injectable()
export class MenuTopperService{
    isActive:Boolean =false;
    getClass(): string {
        return this.isActive ? 'active' :'';
    }
}