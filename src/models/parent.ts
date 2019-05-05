/**
 * Filename: parent.ts
 * Created: 5.3.2019
 * Description: Parent schema. Parent has one family that it holds. 
 *              From there it can manage Pet and Child classes. Parent also
 *              contains a string collection for adding optional house rules,
 *              in case they need to be indicated to the caregiver.
 */
import { Document, Schema, Model, model} from "mongoose";
import { FamilySchema } from "./family";

export const ParentSchema:Schema = new Schema(
    {
        family: {
            type: FamilySchema
        },
        houseRules: {
            type: [String]
        }
    }
);