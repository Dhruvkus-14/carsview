import {MouseEventHandler} from "react";

export interface CustomButtonprops{
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    textstyles?: string;
    rightIcon?: string;
    isDisabled? : boolean;
}
export interface SearchManufacturerprops{
    manufacturer:string;
    setmanufacturer:(manufacturer: string)=>void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }
  export interface Filterprops{
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
  }