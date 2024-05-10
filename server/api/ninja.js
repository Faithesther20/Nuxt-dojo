export default defineEventHandler( async(event)=>{
    // const {name} = getQuery(event)

    // // handle post Data
    // const { age } = await readBody(event)

    // api call with private key
   const  {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_q2MSF9MEIzOp7YZIkEsPCWWKrtzovMsIbe2lcapm')
   
   return data
}) 