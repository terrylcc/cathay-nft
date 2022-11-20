import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
const TABLENAME = "NFT";
const cors_headers = {
  "Access-Control-Allow-Headers" : "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*"
};
export const handler = async(event) => {
  const client = new DynamoDBClient({ region: "ap-southeast-1" });
  if (event.httpMethod === "GET") {
    var params = {
      TableName : TABLENAME,
      Key: { 
        id: {S: event.pathParameters.id }
      }
    }
    const command = new GetItemCommand(params);
    try {
      const results = await client.send(command);
      if (results.Item === undefined) {
        return {
          statusCode: 404,
          headers: cors_headers,
          body: "item not found."
        };
      }
      return {
        statusCode: 200,
        headers: cors_headers,
        body: results.Item.custom_fields.S
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers: cors_headers,
        body: err.message
      };
    }
  }
  // TODO: implement other methods
    return {
      statusCode: 405,
      headers: cors_headers,
      body: "Method not allowed."
  }
};
