import { Interface } from "readline";
import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: "sums2j0m",
  },
});

interface TestType {
  ID: number;
  Comment: string;
  CreatedTS: string;
}
export default async function excuteQuery({
  query,
  values,
}: {
  query: string;
  values: any[];
}) {
  try {
    console.log(`Execute Query ` + process.env.MYSQL_DATABASE);
    const results = <string[]>await db.query(query, values);
    console.log(`
    ------------****************
      result= ${results[0][0]}
    ------------****************`);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
