import {TechnologyType} from "../types/TechnologyType";
import {HobbyDto} from "./HobbyDto";

export interface LoginInDto {
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  framework: TechnologyType,
  frameworkVersion: string,
  hobby: HobbyDto[],
}
