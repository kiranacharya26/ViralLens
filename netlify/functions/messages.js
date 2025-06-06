let messages = global.messages || [];
global.messages = messages;

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(messages),
  };
}; 