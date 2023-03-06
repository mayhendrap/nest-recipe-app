import { Module } from '@nestjs/common';
import { RecipeService } from './services/recipe.service';
import { RecipeController } from './controllers/recipe.controller';
import { RecipeRepository } from './repositories/recipe.repository';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, RecipeRepository],
})
export class RecipeModule {}
