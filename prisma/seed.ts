import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create users
  const hashedPassword = await bcrypt.hash('password123', 12)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@byd.com' },
    update: {},
    create: {
      email: 'admin@byd.com',
      name: 'Admin User',
      role: 'ADMIN',
      password: hashedPassword,
    },
  })

  const approver = await prisma.user.upsert({
    where: { email: 'approver@byd.com' },
    update: {},
    create: {
      email: 'approver@byd.com',
      name: 'Approver User',
      role: 'APPROVER',
      password: hashedPassword,
    },
  })

  const contributor = await prisma.user.upsert({
    where: { email: 'contributor@byd.com' },
    update: {},
    create: {
      email: 'contributor@byd.com',
      name: 'Contributor User',
      role: 'CONTRIBUTOR',
      password: hashedPassword,
    },
  })

  console.log('✅ Users created')
  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
