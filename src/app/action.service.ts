import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {


  create(): string
  {
    return "L'utilisateur est crée";
  }

  update(): string
  {
    return "L'utilisateur à été mise à jour";
  }

}
