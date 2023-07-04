import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://StitchS2:G3t5atiFGVtIOsnX@cluster0.gjtiu2x.mongodb.net/',
    ),
    UsersModule,
  ],
})
export class AppModule {}
