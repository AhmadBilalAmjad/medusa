/**
 * @schema AdminFulfillmentSet
 * type: object
 * description: The service zone's fulfillment set.
 * x-schemaName: AdminFulfillmentSet
 * required:
 *   - id
 *   - name
 *   - type
 *   - location
 *   - service_zones
 *   - created_at
 *   - updated_at
 *   - deleted_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The fulfillment set's ID.
 *   name:
 *     type: string
 *     title: name
 *     description: The fulfillment set's name.
 *   type:
 *     type: string
 *     title: type
 *     description: The fulfillment set's type.
 *   location:
 *     $ref: "#/components/schemas/AdminStockLocation"
 *   service_zones:
 *     type: array
 *     description: The fulfillment set's service zones.
 *     items:
 *       $ref: "#/components/schemas/AdminServiceZone"
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The fulfillment set's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The fulfillment set's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The fulfillment set's deleted at.
 * 
*/

