import {MouseEventHandler} from "react";

export interface CustomButtonprops{
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
}
export interface SearchManufacturerprops{
    manufacturer:string;
    setmanufacturer:(manufacturer: string)=>void;
}