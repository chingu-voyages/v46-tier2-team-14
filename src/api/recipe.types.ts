export type Recipe = {
  id: number;
  name: string;
  thumbnail_url: string;
  description: string;

  nutrition: Nutrition | null;
  tags: Tag[] | null; // for categories
  instructions: Instruction[] | null; // recipe steps
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
  temperature?: null;
  appliance?: null;
  id: number;
  display_text: string;
  position: number;
};
