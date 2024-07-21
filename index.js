document.querySelector("button").addEventListener("click",async ()=> {
    const data = {text:"hola com estas"}
    await navigator.share(data)
    
})