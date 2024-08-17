import * as schema from '../../database/schema'
import { z, } from 'zod'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export type Member = Omit<typeof schema.members.$inferSelect, 'password_hash'>
export type NewMember = typeof schema.members.$inferInsert

export type SSGroup = typeof schema.ss_group.$inferSelect

export type Role = typeof schema.roleEnum.enumValues

export type Hymn = typeof schema.hymn.$inferSelect
export type Stanza = z.infer<typeof schema.selectSchemaHymn>
export type StanzaNew = z.infer<typeof schema.insertStanzaSchema>
export type HymnNew = z.infer<typeof schema.insertSchemaHymn>