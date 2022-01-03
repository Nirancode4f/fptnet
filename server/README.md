1. npm init (run this for the first times clone)

2. npm i express jsonwebtoken mongoose dotenv argon2 cors (this is all modules in project)

3. npm i --save-dev-nodemon (this command for import nodemon to dev server. this will reset when have a change )

4. npm start (run server on localhost)

5. npm install express body-parser ejs uuidv4 multer sharp --save


### Upload Image

POST /api/upload/image
Image upload into public/images/
Image resize to 500x500, can change in .\fptnet\server\upload\ResizeImage.js

# API Guide

## _1. API_

#### Get list of friends
`POST {domain}/api/friend/get`
Get list friends of the user that send this request
#### Send an add friend request
`POST {domain}/api/friend/sendreq`
| Key | Description |
| - | - |
| friendId | `String, required`, _id of the user that you want to send add friend request |
#### Unsend an add friend request
`POST {domain}/api/friend/unsend`
| Key | Description |
| - | - |
| friendId | `String, required`, _id of the user that you want to unsend add friend request |
#### Accept an add friend request
`POST {domain}/api/friend/accept`
| Key | Description |
| - | - |
| friendId | `String, required`, _id of the user that you want to accept add friend request |
#### Decline an add friend request
`POST {domain}/api/friend/decline`
| Key | Description |
| - | - |
| friendId | `String, required`, _id of the user that have sent you a request and you want to decline this request |
#### Unfriend
`POST {domain}/api/friend/unfriend`
| Key | Description |
| - | - |
| friendId | `String, required`, _id of the user that you want to unfriend |


## _2. Model_

### User

| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| email | `String, required, unique` |
| username | `String, required, unique` |
| password | `String, required` |
| picture | `String`, image url |
| conversations | `Array of String`, list of single conversationId |
| groupconversations | `Array of String`, list of groupconversationId |
| clubs | `Array of String`, list of clubs
| major | `String` |
| friendlist | `Object`, includes Friends, FriendRequests, SentRequests| 
| `createAt` | `Date` |

#### Object `friendlist` from User
| Field | Description |
| - | - |
| Friends | `Array of String`, list _id of friends |
| FriendRequests | `Array of String`, list _id of users that have send add friend request to this user |
| SentRequests | `Array of String`, list _id of users that this user have been sent add friend request |

### Conversation of Single chat
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| members | `Array of String`, list _id of all member |
| `createAt` | `Date` |

### Message of Single chat
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| ConversationId | `String, required`, the conversation _id of this message |
| userId | `String, required`, _id of the user that sent this message |
| content | `String` |
| unsend | `Boolean`, true if have recall this message |
| `createAt` | `Date` |

### Conversation of Group chat
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| name | `String, required`, name of this conversation |
| members | `Array of String`, list _id of all member |
| `createAt` | `Date` |

### Message of Group chat
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| ConversationId | `String, required`, the conversation _id of this message |
| userId | `String, required`, _id of the user that sent this message |
| content | `String` |
| unsend | `Boolean`, true if have recall this message |
| `createAt` | `Date` |

### Deadline
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| userId | `String, required`, _id of the user that have this deadline |
| deadline | `String, required`, description of this deadline |
| deadlinedate | `Date, required`, the time of this deadline |
| teacher | `String`, name of teacher |
| note | `String` |
| `createAt` | `Date` |

### Post
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| userId | `String, required`, _id of the user that have own this post |
| content | `String` |
| image | `String`, url of image |
| like | `Number` |
| comments | `Array of String`, list of comments _id |
| `createAt` | `Date` |

### Comment
| Field | Description |
| - | - |
| `_id` | `ObjectId` |
| postId | `String, required`, _id of the post include this comment |
| userId | `String, required`, _id of the user that send this comment |
| content | `String` |
| image | `String`, url of image |
| like | `Number` |
| `createAt` | `Date` |