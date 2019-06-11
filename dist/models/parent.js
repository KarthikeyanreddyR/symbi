"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filename: parent.ts
 * Created: 5.3.2019
 * Description: Parent schema. Parent has one family that it holds.
 *              From there it can manage Pet and Child classes. Parent also
 *              contains a string collection for adding optional house rules,
 *              in case they need to be indicated to the caregiver.
 */
var mongoose_1 = require("mongoose");
var ChildSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    birthDate: {
        type: String
    },
    spNeeds: {
        type: [String]
    },
    sleepTime: {
        type: String
    },
    diet: {
        type: [String]
    }
});
var PetSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    species: {
        type: String
    },
    diet: {
        type: [String]
    },
    extraNotes: {
        type: [String]
    }
});
var FamilySchema = new mongoose_1.Schema({
    children: {
        type: [ChildSchema]
    },
    pets: {
        type: [PetSchema]
    }
});
exports.ParentSchema = new mongoose_1.Schema({
    family: {
        type: FamilySchema
    },
    houseRules: {
        type: [String]
    }
});
