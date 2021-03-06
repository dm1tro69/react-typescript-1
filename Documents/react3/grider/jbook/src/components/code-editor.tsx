import MonacoEditor, {EditorDidMount} from '@monaco-editor/react'
import {useRef} from "react";
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import './code-editor.css'


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue}) => {

    const editorRef = useRef<any>()

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor: any) => {
        editorRef.current = monacoEditor
       monacoEditor.onDidChangeModelContent(()=> {
           onChange(getValue())
       })
        monacoEditor.getModel()?.updateOptions({
            tabSize: 2
        })
    }

    const onFormatClick = () => {
        const unformatted = editorRef.current.getModel()?.getValue()
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '')
        editorRef.current.setValue(formatted)
    }

    return (
        <div className={'editor-wrapper'}>
            <button className={'button button-format is-primary is-small'} onClick={onFormatClick}>Format</button>
        <MonacoEditor
            options={{
                wordWrap: 'on',
                minimap: {enabled: false},
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize:16,
                scrollBeyondLastLine: false,
                automaticLayout: true,
            }
            }
            editorDidMount={onEditorDidMount}
            value={initialValue}
            language='javascript'
            theme={'dark'}
            height={'100%'}/>
        </div>
    )
}
export default CodeEditor