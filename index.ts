import Fastify from 'fastify'
import { ajvTypeBoxPlugin, TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'

const fastify = Fastify({
  ajv: {
    plugins: [ajvTypeBoxPlugin]
  }
}).withTypeProvider<TypeBoxTypeProvider>()

fastify.get('/', {
    schema: {
      body: Type.Object({
        x: Type.String(),
        y: Type.Number(),
        z: Type.Boolean()
      })
    }
  }, (req) => {
    // The `x`, `y`, `z` types are automatically inferred
    const { x, y, z } = req.body
  })

  fastify.listen(3000, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
  })