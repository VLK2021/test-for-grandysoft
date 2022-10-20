import React, {useEffect, useRef, useState} from 'react';

import './CanvasStyle.css';

const Canvas = () => {

    let [isDrawing, setIsDrawing] = useState(false);

    let canvasRef = useRef(null);
    let contextRef = useRef(null);

    useEffect(() => {
        let canvas = canvasRef.current;
        canvas.width=500;
        canvas.height=500;

        let context = canvas.getContext("2d");
        context.lineCap = "square";
        context.strokeStyle = "black";
        context.lineWidth = 2;
        contextRef.current = context;
    }, [])

    const mouseDown = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
    }

    const mouseMove = ({nativeEvent}) => {
        if (!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    }

    const mouseUp = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const clearCanvas = () => {
        let context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    return (
        <div className={'canvas'}>
            <canvas className={'canvas-block'}
                    ref={canvasRef}
                    onMouseDown={mouseDown}
                    onMouseMove={mouseMove}
                    onMouseUp={mouseUp}
            >
            </canvas>

            <div>
                <button onClick={() => clearCanvas()}>clear</button>
            </div>

        </div>
    );
};

export default Canvas;