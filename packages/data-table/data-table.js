import { MDCDataTableFoundation } from '@material/data-table/foundation';
import { MDCCheckbox } from '@material/checkbox';
import * as test from '@material/data-table';
import { closest } from '@material/dom/ponyfill';

export default {
  name: 'mcw-data-table',
  data() {
    return {};
  },
  methods: {
    getRows() {
      return this.foundation.getRows();
    },
    layout() {
      this.foundation.layout();
    },
    getRowByIndex_(index) {
      return this.getRows()[index];
    },

    getRowIdByIndex_(index) {
      return this.getRowByIndex_(index).getAttribute(
        test.strings.DATA_ROW_ID_ATTR,
      );
    },
  },
  mounted() {
    this.checkboxFactory_ = el => new MDCCheckbox(el);

    const { cssClasses, events, strings } = test;
    const adapter = {
      addClassAtRowIndex: (rowIndex, className) =>
        this.getRows()[rowIndex].classList.add(className),
      getRowCount: () => this.getRows().length,
      getRowElements: () =>
        [].slice.call(this.$el.querySelectorAll(strings.ROW_SELECTOR)),
      getRowIdAtIndex: rowIndex =>
        this.getRows()[rowIndex].getAttribute(strings.DATA_ROW_ID_ATTR),
      getRowIndexByChildElement: el => {
        return this.getRows().indexOf(closest(el, strings.ROW_SELECTOR));
      },
      getSelectedRowCount: () =>
        this.$el.querySelectorAll(strings.ROW_SELECTED_SELECTOR).length,
      isCheckboxAtRowIndexChecked: rowIndex =>
        this.rowCheckboxList_[rowIndex].checked,
      isHeaderRowCheckboxChecked: () => this.headerRowCheckbox_.checked,
      isRowsSelectable: () =>
        !!this.$el.querySelector(strings.ROW_CHECKBOX_SELECTOR),
      notifyRowSelectionChanged: data => {
        this.$emit(
          events.ROW_SELECTION_CHANGED,
          {
            row: this.getRowByIndex_(data.rowIndex),
            rowId: this.getRowIdByIndex_(data.rowIndex),
            rowIndex: data.rowIndex,
            selected: data.selected,
          },
          /** shouldBubble */ true,
        );
      },
      notifySelectedAll: () =>
        this.$emit(events.SELECTED_ALL, {}, /** shouldBubble */ true),
      notifyUnselectedAll: () =>
        this.$emit(events.UNSELECTED_ALL, {}, /** shouldBubble */ true),
      registerHeaderRowCheckbox: () => {
        if (this.headerRowCheckbox_) {
          this.headerRowCheckbox_.destroy();
        }

        const checkboxEl = this.$el.querySelector(
          strings.HEADER_ROW_CHECKBOX_SELECTOR,
        );
        this.headerRowCheckbox_ = this.checkboxFactory_(checkboxEl);
      },
      registerRowCheckboxes: () => {
        if (this.rowCheckboxList_) {
          this.rowCheckboxList_.forEach(checkbox => checkbox.destroy());
        }

        this.rowCheckboxList_ = [];
        this.getRows().forEach(rowEl => {
          const checkbox = this.checkboxFactory_(
            rowEl.querySelector(strings.ROW_CHECKBOX_SELECTOR),
          );
          this.rowCheckboxList_.push(checkbox);
        });
      },
      removeClassAtRowIndex: (rowIndex, className) => {
        this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: (rowIndex, attr, value) => {
        this.getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: checked => {
        this.headerRowCheckbox_.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: indeterminate => {
        this.headerRowCheckbox_.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
        this.rowCheckboxList_[rowIndex].checked = checked;
      },
    };

    this.foundation = new MDCDataTableFoundation(adapter);
    this.foundation.init();

    this.headerRow_ = this.$el.querySelector(`.${cssClasses.HEADER_ROW}`);

    this.handleHeaderRowCheckboxChange_ = () =>
      this.foundation.handleHeaderRowCheckboxChange();

    this.headerRow_.addEventListener(
      'change',
      this.handleHeaderRowCheckboxChange_,
    );

    this.content_ = this.$el.querySelector(`.${cssClasses.CONTENT}`);
    this.handleRowCheckboxChange_ = event =>
      this.foundation.handleRowCheckboxChange(event);
    this.content_.addEventListener('change', this.handleRowCheckboxChange_);

    this.layout();
  },
  beforeDestroy() {
    this.headerRow_.removeEventListener(
      'change',
      this.handleHeaderRowCheckboxChange_,
    );
    this.content_.removeEventListener('change', this.handleRowCheckboxChange_);

    if (this.headerRowCheckbox_) {
      this.headerRowCheckbox_.destroy();
    }
    if (this.rowCheckboxList_) {
      this.rowCheckboxList_.forEach(checkbox => checkbox.destroy());
    }
    this.foundation.destroy();
  },
};
