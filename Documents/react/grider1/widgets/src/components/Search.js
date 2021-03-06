import React, {useState, useEffect} from 'react'
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('')
    const [result, setResult] = useState([])

    useEffect(() => {
       const search = async () => {
          const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }

            })
           setResult(data.query.search)
           console.log(result)

       }

       if (term && !result.length){
           search()
       }else {
           const timeoutId = setTimeout(()=> {
               if (term){
                   search()

               }
           }, 500)
           return ()=> {clearTimeout(timeoutId)}
       }


    }, [term])

    const renderResults = result.map((res, i)=> {
        return (
            <div key={res.pageid} className="item">
                <div className="right floated content">
                    <a className={'ui button'} href={`https://en.wikipedia.org?curid=${res.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {res.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: res.snippet}}></span>
                </div>
            </div>
        )
    })

return (
<div>
    <div className="ui form">
        <div className="field">
            <label htmlFor="Search">Enter Search Term</label>
            <input
                name="Search"
                type="text"
                className="input"
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
            />
        </div>
    </div>
    <div className="ui celled list">
        {renderResults}

    </div>
</div>
)
}
export default Search