// Simplified Prisma client for demo
// In production, you would use the full Prisma setup
export const prisma = {
  user: {
    findUnique: async () => {
      // Return null for now - we're using in-memory auth
      return null
    }
  }
}
