import {ResizableBox, ResizableBoxProps} from "react-resizable";
import {useEffect, useState} from "react";
import './resizable.css'

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}

const Reasizable: React.FC<ResizableProps> = ({direction, children}) => {
     const [innerHeight, setInnerHeight] = useState(window.innerHeight)
     const [innerWidth, setInnerWidth] = useState(window.innerWidth)
     const [width, setWidth] = useState(window.innerWidth * 0.75)
    useEffect(()=> {
        let timer: any;
        const listener = () => {
            if (timer){
                clearTimeout(timer)
            }
           timer = setTimeout(() =>{
                setInnerHeight(window.innerHeight)
                setInnerWidth(window.innerWidth)
               if (window.innerWidth * 0.75 > width){
                   setWidth(window.innerWidth * 0.75)
               }
            }, 100)

        }
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize' , listener)
        }
    }, [width])

    let resizableProps: ResizableBoxProps;

    if (direction === 'horizontal'){
        resizableProps = {
            className: 'resize-horizontal',
            minConstraints: [innerWidth * 0.2, Infinity],
            height:Infinity,
            width:width,
            resizeHandles:['e'],
            maxConstraints:[innerWidth * 0.75, Infinity],
            onResizeStop: (e, data) => {
               setWidth(data.size.width)
            }
        }
    }else {
        resizableProps = {
            height:300,
            width:Infinity,
            resizeHandles:['s'],
            maxConstraints:[Infinity, innerHeight * 0.9],
        }
    }

    return <ResizableBox {...resizableProps}>
        {children}
         </ResizableBox>
}
export default Reasizable