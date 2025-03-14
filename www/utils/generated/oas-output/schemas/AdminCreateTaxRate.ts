/**
 * @schema AdminCreateTaxRate
 * type: object
 * description: The tax rate's details.
 * x-schemaName: AdminCreateTaxRate
 * required:
 *   - name
 *   - tax_region_id
 *   - code
 * properties:
 *   name:
 *     type: string
 *     title: name
 *     description: The tax rate's name.
 *     example: VAT
 *   tax_region_id:
 *     type: string
 *     title: tax_region_id
 *     description: The ID of the tax region this rate belongs to.
 *   rate:
 *     type: number
 *     title: rate
 *     description: The rate to charge.
 *     example: 10
 *   code:
 *     type: string
 *     title: code
 *     description: The code the tax rate is identified by.
 *   rules:
 *     type: array
 *     description: The tax rate's rules.
 *     items:
 *       $ref: "#/components/schemas/AdminCreateTaxRateRule"
 *   is_default:
 *     type: boolean
 *     title: is_default
 *     description: Whether the tax rate is the default in its tax region.
 *   is_combinable:
 *     type: boolean
 *     title: is_combinable
 *     description: Whether the tax rate should be combined with parent rates.
 *     externalDocs:
 *       url: https://docs.medusajs.com/v2/resources/commerce-modules/tax/tax-rates-and-rules#combinable-tax-rates
 *   metadata:
 *     type: object
 *     description: The tax rate's metadata, used to store custom key-value pairs.
 * 
*/

