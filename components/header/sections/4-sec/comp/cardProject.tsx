import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { DivIcons } from "../../../../Icons/cardKnowledge/devincon";
import { StackIcon } from "./stackicon";
import { Button, CardActions } from "@mui/material";


interface CardProjectProps{
    Title:string,
    Stacks: StackIcon[],
    Image:string,
    Description?:string
}

export default function CardProject(props:CardProjectProps) {

  return (
    <div>
        <div className="cpTitle">
            <h3>{props.Title}</h3>
        </div>
        <div className="cpName">
            {props.Stacks.map((item, index) => (
                <p key={index}  style={{ backgroundColor: item.Color }} >{DivIcons[item.Name] + item.Name}</p>
            ))}
        </div>
        <div className="cpImage">
            <img src={props.Image} alt={props.Title}/>
        </div>
        
        <div className="cpFooter">
            <CardActions>
                <Button>
                    read more...
                </Button>
        </CardActions>
        </div>
    </div>
  );
}
