# Close Messenger

Close Messenger is a realtime chat application that allows users to send texts, pictures, videos, gifs and more in real time. Users can also create and join group chats with their friends or colleagues. Close Messenger is built with Next.js 13, Tailwind CSS, TypeScript, Prisma, Pusher, MongoDB Atlas and Next Auth.

## Features

- Realtime chat with texts, pictures, videos, gifs and more
- Group chat functionality
- Authentication with Google and GitHub
- Responsive design 
- User profile and settings
- Chat history and notifications

## Demo

You can try out the live demo of Close Messenger here: https://close-messenger.vercel.app

## Installation

To run Close Messenger locally, you need to have Node.js and MongoDB installed on your machine. Then follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/close-messenger.git`
2. Install the dependencies: `npm install` or `yarn`
3. Create a `.env.local` file in the root directory and add the following environment variables:

```
MONGODB_URI=your mongodb connection string
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your google client id
GOOGLE_CLIENT_SECRET=your google client secret
GITHUB_CLIENT_ID=your github client id
GITHUB_CLIENT_SECRET=your github client secret
PUSHER_APP_ID=your pusher app id
PUSHER_KEY=your pusher key
PUSHER_SECRET=your pusher secret
PUSHER_CLUSTER=your pusher cluster
```

4. Run the development server: `npm run dev` or `yarn dev`
5. Open http://localhost:3000 in your browser and enjoy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
