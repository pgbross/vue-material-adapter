const scope =
  Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

let uuid = 0;

export function useUid() {
  const uid = uuid.toString();
  uuid += 1;

  return { uid };
}

export const VMAUniqueIdMixin = {
  beforeCreate() {
    this.vma_uid_ = scope + this._uid;
  },
};
