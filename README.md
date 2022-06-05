This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. install all dependencies

```bash
npm install
```

2. Create a config file named `.env.local` with the following content:
```env
NEXT_PUBLIC_FIREBASE_API_KEY="<API key from Firebase>"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="<Aauth Domain from Firebase>"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="<Project ID from Firebase>"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="<Storage Bucket from Firebase>"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="<Sender ID from Firebase>"
NEXT_PUBLIC_FIREBASE_APP_ID="<App ID from Firebase>"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="<Measurement ID from Firebase>"
```

3. run the development server:

```bash
npm run dev
# or
yarn dev
```

***

## Admin Dashboard

To access the admin dashboard, go to `<yoursite>/admin`.
This will promt you to input an email and password.
Create the user on firebase console if you have not created it yet.
