import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
const TABLENAME = "NFT";
export const handler = async(event) => {
  const client = new DynamoDBClient({ region: "ap-southeast-1" });
    var params = {
      TableName : TABLENAME,
    }
    const command = new ScanCommand(params);
    try {
      const results = await client.send(command);
      if (results.Items === undefined) {
        return {
          statusCode: 404,
          body: "items not found."
        };
      }
      return {
        statusCode: 200,
        body: results.Items
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err.message
      };
    }
};
