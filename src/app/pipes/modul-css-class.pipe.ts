import { Pipe, PipeTransform } from "@angular/core";
import { Modul } from "../datatypes/veranstaltung";

@Pipe({
  name: "modulCssClass"
})
export class ModulCssClassPipe implements PipeTransform {
  transform(value: Modul, ...args: any[]): any {
    return "0" + value.id;
  }
}
