import * as AWS from 'aws-sdk';

const config = {
    region:'us-east-1',
    secretAccessskey:'HDyd5bs27mBvhh6BX0z7lkbKYyB7AMf5I3QcQYli',
    accessKeyid:'AKIAZVL5SIR4ERFX52WK'
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
