import axios from "axios";
import { IConsultCNPJ } from "../types/consultCNPJ";


export async function consult_cnpj(cnpj: string): Promise<IConsultCNPJ | false> {
    try {
        const response = await axios.get<IConsultCNPJ>(`https://minhareceita.org/cnpj/${cnpj}`);


        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            
            console.log("Erro na requisição: =>", error.message);
            console.log("Erro na requisição:", error.response?.data);

    
        } else {
            console.log("Erro inesperado:", error);

        
        }
        return false;
    }


}
