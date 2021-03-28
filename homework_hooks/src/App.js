import React, {useEffect, useState} from "react";

export default App => {
    function useMouse(){
        const [x, setX] = useState(0);
        const [y, setY] = useState(0);

        const mouseMoveHandler = event => {
            setX(event.clientX)
            setY(event.clientY)
        };

        useEffect(() => {
            document.addEventListener("mousemove", mouseMoveHandler);
        }, [x, y]);
        return {x,y}
    }
    function useSizeScreen(){
        const [width, setWidth] = useState(window.outerWidth)
        const [height, setHeight] = useState(window.outerHeight)

        const  screenSizeHandler = () =>{
            setWidth(window.outerWidth)
            setHeight(window.outerHeight)

        }
        useEffect(()=>{
            window.addEventListener("resize",  screenSizeHandler)

        },[width, height])
        return {width,height}
    }


    return (
        <div>
            <p>
                Координаты мыши: {`${useMouse().x} X ${useMouse().y}`}
            </p>
            <p>
                Размер экрана: {`${useSizeScreen().width} X ${useSizeScreen().height}`}
            </p>

        </div>
    );
};
