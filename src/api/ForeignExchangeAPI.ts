import {IFXResponse} from "../dto/FXResponse";
import axios from "axios";

async function getFXResponse(url: string): Promise<IFXResponse> {
    return (await axios(url)).data;
}