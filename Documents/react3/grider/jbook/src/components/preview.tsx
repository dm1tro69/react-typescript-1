import React, {useEffect, useRef} from 'react'

interface PreviewProps {
    code: string;
}

const html = `
  <html>
   <head></head>
   <body>
     <div id="root">
     
     </div>
       <script >
          window.addEventListener('message', (event)=> {
              try {
                 eval(event.data)

              }catch (e) {
                const root = document.querySelector('#root')
                root.innerHTML = '<div style="color: red"><h4>Runtime Error</h4>' + e + '</div>'
                console.error(e)
              }
          }, false)
       </script>
   </body>
  </html>
  `

const Preview: React.FC<PreviewProps> = ({code}) => {
    const ifrem = useRef<any>()
    useEffect(()=> {
        ifrem.current.srcdoc = html
        ifrem.current.contentWindow.postMessage(code, '*')


    }, [code])

    return (
        <iframe
         title={'code preview'}
         ref={ifrem}
         sandbox={'allow-scripts'}
         srcDoc={html}/>


    )
}
export default Preview