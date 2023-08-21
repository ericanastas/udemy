export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: "light" },
    { name: "Darth Vader", side: "dark" },
  ];

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
  }
}
