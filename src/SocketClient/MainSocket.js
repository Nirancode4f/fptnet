

import socketio from "socket.io-client";

import { createContext } from "react";
const SOCKET_URL = "https://fansocket.elemarkuspet.repl.co"
export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = createContext();