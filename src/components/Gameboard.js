import React, {useEffect, useState} from "react";
import {Card} from "./Card.js";
import { shuffle } from "../helpers.js";

export function Gameboard({imgArray, rowLength}) {
    const [gameBoardData, setGameBoardData] = useState([]);
    const [activeImgIds, setActiveImgId] = useState([]);


    useEffect(() => {
        let newGameBoardData = [...gameBoardData];
        
        imgArray.forEach(function(imgSrc, index){
            const imgId = index; 
            let count = 0;
            while (count < 2) {
                newGameBoardData.push({
                    imgId: imgId, 
                    imgSrc: imgSrc, 
                    pictureVisible: false,
                    matched: false
                })
                count++; 
            }
        })

        shuffle(newGameBoardData);
        setGameBoardData(newGameBoardData);
    }, []);

    let createBoard = () => {
        let gameBoard = [];
        gameBoardData.forEach(function(item, index){
            gameBoard.push(
                <Card imgId={item.imgId} 
                    key={index}
                    gameBoardData={gameBoardData}
                    setGameBoardData={setGameBoardData}
                    locationInGameBoardData={index}
                    imgSrc={item.imgSrc} 
                    activeImgIds ={activeImgIds}
                    setActiveImgId={setActiveImgId}
                    />
            )
        })
        return gameBoard;
    }

    let board = createBoard();
    console.log('gameBoardData', gameBoardData);
    console.log('activeImgIds', activeImgIds);

    return (
        <div className="gameboard">
            {board}
        </div>
    )

}