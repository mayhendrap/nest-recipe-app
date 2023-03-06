import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { UpdateRecipeDto } from '../dto/update-recipe.dto';
import { Recipe } from '../entities/recipe.entity';
import { RecipeRepository } from '../repositories/recipe.repository';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepository.find();
  }

  async findOne(id: number): Promise<Recipe> {
    return await this.recipeRepository.findOne({ where: { id } });
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return await this.recipeRepository.save(new Recipe(createRecipeDto));
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    let recipe: Recipe = await this.recipeRepository.findOne({ where: { id } });
    recipe = { ...recipe, ...updateRecipeDto };
    return await this.recipeRepository.save(recipe);
  }

  async remove(id: number): Promise<Recipe> {
    const recipe: Recipe = await this.recipeRepository.findOne({
      where: { id },
    });
    return this.recipeRepository.remove(recipe);
  }
}
