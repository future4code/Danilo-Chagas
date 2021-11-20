import CRUDRepository from "./CreateRepository";

export default class CreateBusiness {
    constructor(private database: CRUDRepository) { }

    public async createPokemon(){
        //verifica se nome do pokemon existe | se sim, encerra rotina
        //rotina para registrar pokemon
        //necessário:
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
    }
}