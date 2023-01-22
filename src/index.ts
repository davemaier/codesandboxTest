import { PrismaClient } from '@prisma/client'

async function listAllUsers() {
  const prisma = new PrismaClient()
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

listAllUsers()
