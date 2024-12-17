import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (event.httpMethod === 'POST') {
            // Handle POST request
            const body = JSON.parse(event.body || '{}');
            // Process the body...
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'POST request processed'
                })
            };
        } else if (event.httpMethod === 'GET') {
            // Handle GET request
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'GET request processed'
                })
            };
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal server error'
            })
        };
    }
};
