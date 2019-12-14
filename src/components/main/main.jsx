import React, {useState} from "react";
import {submit} from "./main-controller";

export function Main() {

    const [endPoint, setEndPoint] = useState('');
    const [request, setRequest] = useState('{}');
    const [method, setMethod] = useState(false);
    const [response, setReqsponse] = useState('');

    return (
        <div>
            <div className="end-point">
                <label htmlFor="endPoint">Точка входа</label>
                <input type="text" value={endPoint} onChange={e => setEndPoint(e.target.value)}/>
            </div>

            <div className="method">
                <label htmlFor="method">Метод</label>
                <select id="method" value={method} onChange={e => setMethod(e.target.value)}>
                    <option value="get">get</option>
                    <option value="post">post</option>
                </select>

            </div>

            <div className="request">
                <label htmlFor="requestData">Запрос</label>
                <input type="text" value={request} onChange={e => setRequest(e.target.value)}/>
            </div>

            <button onClick={()=>submit({endPoint,request,method},setReqsponse)}>Submit</button>

            <div>{response}</div>
        </div>
    )
}
