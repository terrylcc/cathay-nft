import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
const TABLENAME = "Account";
export const handler = async(event) => {
  const client = new DynamoDBClient({ region: "ap-southeast-1" });
  const collections = {nft_collections: event.nft_collections};
  var params = {
      TableName : TABLENAME,
      Item: {
        id: { S: event.id },
        nft_collections: { S : JSON.stringify(event.nft_collections)}
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
