export function submit(options,setStateAction) {

    fetch(options.endPoint, {method:options.method, body: JSON.stringify(options.request)})
        .then(r=>r.json()).then(json=>setStateAction(json));
}
