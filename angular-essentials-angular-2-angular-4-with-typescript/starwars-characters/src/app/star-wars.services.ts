import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: "light" },
    { name: "Darth Vader", side: "dark" },
  ];

  private logService: LogService;

  charactersChanged = new Subject<void>();

  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    let req = this.http.get(`https://swapi.dev/api/people`);
    req.subscribe((res) => {
      console.log(res);
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
