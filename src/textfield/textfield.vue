<script src="./textfield.js"></script>
<template>
  <div ref="wrapper" class="textfield-container" :class="$attrs.class">
    <label
      ref="root"
      :class="rootClasses"
      :style="rippleStyles"
      v-if="!multiline"
    >
      <span class="mdc-text-field__ripple" v-if="!outline"></span>

      <slot name="leading"></slot>
      <slot name="leadingIcon"></slot>

      <mcw-floating-label
        ref="labelEl"
        v-if="hasLabel"
        :id="labelId"
        :required="required"
        >{{ label }}</mcw-floating-label
      >

      <mcw-notched-outline ref="labelEl" v-if="outline">{{
        label
      }}</mcw-notched-outline>

      <span
        class="mdc-text-field__affix mdc-text-field__affix--prefix"
        v-if="prefix"
        >{{ prefix }}</span
      >
      <input
        ref="input"
        :class="inputClasses"
        v-bind="inputAttrs"
        :type="type"
        :minlength="minlength"
        :maxlength="maxlength"
        :aria-label="label"
        :aria-controls="inputAriaControls"
        :aria-labelledby="labelId"
        :aria-describedby="inputAriaControls"
        v-on="inputListeners"
      />
      <span
        class="mdc-text-field__affix mdc-text-field__affix--suffix"
        v-if="suffix"
        >{{ suffix }}</span
      >

      <slot name="trailingIcon"></slot>
      <slot name="trailing"></slot>

      <mcw-line-ripple
        ref="lineRippleEl"
        v-if="hasLineRipple"
      ></mcw-line-ripple>
    </label>

    <label ref="root" :class="classes" v-else>
      <mcw-notched-outline ref="labelEl" v-if="outline">{{
        label
      }}</mcw-notched-outline>

      <mcw-floating-label
        ref="labelEl"
        v-if="hasLabel && !outline"
        :id="labelId"
        :required="required"
        >{{ label }}</mcw-floating-label
      >
      <span class="mdc-text-field__resizer" v-if="resizer">
        <textarea
          ref="input"
          :class="inputClasses"
          v-bind="inputAttrs"
          :minlength="minlength"
          :maxlength="maxlength"
          :aria-label="label"
          :aria-controls="inputAriaControls"
          :cols="cols"
          :rows="rows"
          v-on="inputListeners"
        ></textarea>
      </span>
      <textarea
        ref="input"
        :class="inputClasses"
        v-bind="inputAttrs"
        :minlength="minlength"
        :maxlength="maxlength"
        :aria-label="label"
        :aria-controls="inputAriaControls"
        :cols="cols"
        :rows="rows"
        v-on="inputListeners"
        v-else
      ></textarea>

      <mcw-character-counter
        ref="characterCounterEl"
        v-if="internalCharacterCounter"
      ></mcw-character-counter>
    </label>

    <div class="mdc-text-field-helper-line" v-if="hasHelpline">
      <mcw-textfield-helper-text
        ref="helpertext"
        :id="helpTextId"
        :helptext="helptext"
        :persistent="helptextPersistent"
        :validation="helptextValidation"
        v-if="helptext"
      ></mcw-textfield-helper-text>
      <mcw-character-counter
        ref="characterCounterEl"
        v-if="helperCharacterCounter"
      ></mcw-character-counter>
    </div>
  </div>
</template>
