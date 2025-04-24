// place files you want to import through the `$lib` alias in this folder.
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = global.prisma ||new PrismaClient().$extends(withAccelerate())
if(process.env.NODE_ENV==="development"){
  global.prisma=prisma
}
export {prisma}