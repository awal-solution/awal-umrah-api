import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('agency_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('agencies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('booking_no').nullable()
      table.string('customer_name').nullable()
      table.string('status').notNullable().defaultTo('draft')
      table.integer('group_no').nullable()
      table.string('group_name').nullable()
      table.string('category').nullable()
      table.dateTime('arrival_date').nullable()
      table.dateTime('expected_departure').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
