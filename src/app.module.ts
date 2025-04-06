import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db/database.sqlite',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule { }
