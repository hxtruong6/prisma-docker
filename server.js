const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
const port = 8080;

app.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  res.status(200).json({ message: 'hello world - test prisma ', users: allUsers });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
