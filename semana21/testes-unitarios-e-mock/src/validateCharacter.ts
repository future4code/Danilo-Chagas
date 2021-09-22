import { Character } from "./models/types";

export default function validateCharacter(character: Character): boolean {

    if (!character.name ||
        !character.stamina ||
        !character.strength ||
        !character.defense) {
        return false
    }

    if ([
        character.stamina,
        character.strength,
        character.defense
    ].some(item => item <= 0)
    ) {
        return false
    }

    return true
}