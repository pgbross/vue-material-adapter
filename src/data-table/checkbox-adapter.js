export class CheckboxAdapter {
  constructor(mcwCheckbox) {
    this.checkbox = mcwCheckbox;
  }
  get checked() {
    return this.checkbox.isChecked();
  }
  set checked(checked) {
    this.checkbox.setChecked(checked);
  }

  get indeterminate() {
    return this.checkbox.isIndeterminate();
  }
  set indeterminate(indeterminate) {
    this.checkbox.setIndeterminate(indeterminate);
  }

  destroy() {
    // noop
  }
}
