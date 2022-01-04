1. npm init (run this for the first times clone)

2. npm i express jsonwebtoken mongoose dotenv argon2 cors (this is all modules in project)

3. npm i --save-dev-nodemon (this command for import nodemon to dev server. this will reset when have a change )

4. npm start (run server on localhost)

5. npm install express body-parser ejs uuidv4 multer sharp --save


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


#### Create a single conversation
`POST {domain}/api/conversation/create`
| Key | Description |
| - | - |
| friendId | `String, required` |
Return `conversationId`

#### Get all single conversations
`POST {domain}/api/conversation/getconvs`
Return Array of `Conversation of Single chat` Object

#### Get a single conversation
`POST {domain}/api/conversation/get`
| Key | Description |
| - | - |
| conversationId | `String, required` |
Return `Conversation of Single chat` Object

#### Create a new message
`POST {domain}/api/message/create`
| Key | Description |
| - | - |
| conversationId | `String, required` |
| content | `String` |
| image | `String` |
Return `Message of Single chat` Object

#### Unsend a message
Recall a message
`POST {domain}/api/message/unsend`
| Key | Description |
| - | - |
| messageId | `String, required` |

#### Delete a message
`POST {domain}/api/message/delete`
| Key | Description |
| - | - |
| messageId | `String, required` |


#### Create a group conversation
`POST {domain}/api/group/conversation/create`
| Key | Description |
| - | - |
| name | `String, required`, name of this conversation |
| members | `Array of String, required` |
Return `conversationId`

#### Get all group conversations
`POST {domain}/api/group/conversation/getconvs`
Return Array of `Conversation of Group chat` Object

#### Get a group conversation
`POST {domain}/api/group/conversation/get`
| Key | Description |
| - | - |
| conversationId | `String, required` |
Return `Conversation of Group chat` Object

#### Add some users to conversation
`POST {domain}/api/group/conversation/addusers`
| Key | Description |
| - | - |
| conversationId | `String, required` |
| members | `Array of String, required` |

#### Delete some users of conversation
`POST {domain}/api/group/conversation/deleteusers`
| Key | Description |
| - | - |
| conversationId | `String, required` |
| members | `Array of String, required` |

#### Delete a group conversation
`POST {domain}/api/group/conversation/delete`
| Key | Description |
| - | - |
| conversationId | `String, required` |

#### Create a new message
`POST {domain}/api/group/message/create`
| Key | Description |
| - | - |
| conversationId | `String, required` |
| content | `String` |
| image | `String` |
Return `Message of Group chat` Object

#### Get all message of conversation
`POST {domain}/api/group/message/create`
| Key | Description |
| - | - |
| conversationId | `String, required` |
Return Array of `Message of Group chat` Object

#### Unsend a message
Recall a message
`POST {domain}/api/group/message/unsend`
| Key | Description |
| - | - |
| messageId | `String, required` |

#### Delete a message
`POST {domain}/api/group/message/delete`
| Key | Description |
| - | - |
| messageId | `String, required` |


#### Create post
`POST {domain}/api/group/post/create`
| Key | Description |
| - | - |
| content | `String` |
| image | `String`, image url |
Return `postId`

#### Get a posts
`GET {domain}/api/group/post/get/:postId`
| Key | Description |
| - | - |
| postId | `String, required` |
Return `Post` Object

#### Get all own posts
`POST {domain}/api/group/post/getposts`
| Key | Description |
| - | - |
| block | `Number, required`, start with **1**, each block contain 10 posts |
Return `postId`

#### Edit post
`POST {domain}/api/group/post/update`
| Key | Description |
| - | - |
| content | `String` |
| image | `String`, image url |

#### Delete post
`POST {domain}/api/group/post/getposts`
| Key | Description |
| - | - |
| postId | `String, required` |




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