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

export enum POKEMON_KEY_TYPEOFF {
    NAME = "string",
    POKEDEX_NUMBER = "number",
    IMAGE_NAME = "string",
    GENERATION = "number",
    EVOLUTION_STAGE = "string",
    EVOLVED = "number",
    FAMILY_ID = "number",
    CROSS_GEN = "number",
    TYPE_1 = "string",
    TYPE_2 = "string",
    WEATHER_1 = "string",
    WEATHER_2 = "string",
    STAT_TOTAL = "number",
    ATK = "number",
    DEF = "number",
    STA = "number",
    LEGENDARY = "number",
    AQUIREABLE = "number",
    SPAWNS = "number",
    REGIONAL = "number",
    RAIDABLE = "number",
    HATCHABLE = "number",
    SHINY = "number",
    NEST = "number",
    NEW = "number",
    NOT_GETTABLE = "number",
    FUTURE_EVOLVE = "number",
    CP100_L40 = "number",
    CP100_L39 = "number"
}

export type pokemonFullDetail = {
    [POKEMON_KEY.NAME]: string,
    [POKEMON_KEY.POKEDEX_NUMBER]?: number,
    [POKEMON_KEY.IMAGE_NAME]?: string,
    [POKEMON_KEY.GENERATION]?: number,
    [POKEMON_KEY.EVOLUTION_STAGE]?: string | number | "Envolved" | "Lower",
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

export enum REQ_DETAILS_DTO {
    PAGE = 'page',
    QUEIRES = 'queries',
    DETAILS = 'details'
}

export type reqDetailsDTO = {
    [REQ_DETAILS_DTO.PAGE]: number,
    [REQ_DETAILS_DTO.QUEIRES]: pokemonFullDetail,
    [REQ_DETAILS_DTO.DETAILS]?: pokemonFullDetail,

}

export enum RESPONSE_RESULT_KEYS {
    MESSAGE = 'message',
    DATA = 'data'
}

export class responseResult {
    [RESPONSE_RESULT_KEYS.MESSAGE]: string
    [RESPONSE_RESULT_KEYS.DATA]: any

    static toResponseOutputModel(
        message: string,
        data: any
    ): responseResult {
        return {
            [RESPONSE_RESULT_KEYS.MESSAGE]: message,
            [RESPONSE_RESULT_KEYS.DATA]: data
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

export enum DB_RESULT_KEYS {
    TOTAL_RESULT = 'totalResults',
    CURR_PAGE = 'currentPage',
    TOTAL_PAGES = 'totalPages',
    RESULT = 'result'
}

export interface databaseResult {
    [DB_RESULT_KEYS.TOTAL_RESULT]: number,
    [DB_RESULT_KEYS.CURR_PAGE]: number,
    [DB_RESULT_KEYS.TOTAL_PAGES]: number,
    [DB_RESULT_KEYS.RESULT]: any[],
}

export interface newPokemonDTO extends pokemonFullDetail {
    [POKEMON_KEY.NAME]: string
}


/*
nome / unico string
pokedexnumber /unico
geração
evolution stage string number | Envolved | Lower
type 1 string
type 2? string | null
ATK number
DEF number
STA number



autoincrement
row
Img name  = pokedex number | string enviada
STAT TOTAL soma de ATK DEF STA

CP 40 ((Base_Attack + 15) * ((Base_Defense + 15)^0.5 * (Base_Stamina + 15)^0.5 * 0.7903001^2) / 10
CP 39 ((Base_Attack + 15) * ((Base_Defense + 15)^0.5 * (Base_Stamina + 15)^0.5 * 0.784637^2) / 10
*/