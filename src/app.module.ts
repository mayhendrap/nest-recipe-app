import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => dataSourceOptions,
    }),
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
