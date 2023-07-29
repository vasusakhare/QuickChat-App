# QuickChat-App💬 using websockets (Nodejs, Express & Socket.io)

We are embarking on the development of a robust chat application using Express and Socket.io. Socket.io is an excellent choice for this project as it simplifies WebSocket usage and provides a fallback to XHR requests, ensuring seamless communication even in challenging network conditions.

The frontend UI will be designed based on Flexbox, avoiding the need for external UI libraries. This gives us the flexibility to create a unique and customized user interface tailored to our specific requirements.

With Socket.io, we can easily implement real-time, bidirectional communication between the server and clients. This will enable instant message delivery and updates, enhancing the overall user experience. The library's WebSocket wrapper ensures that our application can gracefully handle scenarios where WebSocket connections may not be available, by intelligently falling back to XHR requests.

The combination of Express, Socket.io, and Flexbox-based frontend will allow us to develop a seamless and visually appealing chat experience for our users. Let's get started!

---

## What is Websocket ?

WebSockets are an alternative to HTTP communication in Web Application, they offer full-duplex communication, that is, it is, bi-directional and that means the data can flow in both ways, so it can flow from client to the server and also from server to the client.

---

## To run the project

Step 1: Clone the repo

`git clone https://github.com/vasusakhare/QuickChat-App.git`

Step 2: cd into the cloned repo and run:

`npm install`

Step 3: Start the chat app (development mode)

`npm run dev`

Step 4: Start the chat app

`Go to the [server on port 3000](http://localhost:3000/)`

## License

This project is licensed under the MIT License.
