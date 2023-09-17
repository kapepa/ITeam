import {HobbyDuration} from "../types/HobbyDuration";

export interface HobbyDto {
  name: string,
  duration: HobbyDuration | string,
}
