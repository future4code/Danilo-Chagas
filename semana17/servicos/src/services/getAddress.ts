import axios from "axios";

export async function getAddress (CEP: any): Promise <any> {

    const formatedCEP: string = await CEP.split("").filter((item: any) => Number(item) || Number(item) === 0 && item).join("").toString()
    
    try {
        const result: any = await axios.get(`https://viacep.com.br/ws/${formatedCEP}/json/`)
        return {
            street: result.data?.logradouro,
            district: result.data?.bairro,
            city: result.data?.localidade,
            state: result.data?.uf
        }
    } catch (err ){
        return null
    }
}