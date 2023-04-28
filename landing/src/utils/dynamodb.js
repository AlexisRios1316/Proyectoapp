import * as AWS from 'aws-sdk';


const config = {

   region: 'us-east-1',
    
    secretAccessKey: 'Un6fBEf/Qq9Z47b9SuoK3g0kWvk6ym5betvhRP2p',
    
    accessKeyId: 'AKIAZVL5SIR4HESGWW4N'
    
    }


AWS.config.update(config);
//Conexion a dinamoDB
const db = new AWS.DynamoDB.DocumentClient();

const table = 'reservacion'; 



export const addReservation = async (data) => {

    const params = {
        TableName: table,
        Item: data
    }
    const response = await db.put(params).promise()
    console.log(response.$response.httpResponse);

}

export const getreservatios = async() => {
    const params = {
        TableName:table

    }
    const response = await db.scan(params).promise()
    console.log(response.Items)
}
