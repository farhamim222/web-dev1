const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const blog = {
  title: 'My Week5 Blog',
  body: 'This is my first blog post for week5!',
  userId: 1,
};

const addBlog = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    console.log('✅ New Blog Added:', json);
  } catch (error) {
    console.error('❌ Error Adding Blog:', error);
  }
};

addBlog();
