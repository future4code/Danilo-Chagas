export enum POKEMON_KEY {
    NAME = "name",
    POKEDEX_NUMBER = "pokedexNumber",
    IMAGE_NAME = "imgName",
    GENERATION = "generation",
    EVOLUTION_STAGE = "evolutionStage",
    EVOLVED = "evolved",
    FAMILY_ID = "familyId",
    CROSS_GEN = "crossGen",
    TYPE_1 = "type1",
    TYPE_2 = "type2",
    WEATHER_1 = "weather1",
    WEATHER_2 = "weather2",
    STAT_TOTAL = "statTotal",
    ATK = "atk",
    DEF = "def",
    STA = "sta",
    LEGENDARY = "legendary",
    AQUIREABLE = "aquireable",
    SPAWNS = "spawns",
    REGIONAL = "regional",
    RAIDABLE = "raidable",
    HATCHABLE = "hatchable",
    SHINY = "shiny",
    NEST = "nest",
    NEW = "new",
    NOT_GETTABLE = "notGettable",
    FUTURE_EVOLVE = "futureEvolve",
    CP100_L40 = "cp100L40",
    CP100_L39 = "cp100L39",
}

export type pokemonFullDetail = {
    [POKEMON_KEY.NAME]: string,
    [POKEMON_KEY.POKEDEX_NUMBER]?: number,
    [POKEMON_KEY.IMAGE_NAME]?: string,
    [POKEMON_KEY.GENERATION]?: number,
    [POKEMON_KEY.EVOLUTION_STAGE]?: string,
    [POKEMON_KEY.EVOLVED]?: number,
    [POKEMON_KEY.FAMILY_ID]?: number,
    [POKEMON_KEY.CROSS_GEN]?: number,
    [POKEMON_KEY.TYPE_1]?: string,
    [POKEMON_KEY.TYPE_2]?: string,
    [POKEMON_KEY.WEATHER_1]?: string,
    [POKEMON_KEY.WEATHER_2]?: string,
    [POKEMON_KEY.STAT_TOTAL]?: number,
    [POKEMON_KEY.ATK]?: number,
    [POKEMON_KEY.DEF]?: number,
    [POKEMON_KEY.STA]?: number,
    [POKEMON_KEY.LEGENDARY]?: number,
    [POKEMON_KEY.AQUIREABLE]?: number,
    [POKEMON_KEY.SPAWNS]?: number,
    [POKEMON_KEY.REGIONAL]?: number,
    [POKEMON_KEY.RAIDABLE]?: number,
    [POKEMON_KEY.HATCHABLE]?: number,
    [POKEMON_KEY.SHINY]?: number,
    [POKEMON_KEY.NEST]?: number,
    [POKEMON_KEY.NEW]?: number,
    [POKEMON_KEY.NOT_GETTABLE]?: number,
    [POKEMON_KEY.FUTURE_EVOLVE]?: number,
    [POKEMON_KEY.CP100_L40]?: number,
    [POKEMON_KEY.CP100_L39]?: number,
}

export enum ALL_DETAILS_DTO {
    PAGE = 'page',
    QUEIRES = 'queries'
}

export type getAllDetailsDTO = {
    page: number,
    queries: pokemonFullDetail
}

export enum REQUEST_RESULT_KEYS {
    MESSAGE = 'message',
    DATA = 'data'
}

export class requestResult {
    [REQUEST_RESULT_KEYS.MESSAGE]: string
    [REQUEST_RESULT_KEYS.DATA]: any

    static toResponseOutputModel(
        message: string,
        data: any
    ): requestResult {
        return {
            [REQUEST_RESULT_KEYS.MESSAGE]: message,
            [REQUEST_RESULT_KEYS.DATA]: data
        }
    }
}


export enum DB_QUERY_REQUEST_DTO {
    LIMIT = 'limit',
    OFFSET = 'offset',
    QUEIRES = 'queries'
}

export interface databaseQueryRequestDTO {
    [DB_QUERY_REQUEST_DTO.LIMIT]: number,
    [DB_QUERY_REQUEST_DTO.OFFSET]: number,
    [DB_QUERY_REQUEST_DTO.QUEIRES]: any
}