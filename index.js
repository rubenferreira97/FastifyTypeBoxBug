"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
const typebox_1 = require("@sinclair/typebox");
const fastify = (0, fastify_1.default)({
    ajv: {
        plugins: [type_provider_typebox_1.ajvTypeBoxPlugin]
    }
}).withTypeProvider();
fastify.get('/', {
    schema: {
        body: typebox_1.Type.Object({
            x: typebox_1.Type.String(),
            y: typebox_1.Type.Number(),
            z: typebox_1.Type.Boolean()
        })
    }
}, (req) => {
    // The `x`, `y`, `z` types are automatically inferred
    const { x, y, z } = req.body;
});
fastify.listen(3000, (err, address) => {
    if (err)
        throw err;
    // Server is now listening on ${address}
});
