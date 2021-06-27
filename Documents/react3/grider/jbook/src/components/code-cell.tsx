import {useState, useEffect} from 'react';
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from '../bundler'
import Reasizable from "./reasizable";

const CodeCell = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');
    const [err, setErr] = useState('');

    useEffect(()=> {
       const timer = setTimeout(async ()=> {
            const output = await bundle(input)
            setCode(output.code);
            setErr(output.err)
        }, 1000)
        return ()=> {
           clearTimeout(timer)
        }
    }, [input])

    return (
        <Reasizable direction={'vertical'}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
            <Reasizable direction={'horizontal'}>
            <CodeEditor
                onChange={(value)=> setInput(value)}
                initialValue={'const a = 1'} />
            </Reasizable>

            <Preview code={code} err={err}/>

        </div>
        </Reasizable>
    );
};
export default CodeCell

