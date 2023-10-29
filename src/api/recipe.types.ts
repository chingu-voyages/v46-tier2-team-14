export type Recipe = {
  id: number;
  name: string;
  thumbnail_url: string;
  description: string;
  original_video_url: string;

  cook_time_minutes: number | null;
  prep_time_minutes: number | null;
  total_time_minutes: number | null;
  total_time_tier: TotalTimeTier | null;

  user_ratings: UserRatings;

  yields: string;
  servings_noun_plural: string;
  num_servings: number;
  servings_noun_singular: string;

  nutrition: Nutrition | null;
  tags: Tag[] | null; // for categories
  instructions: Instruction[] | null; // for recipe steps
  sections: Section[] | null; // for ingredients
};

export type UserRatings = {
  count_positive: number;
  score: number;
  count_negative: number;
};

export type TotalTimeTier = {
  tier: string;
  display_tier: string;
};

export type Nutrition = {
  updated_at: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  sugar: number;
  fiber: number;
};

export type Tag = {
  id: number;
  name: string;
  display_name: string;
  type: string;
  root_tag_type: string;
};

export type Instruction = {
  start_time: number;
  end_time: number;
  temperature: number | null;
  appliance: string | null;
  id: number;
  display_text: string;
  position: number;
};

// ingredient types
export type Section = {
  components: Component[] | null;
  name: string | null;
  position: number;
};

export type Component = {
  measurements: Measurement[] | null;
  raw_text: string;
  extra_comment: string;
  ingredient: Ingredient;
  id: number;
  position: number;
};

export type Measurement = {
  unit: Unit;
  quantity: string;
  id: number;
};
export type Ingredient = {
  created_at: number;
  display_plural: string;
  id: number;
  display_singular: string;
  updated_at: number;
  name: string;
};

export type Unit = {
  abbreviation: string;
  system: string;
  name: string;
  display_plural: string;
  display_singular: string;
};
