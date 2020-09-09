/**
 * @typedef {Object} Address A standard address format used by the SpiritWeb Ecommerce Package.
 * @property {string|null} addressId The ID of this address,
 *  if null, the address has yet to be saved.
 * @property {string} orgId The ID of the organisation that this address is associated with.
 * @property {string} organisation The name of an associated address,
 *  assuming the address is associated with one.
 * @property {string} line1 The first line of the address.
 * @property {string} line2 The second line of the address.
 * @property {string} line3 The third line of the address.
 * @property {string} town The town/city.
 * @property {string} region The region/county.
 * @property {string} postcode The postcode, it must include the space in the middle.
 * @property {number|null} countryId The ID of the country (provided by Spirit).
 * @property {string} country The country in which the address is located.
 */

/** @type {Array<Address>} */
const addresses = [{
  addressId: '623423c9-e68a-49c5-b46b-7ddade49b382',
  orgId: '8ff185e0-aa39-4f28-a47e-2d1d72d0ae34',
  organisation: 'Some Company',
  line1: 'Some Flat',
  line2: 'Some Lane',
  line3: 'Some Street',
  town: 'Some Town',
  region: 'Some County',
  countryId: 1,
  country: 'Some Country',
  postcode: 'P05T C0D3',
},
{
  addressId: '1b069391-358a-442a-bca4-e77549d8f829',
  orgId: '8ff185e0-aa39-4f28-a47e-2d1d72d0ae34',
  organisation: 'Some Company',
  line1: 'Different Flat',
  line2: 'Different Lane',
  line3: 'Different Street',
  town: 'Some Town',
  region: 'Some County',
  countryId: 1,
  country: 'Some Country',
  postcode: 'P05T C0D3',
}];

export default addresses;
/** @type {Address} */
export const someAddress = addresses[0];

/** @type {Address} */
export const differentAddress = addresses[1];
