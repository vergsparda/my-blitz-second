import { z } from "zod";

export const CreateChoiceSchema = z.object({
  wuestionId: z.undefined(),
  text: z.string(),
  vote: z.number(),
  id: z.string(),
  // template: __fieldName__: z.__zodType__(),
});
export const UpdateChoiceSchema = CreateChoiceSchema.merge(
  z.object({
    id: z.number(),
    wuestionId: z.undefined(),
  })
);

export const DeleteChoiceSchema = z.object({
  id: z.number(),
});
