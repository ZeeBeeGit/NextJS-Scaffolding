import { NextRequest, NextResponse } from 'next/server'

import excuteQuery from '../../../lib/db'

async function  DBop(values:string[]|any=null) {
    try {
        console.log("Inserting to DB...");
        const results = await excuteQuery({
          query: 'SELECT * from Test',
          values: values?.values,
      });
      console.log( results );
      return results;
  } catch ( error ) {
      console.log( error );
  }
}
  
  

 
export async function GET() {
  /*const res = await fetch('https://data.mongodb-api.com/...', {
    headers: <HeadersInit> {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })*/
  console.log("form Handler GET")
 let res ={Name:'Test Name'};
  
 
  return NextResponse.json( res );
}

export async function POST() {
  /*const res = await fetch('https://data.mongodb-api.com/...', {
    headers: <HeadersInit> {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })*/

  console.log("form Handler POST")
 //let res ={Name:'Test Name'};
 let res =  DBop(null);
  
 console.log(`-----------------
 Value= ${res}
 ---------------------`);
 
  return NextResponse.json( JSON.stringify(res) );
}