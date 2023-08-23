import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class StarWarsService {
  private characters: { name: string; side: string }[] = [];

  private logService: LogService;

  charactersChanged = new Subject<void>();

  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get(`https://swapi.dev/api/people`)
      .pipe(
        map((res: any) => {
          const extractedChars = res.results;
          const chars = extractedChars.map((c: any) => {
            return { name: c.name, side: "" };
          });
          return chars;
        })
      )
      .subscribe((chars: any) => {
        console.log(chars);
        this.characters = chars;
        this.charactersChanged.next();
      });
  }

  getCharacters(chosenList: string) {
    if (chosenList === "all") {
      return this.characters.slice();
    } else {
      return this.characters.filter((c) => c.side === chosenList);
    }
  }

  onSideAssigned(character: { name: string; side: string }) {
    const pos = this.characters.findIndex((c) => c.name === character.name);
    this.characters[pos].side = character.side;
    this.logService.writeLog(`Change side: ${JSON.stringify(character)}`);
    this.charactersChanged.next();
  }

  addCharacter(name: string, side: string) {
    let newChar = { name, side };
    this.characters.push(newChar);
  }
}
