import { Keys } from "./Keys";

export const Show_Logs = false
export const production = true;

export const BaseUrl = production ? Keys.API_Live_Base_Url : Keys.API_Local_Base_Url;
