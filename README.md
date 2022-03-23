This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. install all dependencies

```bash
npm install
```

2. Create a config file named `.env.local` with the following content:
```env
MONGODB_URI="mongodb://<user>:<password>@<host>/<collection>"
AUTH_TOKEN="<This is up to you for the API authentication>"
```

3. run the development server:

```bash
npm run dev
# or
yarn dev
```

***

## Private REST API

This project provide is a REST API to insert, update and delete the `project` page content.

### Request header

All requests MUST have the following header:

1. **Authorization**: "Bearer \<AUTH_TOKEN\>"

    Auth token is what you set in the `.env.local` file.


### Enpoints

#### GET all card
```
GET /api/project
```

Response:
```json
{
  "status": "OK",
  "message": "successfuly fetched",
  "data": [
    {
      "_id": "...",
      "name": "...",
      "description": "...",
      "photo": "...",
      "link": "...",
    }
  ]
}
```


#### EDIT card
```
POST /api/project
```

Parameters:
1. **name**: `string`
2. **data**: `object of what you want to change`

    object key must follow the data scheme such as GET response above
    

**example json body**

```json
{
    "name": "Project 1",
    "data": {
        "description": "This is the new description"
    }
}
```


#### INSERT card
```
PUT /api/project
```

Insert a new project card.
Parameters:
1. **name**: `string`
2. **description**: `string`
3. **link**: `string` (A link to the project)
4. **photo**: `string` (A link to the project image)

**example json body**

```json
{
    "name": "...",
    "description": "...",
    "link": "...",
    "photo": "..."
}
```


#### DELETE card
```
DELETE /api/project
```
Delete an existing project card.
Parameters:
1. **name**: `string`
2. **description**: `string`
3. **link**: `string` (A link to the project)
4. **photo**: `string` (A link to the project image)


**example json body**

```json
{
    "name": "...",
    "description": "...",
    "link": "...",
    "photo": "..."
}
```