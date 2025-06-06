let messages = global.messages || [];
global.messages = messages;

const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false,
          error: 'All fields are required' 
        })
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false,
          error: 'Invalid email format' 
        })
      };
    }

    // Store the message in the shared array
    messages.push({ name, email, message, timestamp: new Date() });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Message received successfully'
      })
    };
  } catch (error) {
    console.error('Error processing message:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        error: 'Failed to process message' 
      })
    };
  }
};

export { handler }; 