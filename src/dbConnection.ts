import mongoose from 'mongoose'

export const connectMongo = async (): Promise<typeof mongoose> => {
  try {
    return await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: process.env.DATABASE,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    throw new Error(`Cannot connect to database: ${error}`)
  }
}
