import React, {useEffect, useState} from "react";

export function Card({imgSrc, 
                       rowLength, 
                       imgId, 
                       locationInGameBoardData, 
                       gameBoardData, 
                       setGameBoardData, 
                       activeImgIds, 
                       setActiveImgId}) {
    let pictureVisible = gameBoardData[locationInGameBoardData].pictureVisible;
    let cssClasses = pictureVisible ? "card card--picVisible card--" + rowLength : "card card--" + rowLength;

    const updateGameData = (locationInGameBoardData, propertyToUpdate, updatedValue) => {
        let copyOfGameBoardData = [...gameBoardData];
        let copyOfThisCardData = copyOfGameBoardData[locationInGameBoardData];
        copyOfThisCardData[propertyToUpdate] = updatedValue;
        copyOfGameBoardData.splice(locationInGameBoardData, 1, copyOfThisCardData)
        setGameBoardData(copyOfGameBoardData);
    }

    const handleCardChoice  = () => {
        updateGameData(locationInGameBoardData, "pictureVisible", true);

        let copyOfActiveImgIds = [...activeImgIds];
        copyOfActiveImgIds.push(imgId);
        setActiveImgId(copyOfActiveImgIds);
    }

    useEffect(() => {
        if (activeImgIds.length == 2) {
            if (activeImgIds[0] == activeImgIds[1]) {
                gameBoardData.forEach(function(item, index){
                    if (item.imgId == activeImgIds[0]) {
                        updateGameData(locationInGameBoardData, "matched", true);
                    }
                })
            }
            else {
                console.log('nope!');
                gameBoardData.forEach(function(item, index){
                    if (item.imgId == activeImgIds[0]) {
                        setTimeout(() => {
                            updateGameData(locationInGameBoardData, "pictureVisible", false);
                          }, 300)
                        
                    }
                })
            }
            setActiveImgId([]);
        }
    }, [activeImgIds])

    return (
        <div onClick={handleCardChoice} className={cssClasses}>
            <div className="cardShade" />
            <img src={imgSrc} />
        </div>
    )

}