import React, {FC, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(value)

    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
         e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
            />
            <button onClick={clickHandler}>ADD</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'green'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'green', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;
