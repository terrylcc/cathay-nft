import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
const TABLENAME = "NFT";
export const handler = async(event) => {
  const client = new DynamoDBClient({ region: "ap-southeast-1" });
  var params = {
      TableName : TABLENAME,
      Item: {
        id: { S: event.id },
        custom_fields: { S : JSON.stringify(event.custom_fields)}
      }
   }
  const command = new PutItemCommand(params);
  try {
    const results = await client.send(command);
    return {
      statusCode: 200,
      body: "ok"
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
};
