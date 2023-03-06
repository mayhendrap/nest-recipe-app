import { DataSource, DataSourceOptions } from 'typeorm';
import { Recipe } from '../src/recipe/entities/recipe.entity';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: configService.get<any>('DB_TYPE'),
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASS'),
  database: configService.get<string>('DB_NAME'),
  synchronize: true,
  logging: true,
  entities: [Recipe],
  subscribers: [],
  migrations: [],
};

export const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
