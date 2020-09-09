<template>
<div class="grid-item grid-item__address">
  <div class="grid-item__header">
    <button
      class="grid-item__button grid-item__button--danger"
      :class="delBtnClass"
      :disabled="!canDelete"
      @click="onDelete">
      Delete
    </button>
  </div>
  <div class="grid-item__content">
    <template v-if="address.organisation">
      <strong>{{ address.organisation }}</strong><br>
    </template>
    <template v-if="address.line1">
      {{ address.line1 }}<br>
    </template>

    <template v-if="address.line2">
      {{ address.line2 }}<br>
    </template>

    <template v-if="address.line3">
      {{ address.line3 }}<br>
    </template>

    <template v-if="address.town">
      {{ address.town }}<br>
    </template>

    <template v-if="address.region">
      {{ address.region }}<br>
    </template>

    <template v-if="address.postcode">
      {{ address.postcode }}<br>
    </template>
  </div>
  <div class="grid-item__footer">
    <button
      class="grid-item__button"
      :class="editBtnClass"
      :disabled="!canEdit"
      @click="onEdit">
      Edit
    </button>
    <div
      v-if="isSelected === true"
      class="grid-item__status">
      Default
    </div>
    <button
      v-else
      class="grid-item__button"
      :class="selectBtnClass"
      :disabled="!canSelect"
      @click="onSelect">
      Select
    </button>
  </div>
</div>
</template>

<script>
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
export default {
  name: 'GridAddress',
  props: {
    /** @type {Address} */
    address: {
      type: Object,
      default: () => ({
        addressId: '',
        orgId: '',
        organisation: '',
        line1: '',
        line2: '',
        line3: '',
        town: '',
        region: '',
        countryId: null,
        country: '',
        postcode: '',
      }),
      required: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /** Works out if this component instance can be deleted.
     * The component must not be selected or readonly. */
    canDelete() {
      return this.isSelected === false && this.isReadonly === false;
    },
    /** Dynamic classes for the Delete button */
    delBtnClass() {
      return this.canDelete ? '' : 'grid-item__button--disabled';
    },
    canSelect() {
      return this.address.addressId !== '' && !this.isSelected;
    },
    /** Dynamic classes for the Select button */
    selectBtnClass() {
      return this.canSelect ? '' : 'grid-item__button--disabled';
    },
    canEdit() {
      return !this.isReadonly;
    },
    editBtnClass() {
      return this.canEdit ? '' : 'grid-item__button--disabled';
    },
  },
  methods: {
    /** Emits `delete` when the delete button is pressed.
       * The component must not be `deletable` */
    onDelete() {
      if (this.canDelete) {
        this.$emit('delete', this.addressId);
      }
    },
    /** Emits `edit` when the edit button is pressed.
       * The component must not be readonly. */
    onEdit() {
      if (this.isReadonly === false) {
        this.$emit('edit', this.addressId);
      }
    },
    /** Emits `select` when the select button is pressed. */
    onSelect() {
      this.$emit('select', this.addressId);
    },
  },
};
</script>

<style lang="less">

</style>
